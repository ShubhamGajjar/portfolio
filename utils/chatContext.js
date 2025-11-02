// utils/chatContext.js
import {
  projects,
  skills,
  researchPapers,
  socialLinks,
  experience,
} from "./data";

/**
 * Builds a comprehensive context string for the Gemini API
 * containing all portfolio information
 */
export function buildChatContext() {
  let context = `You are an AI assistant helping visitors learn about Shubham Gajjar, an AI Engineer and Research Specialist.

PERSONAL INFORMATION:
- Name: Shubham Gajjar
- Role: AI Engineer & Research Specialist
- Experience: ${experience}
- Email: ${socialLinks.email}
- GitHub: ${socialLinks.github}
- LinkedIn: ${socialLinks.linkedin}
- Twitter/X: ${socialLinks.x}

TECHNICAL SKILLS:
`;

  // Format skills by category
  for (const [category, skillList] of Object.entries(skills)) {
    context += `\n${category}:\n`;
    skillList.forEach((skill) => {
      context += `  - ${skill}\n`;
    });
  }

  context += `\n\nPROJECTS (${projects.length} total):\n`;
  projects.forEach((project, index) => {
    context += `\n${index + 1}. ${project.title}\n`;
    context += `   Description: ${project.description}\n`;
    context += `   Technologies: ${project.technologies.join(", ")}\n`;
    context += `   Category: ${project.category}\n`;
    if (project.github) {
      context += `   GitHub: ${project.github}\n`;
    }
    context += `   Status: ${project.status}\n`;
  });

  context += `\n\nRESEARCH PAPERS (${researchPapers.length} total):\n`;
  researchPapers.forEach((paper, index) => {
    context += `\n${index + 1}. ${paper.title}\n`;
    context += `   Authors: ${paper.authors}\n`;
    context += `   Conference/Journal: ${paper.conference}\n`;
    context += `   Status: ${paper.status}\n`;
    context += `   Year: ${paper.year}\n`;
    context += `   Description: ${paper.description}\n`;
    if (paper.keywords && paper.keywords.length > 0) {
      context += `   Keywords: ${paper.keywords.join(", ")}\n`;
    }
  });

  context += `\n\nINSTRUCTIONS:
- Answer questions about Shubham's resume, CV, skills, projects, research, and portfolio
- Be conversational, friendly, and helpful
- Provide accurate information based only on the context above
- If asked about something not in the context, politely say you don't have that information
- When mentioning projects or research, include relevant details like technologies used, status, or achievements
- Keep responses concise but informative (2-3 paragraphs maximum)
- For contact information, mention all available channels (email, GitHub, LinkedIn, Twitter/X)
- IMPORTANT: DO NOT use markdown formatting (no **bold**, *italic*, # headers, or any markdown syntax)
- Use plain text only - write naturally without any formatting symbols
- Use bullet points with dashes (-) or asterisks (*) for lists, but NOT for formatting
- Do not use ** or * for emphasis - just write clearly

You can answer questions about:
- Resume and CV content
- Technical skills and expertise
- Projects (descriptions, technologies, GitHub links)
- Research papers and publications
- Contact information
- Overall background and experience`;

  return context;
}
