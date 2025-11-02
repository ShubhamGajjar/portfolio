// pages/api/chat.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildChatContext } from "../../utils/chatContext";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Strip markdown formatting from text
function stripMarkdown(text) {
  if (!text) return text;
  
  // First, normalize bullet points to use • so we can distinguish them
  let cleaned = text.replace(/^(\s*)[-*]\s+/gm, '$1• ');
  
  // Remove **bold**
  cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, '$1');
  
  // Remove *italic* but NOT bullet points (which now use •)
  cleaned = cleaned.replace(/\*([^*\n]+)\*/g, '$1');
  
  // Remove headers
  cleaned = cleaned.replace(/#{1,6}\s+/g, '');
  
  // Remove inline code
  cleaned = cleaned.replace(/`([^`]+)`/g, '$1');
  
  // Remove code blocks
  cleaned = cleaned.replace(/```[\s\S]*?```/g, '');
  
  // Remove links but keep text
  cleaned = cleaned.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  
  // Remove strikethrough
  cleaned = cleaned.replace(/~~(.*?)~~/g, '$1');
  
  return cleaned.trim();
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Check if API key exists
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set");
    return res.status(500).json({
      error:
        "API key is not configured. Please check your environment variables.",
    });
  }

  try {
    const { message, conversationHistory = [] } = req.body;

    // Validate input
    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return res
        .status(400)
        .json({ error: "Message is required and must be a non-empty string" });
    }

    // Limit message length to prevent abuse
    if (message.length > 500) {
      return res
        .status(400)
        .json({ error: "Message is too long. Maximum 500 characters." });
    }

    // Build the context
    const context = buildChatContext();

    // Build conversation history for context
    let conversationContext = context;
    
    // Add recent conversation history (last 5 messages for context)
    if (conversationHistory.length > 0) {
      const recentHistory = conversationHistory.slice(-5);
      conversationContext += "\n\nRECENT CONVERSATION:\n";
      recentHistory.forEach((msg) => {
        conversationContext += `${
          msg.role === "user" ? "User" : "Assistant"
        }: ${msg.content}\n`;
      });
      conversationContext += "\nCurrent User Question: " + message;
    } else {
      conversationContext += "\n\nCurrent User Question: " + message;
    }

    // Add reminder about no markdown
    conversationContext += "\n\nREMINDER: Respond in plain text only. Do not use markdown formatting like **bold** or *italic*. Write naturally without formatting symbols.";

    // Try different models in order of preference
    // Updated to use available models from API
    const modelNames = [
      "gemini-2.5-flash-preview-05-20", // Fast and efficient
      "gemini-2.5-pro-preview-03-25", // More capable
      "gemini-1.5-flash", // Fallback
      "gemini-1.5-pro", // Fallback
    ];
    let text = null;
    let lastError = null;

    for (const modelName of modelNames) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        console.log(`Attempting to use model: ${modelName}`);

        // Generate response
        const result = await model.generateContent(conversationContext);
        const response = await result.response;
        let rawText = response.text();
        // Strip any markdown that might still be in the response
        text = stripMarkdown(rawText);
        console.log(`✅ Successfully used model: ${modelName}`);
        break; // Success, exit loop
      } catch (modelError) {
        console.warn(
          `${modelName} failed:`,
          modelError.message?.substring(0, 100)
        );
        lastError = modelError;
        continue; // Try next model
      }
    }

    // If all models failed
    if (!text) {
      throw lastError || new Error("All Gemini models failed");
    }

    // Return the response
    return res.status(200).json({
      success: true,
      message: text.trim(),
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    console.error("Error details:", {
      message: error.message,
      name: error.name,
      stack: error.stack?.substring(0, 200),
    });

    // Handle specific Gemini API errors
    if (
      error.message?.includes("API_KEY") ||
      error.message?.includes("api key") ||
      error.message?.includes("invalid API key")
    ) {
      return res.status(500).json({
        error:
          "API key is invalid or missing. Please check your configuration.",
      });
    }

    if (
      error.message?.includes("quota") ||
      error.message?.includes("rate") ||
      error.message?.includes("429") ||
      error.message?.toLowerCase().includes("resource exhausted")
    ) {
      return res.status(429).json({
        error: "Rate limit exceeded. Please try again later.",
      });
    }

    // Check for model errors
    if (
      error.message?.includes("model") ||
      error.message?.includes("not found")
    ) {
      return res.status(500).json({
        error:
          "Model not available. Please check the model name configuration.",
      });
    }

    // Generic error response with more detail in development
    return res.status(500).json({
      error:
        process.env.NODE_ENV === "development"
          ? `Error: ${error.message || "Unknown error"}`
          : "An error occurred while processing your request. Please try again.",
    });
  }
}
