// components/Chatbot.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  ClipboardDocumentIcon,
  CheckIcon,
  SparklesIcon,
  ArrowDownTrayIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { track } from "@vercel/analytics/react";
import { projects } from "../utils/data";

const SUGGESTED_QUESTIONS = [
  "What are your technical skills?",
  "Tell me about your projects",
  "How can I contact you?",
  "What's your experience?",
  "Tell me about your AI/ML work",
];

const Chatbot = ({ onToggleRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const initialMessage = {
    role: "assistant",
    content:
      "Hi! I'm here to help you learn about Shubham's work. You can ask me about:\n\n• Resume & Experience\n• Technical Skills\n• Projects\n• Journey & Research\n• Contact Information\n\nWhat would you like to know?",
    timestamp: new Date().toISOString(),
    isStreaming: false,
    streamingContent: "",
  };

  // Load messages from localStorage on mount
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chatbot_messages");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return parsed.length > 0 ? parsed : [initialMessage];
        } catch {
          return [initialMessage];
        }
      }
    }
    return [initialMessage];
  });

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rateLimited, setRateLimited] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [copiedMessageId, setCopiedMessageId] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [streamingMessageId, setStreamingMessageId] = useState(null);
  const [elasticOffset, setElasticOffset] = useState(0);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const chatWindowRef = useRef(null);
  const inputRef = useRef(null);
  const lastRequestTimeRef = useRef(0);
  const cooldownTimerRef = useRef(null);
  const streamingTimerRef = useRef(null);
  const wheelTimeoutRef = useRef(null);
  const touchTimeoutRef = useRef(null);
  const momentumAnimationRef = useRef(null);
  const touchVelocityRef = useRef({ vx: 0, vy: 0, lastTime: 0, lastY: 0 });

  // Minimum time between requests (2 seconds)
  const MIN_REQUEST_INTERVAL = 2000;

  // Cooldown period after rate limit (30 seconds)
  const RATE_LIMIT_COOLDOWN = 30000;

  // Streaming settings
  const STREAMING_DELAY = 30; // milliseconds between characters

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined" && messages.length > 0) {
      // Filter out streaming properties before saving
      const messagesToSave = messages.map((msg) => {
        const { isStreaming, streamingContent, ...msgToSave } = msg;
        return msgToSave;
      });
      localStorage.setItem("chatbot_messages", JSON.stringify(messagesToSave));
    }
  }, [messages]);

  // Scroll to bottom when new messages arrive or streaming updates
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessageId]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Prevent main window scroll when cursor is in chatbot window
  useEffect(() => {
    const chatWindow = chatWindowRef.current;
    const messagesContainer = messagesContainerRef.current;

    if (!chatWindow || !isOpen) return;

    const handleWheel = (e) => {
      // Always prevent scroll from propagating to main window when inside chatbot
      e.stopPropagation();
      e.preventDefault(); // Always prevent to stop body scroll

      // Clear any existing timeout
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }

      if (messagesContainer) {
        // Check if scroll is happening in the messages container area
        const rect = messagesContainer.getBoundingClientRect();
        const isOverMessages =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (isOverMessages) {
          const { scrollTop, scrollHeight, clientHeight } = messagesContainer;
          const isAtTop = scrollTop <= 1;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

          // Check if trying to scroll past boundaries (elastic effect)
          if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
            // Apply elastic effect - invert the direction for proper stretch
            const resistance = 0.5; // Resistance factor
            const offset = -e.deltaY * resistance; // Invert sign for correct direction
            const clampedOffset = Math.max(-20, Math.min(20, offset)); // Limit to 20px

            setElasticOffset(clampedOffset);

            // Reset after scroll stops (reset timeout on each scroll event)
            if (wheelTimeoutRef.current) {
              clearTimeout(wheelTimeoutRef.current);
            }
            wheelTimeoutRef.current = setTimeout(() => {
              setElasticOffset(0);
              wheelTimeoutRef.current = null;
            }, 200); // Wait for scroll to stop before bouncing back
          } else {
            // Only scroll the messages container if not at boundaries
            messagesContainer.scrollTop += e.deltaY;
            // Reset elastic offset immediately
            setElasticOffset(0);
          }
        } else {
          // Reset if not over messages
          setElasticOffset(0);
        }
      }
    };

    const handleTouchMove = (e) => {
      // Always prevent main window scroll when touching chatbot
      e.stopPropagation();

      if (messagesContainer) {
        const touch = e.touches[0] || e.changedTouches[0];
        if (touch) {
          const rect = messagesContainer.getBoundingClientRect();
          const isOverMessages =
            touch.clientX >= rect.left &&
            touch.clientX <= rect.right &&
            touch.clientY >= rect.top &&
            touch.clientY <= rect.bottom;

          if (isOverMessages) {
            const { scrollTop, scrollHeight, clientHeight } = messagesContainer;
            const tolerance = 5; // Small tolerance for boundary detection
            const isAtTop = scrollTop <= tolerance;
            const isAtBottom =
              scrollTop + clientHeight >= scrollHeight - tolerance;

            const prevTouchY = messagesContainer.dataset.lastTouchY;
            const currentTime = Date.now();

            // Track velocity for momentum scrolling
            if (touchVelocityRef.current.lastTime > 0) {
              const timeDelta = currentTime - touchVelocityRef.current.lastTime;
              if (timeDelta > 0) {
                const deltaY = touch.clientY - touchVelocityRef.current.lastY;
                // Calculate velocity (pixels per millisecond)
                touchVelocityRef.current.vy = deltaY / timeDelta;
              }
            }
            touchVelocityRef.current.lastTime = currentTime;
            touchVelocityRef.current.lastY = touch.clientY;

            if (prevTouchY !== undefined) {
              const deltaY = touch.clientY - parseFloat(prevTouchY);

              // Always prevent default to stop main window scroll
              e.preventDefault();

              // Standard mobile scroll: drag down = scroll up, drag up = scroll down
              // deltaY > 0 (finger moves down) → scroll up (decrease scrollTop)
              // deltaY < 0 (finger moves up) → scroll down (increase scrollTop)

              // Calculate new scroll position
              const newScrollTop = messagesContainer.scrollTop - deltaY;
              const maxScrollTop = scrollHeight - clientHeight;

              // Check if trying to scroll past boundaries (would go negative or exceed max)
              const wouldScrollPastTop = newScrollTop < 0;
              const wouldScrollPastBottom = newScrollTop > maxScrollTop;

              if (wouldScrollPastTop || wouldScrollPastBottom) {
                // Apply elastic effect - only when actually trying to scroll past
                const resistance = 0.5;
                let offset;

                if (wouldScrollPastTop) {
                  // At top trying to scroll up → stretch down (positive offset)
                  offset = Math.abs(deltaY) * resistance;
                } else {
                  // At bottom trying to scroll down → stretch up (negative offset)
                  offset = -Math.abs(deltaY) * resistance;
                }

                const clampedOffset = Math.max(-20, Math.min(20, offset));

                setElasticOffset(clampedOffset);

                // Reset after touch stops
                if (touchTimeoutRef.current) {
                  clearTimeout(touchTimeoutRef.current);
                }
                touchTimeoutRef.current = setTimeout(() => {
                  setElasticOffset(0);
                  touchTimeoutRef.current = null;
                }, 200);
              } else {
                // Allow normal scrolling (within boundaries)
                messagesContainer.scrollTop = newScrollTop;

                // Reset elastic if it was active
                if (elasticOffset !== 0) {
                  setElasticOffset(0);
                }
              }
            } else {
              // First touch move - prevent default to stop body scroll
              e.preventDefault();
            }
            messagesContainer.dataset.lastTouchY = touch.clientY;
          } else {
            // If touch is over other parts (header, input), always prevent
            e.preventDefault();
          }
        } else {
          // No touch data, prevent to be safe
          e.preventDefault();
        }
      } else {
        // If no messages container, always prevent default
        e.preventDefault();
      }
    };

    const handleTouchStart = (e) => {
      // Always prevent main window scroll when starting touch in chatbot
      e.stopPropagation();

      // Cancel any existing momentum animation
      if (momentumAnimationRef.current) {
        cancelAnimationFrame(momentumAnimationRef.current);
        momentumAnimationRef.current = null;
      }

      // Reset velocity tracking
      touchVelocityRef.current = {
        vx: 0,
        vy: 0,
        lastTime: Date.now(),
        lastY: 0,
      };

      if (messagesContainer) {
        const touch = e.touches[0];
        if (touch) {
          messagesContainer.dataset.lastTouchY = touch.clientY;
          touchVelocityRef.current.lastY = touch.clientY;
        }
      }
      // Don't prevent default on touchstart to allow native scrolling
    };

    const handleTouchEnd = () => {
      // Reset immediately when touch ends
      setElasticOffset(0);
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = null;
      }

      // Apply momentum scrolling if there's velocity
      if (messagesContainer && Math.abs(touchVelocityRef.current.vy) > 0.1) {
        const velocity = touchVelocityRef.current.vy;
        const deceleration = 0.95; // Deceleration factor (0.95 = 5% reduction per frame)
        let currentVelocity = velocity * 10; // Scale velocity for smoother animation

        // Cancel any existing momentum animation
        if (momentumAnimationRef.current) {
          cancelAnimationFrame(momentumAnimationRef.current);
        }

        const animateMomentum = () => {
          if (Math.abs(currentVelocity) < 0.1) {
            // Velocity too low, stop animation
            momentumAnimationRef.current = null;
            return;
          }

          const { scrollTop, scrollHeight, clientHeight } = messagesContainer;
          const maxScrollTop = scrollHeight - clientHeight;

          // Calculate new scroll position
          const deltaScroll = currentVelocity;
          let newScrollTop = scrollTop - deltaScroll;

          // Clamp to boundaries
          if (newScrollTop < 0) {
            newScrollTop = 0;
            currentVelocity = 0;
          } else if (newScrollTop > maxScrollTop) {
            newScrollTop = maxScrollTop;
            currentVelocity = 0;
          }

          // Apply scroll
          messagesContainer.scrollTop = newScrollTop;

          // Decelerate
          currentVelocity *= deceleration;

          // Continue animation
          momentumAnimationRef.current = requestAnimationFrame(animateMomentum);
        };

        momentumAnimationRef.current = requestAnimationFrame(animateMomentum);
      }

      // Reset velocity tracking
      touchVelocityRef.current = { vx: 0, vy: 0, lastTime: 0, lastY: 0 };

      if (messagesContainer) {
        delete messagesContainer.dataset.lastTouchY;
      }
    };

    // Add event listeners to entire chatbot window with capture phase to catch early
    chatWindow.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });
    chatWindow.addEventListener("touchstart", handleTouchStart, {
      passive: false,
      capture: true,
    });
    chatWindow.addEventListener("touchmove", handleTouchMove, {
      passive: false,
      capture: true,
    });
    chatWindow.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      chatWindow.removeEventListener("wheel", handleWheel, { capture: true });
      chatWindow.removeEventListener("touchstart", handleTouchStart, {
        capture: true,
      });
      chatWindow.removeEventListener("touchmove", handleTouchMove, {
        capture: true,
      });
      chatWindow.removeEventListener("touchend", handleTouchEnd);
      // Clean up timeouts
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
        wheelTimeoutRef.current = null;
      }
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = null;
      }
      // Clean up touch tracking data
      if (messagesContainer) {
        delete messagesContainer.dataset.lastTouchY;
      }
      // Reset elastic offset
      setElasticOffset(0);
    };
  }, [isOpen]);

  // Cooldown timer
  useEffect(() => {
    if (rateLimited && cooldownSeconds > 0) {
      const timer = setTimeout(() => {
        setCooldownSeconds((prev) => {
          if (prev <= 1) {
            setRateLimited(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [rateLimited, cooldownSeconds]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) {
        clearTimeout(cooldownTimerRef.current);
      }
      if (streamingTimerRef.current) {
        clearInterval(streamingTimerRef.current);
      }
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
      if (momentumAnimationRef.current) {
        cancelAnimationFrame(momentumAnimationRef.current);
      }
    };
  }, []);

  // Detect quick actions from message content
  const detectQuickActions = (messageContent, fullResponse) => {
    const actions = [];
    const lowerContent = (messageContent + " " + fullResponse).toLowerCase();

    // Resume and CV download - differentiate between them
    const hasResume = lowerContent.includes("resume");
    const hasCv =
      lowerContent.includes("cv") || lowerContent.includes("curriculum vitae");
    const hasDownload = lowerContent.includes("download");

    if (hasResume && !hasCv) {
      // Only resume requested
      actions.push({
        type: "download_resume",
        label: "📄 Download Resume",
        action: () => {
          const link = document.createElement("a");
          link.href = "/Shubham_Gajjar_Resume.pdf";
          link.download = "Shubham_Gajjar_Resume.pdf";
          link.click();
          track("chatbot_quick_action", { action: "download_resume" });
        },
      });
    } else if (hasCv || (hasDownload && !hasResume && !hasCv)) {
      // CV requested - show both Resume and CV
      actions.push({
        type: "download_resume",
        label: "📄 Download Resume",
        action: () => {
          const link = document.createElement("a");
          link.href = "/Shubham_Gajjar_Resume.pdf";
          link.download = "Shubham_Gajjar_Resume.pdf";
          link.click();
          track("chatbot_quick_action", { action: "download_resume" });
        },
      });
      actions.push({
        type: "download_cv",
        label: "📄 Download CV",
        action: () => {
          const link = document.createElement("a");
          link.href = "/Shubham_Gajjar_CV.pdf";
          link.download = "Shubham_Gajjar_CV.pdf";
          link.click();
          track("chatbot_quick_action", { action: "download_cv" });
        },
      });
    }

    // Projects section
    if (
      lowerContent.includes("project") ||
      lowerContent.includes("portfolio") ||
      lowerContent.includes("work") ||
      lowerContent.includes("github")
    ) {
      actions.push({
        type: "view_projects",
        label: "🚀 View Projects",
        action: () => {
          scrollToPortfolioSection("#projects");
          track("chatbot_quick_action", { action: "view_projects" });
        },
      });
    }

    // Skills section
    if (
      lowerContent.includes("skill") ||
      lowerContent.includes("technology") ||
      lowerContent.includes("expertise") ||
      lowerContent.includes("tech stack")
    ) {
      actions.push({
        type: "view_skills",
        label: "⚡ View Skills",
        action: () => {
          scrollToPortfolioSection("#skills");
          track("chatbot_quick_action", { action: "view_skills" });
        },
      });
    }

    // Research section - redirect to journey since research is now there
    if (
      lowerContent.includes("research") ||
      lowerContent.includes("paper") ||
      lowerContent.includes("publication") ||
      lowerContent.includes("journal")
    ) {
      actions.push({
        type: "view_journey",
        label: "📚 View Journey",
        action: () => {
          scrollToPortfolioSection("#journey");
          track("chatbot_quick_action", { action: "view_journey" });
        },
      });
    }

    // Contact section
    if (
      lowerContent.includes("contact") ||
      lowerContent.includes("email") ||
      lowerContent.includes("reach") ||
      lowerContent.includes("connect")
    ) {
      actions.push({
        type: "view_contact",
        label: "✉️ Get In Touch",
        action: () => {
          scrollToPortfolioSection("#contact");
          track("chatbot_quick_action", { action: "view_contact" });
        },
      });
    }

    // Detect specific projects
    projects.forEach((project) => {
      if (lowerContent.includes(project.title.toLowerCase())) {
        if (project.github) {
          actions.push({
            type: "view_project_github",
            label: `🔗 ${project.title}`,
            action: () => {
              window.open(project.github, "_blank");
              track("chatbot_quick_action", {
                action: "view_project_github",
                project: project.title,
              });
            },
          });
        }
      }
    });

    return actions;
  };

  // Smooth scroll to portfolio section
  const scrollToPortfolioSection = (sectionId) => {
    // Close chat if on mobile
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }

    setTimeout(() => {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Add offset for sticky navbar
        setTimeout(() => {
          const navbarHeight = 80;
          const currentScroll = window.pageYOffset;
          const elementTop = element.offsetTop;
          const offsetPosition = elementTop - navbarHeight;

          if (Math.abs(currentScroll - offsetPosition) > 10) {
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    }, 100);
  };

  // Streaming animation function
  const streamMessage = (fullText, messageId) => {
    let currentIndex = 0;
    const words = fullText.split(" ");
    let displayedText = "";

    const streamInterval = setInterval(() => {
      if (currentIndex < words.length) {
        displayedText += (displayedText ? " " : "") + words[currentIndex];
        currentIndex++;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId || msg.timestamp === messageId
              ? {
                  ...msg,
                  streamingContent: displayedText,
                  isStreaming: true,
                }
              : msg
          )
        );

        // Scroll to bottom during streaming
        scrollToBottom();
      } else {
        // Streaming complete
        clearInterval(streamInterval);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId || msg.timestamp === messageId
              ? {
                  ...msg,
                  content: fullText,
                  streamingContent: "",
                  isStreaming: false,
                }
              : msg
          )
        );
        setStreamingMessageId(null);
        streamingTimerRef.current = null;
      }
    }, STREAMING_DELAY);

    streamingTimerRef.current = streamInterval;
  };

  const handleSendMessage = async (retryCount = 0) => {
    const message = inputMessage.trim();

    // Prevent sending if rate limited
    if (rateLimited) {
      setError(
        `Please wait ${cooldownSeconds} seconds before sending another message.`
      );
      return;
    }

    // Prevent rapid-fire requests
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTimeRef.current;

    if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
      const waitTime = Math.ceil(
        (MIN_REQUEST_INTERVAL - timeSinceLastRequest) / 1000
      );
      setError(
        `Please wait ${waitTime} second${
          waitTime > 1 ? "s" : ""
        } before sending another message.`
      );
      return;
    }

    if (!message || isLoading) return;

    // Update last request time
    lastRequestTimeRef.current = now;

    // Track question analytics
    track("chatbot_question", {
      question: message.substring(0, 100),
      question_length: message.length,
      timestamp: new Date().toISOString(),
    });

    // Hide suggestions after first message
    setShowSuggestions(false);

    // Add user message with timestamp
    const userMessage = {
      role: "user",
      content: message,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setError(null);

    try {
      // Get conversation history (last 10 messages, excluding streaming props)
      const conversationHistory = [...messages, userMessage]
        .slice(-10)
        .map((msg) => {
          const { isStreaming, streamingContent, ...cleanMsg } = msg;
          return cleanMsg;
        });

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          conversationHistory,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle rate limit specifically - don't throw, just set state
        if (
          response.status === 429 ||
          data.error?.toLowerCase().includes("rate limit")
        ) {
          const cooldownSeconds = 30;
          setRateLimited(true);
          setCooldownSeconds(cooldownSeconds);

          // Clear cooldown after period
          cooldownTimerRef.current = setTimeout(() => {
            setRateLimited(false);
            setCooldownSeconds(0);
          }, RATE_LIMIT_COOLDOWN);

          // Set error message without throwing
          const errorMessage = `Rate limit exceeded. Please wait ${cooldownSeconds} seconds before trying again.`;
          setError(errorMessage);

          // Track error
          track("chatbot_error", {
            error: "Rate limit exceeded",
            is_rate_limit: true,
          });

          // Add user-friendly message to chat
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "I've reached my API rate limit. Please wait about 30 seconds before asking another question. Thank you for your patience!",
              timestamp: new Date().toISOString(),
            },
          ]);

          return; // Exit early, don't throw
        }

        // For other errors, throw normally
        throw new Error(data.error || "Failed to get response");
      }

      // Success - clear any previous rate limiting
      setRateLimited(false);
      setCooldownSeconds(0);

      // Create assistant message with unique ID for streaming
      const assistantMessageId = `assistant-${Date.now()}`;
      const assistantMessage = {
        role: "assistant",
        content: data.message,
        timestamp: new Date().toISOString(),
        id: assistantMessageId,
        isStreaming: false,
        streamingContent: "",
        quickActions: detectQuickActions(message, data.message),
      };

      // Add message first (empty for streaming)
      setMessages((prev) => [...prev, assistantMessage]);

      // Start streaming animation
      setStreamingMessageId(assistantMessageId);
      streamMessage(data.message, assistantMessageId);

      // Track successful response
      track("chatbot_response_success", {
        question_length: message.length,
        response_length: data.message?.length || 0,
      });
    } catch (err) {
      console.error("Chat error:", err);

      const errorMessage =
        err.message || "Failed to send message. Please try again.";
      setError(errorMessage);

      // Track error (only for non-rate-limit errors, since rate limit is tracked above)
      track("chatbot_error", {
        error: err.message || "Unknown error",
        is_rate_limit: false,
      });

      // Add error message to chat
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize, but I'm having trouble processing your request right now. Please try again in a moment.",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = !prevIsOpen;

      // Track chat open/close
      track("chatbot_toggle", {
        action: newIsOpen ? "open" : "close",
      });

      return newIsOpen;
    });
  }, []);

  // Expose toggle function to parent via ref
  useEffect(() => {
    if (onToggleRef) {
      onToggleRef.current = handleToggle;
    }
    return () => {
      if (onToggleRef) {
        onToggleRef.current = null;
      }
    };
  }, [onToggleRef, handleToggle]);

  const clearChat = () => {
    const clearedMessages = [
      {
        role: "assistant",
        content:
          "Hi! I'm here to help you learn about Shubham's work. You can ask me about:\n\n• Resume & Experience\n• Technical Skills\n• Projects\n• Journey & Research\n• Contact Information\n\nWhat would you like to know?",
        timestamp: new Date().toISOString(),
      },
    ];
    setMessages(clearedMessages);
    setError(null);
    setShowSuggestions(true);
    setStreamingMessageId(null);
    if (streamingTimerRef.current) {
      clearInterval(streamingTimerRef.current);
    }
    localStorage.removeItem("chatbot_messages");
    localStorage.setItem("chatbot_messages", JSON.stringify(clearedMessages));

    track("chatbot_clear", {});
  };

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
    setShowSuggestions(false);
    // Auto-send after a brief delay for better UX
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const copyToClipboard = async (text, messageId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
      track("chatbot_copy", {});
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) return "Just now";
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return date.toLocaleDateString();
  };

  // Export conversation as text
  const exportConversation = (format = "text") => {
    try {
      let exportContent = "";
      const date = new Date().toLocaleString();

      if (format === "text") {
        exportContent = `Chat Conversation - ${date}\n`;
        exportContent += "=".repeat(50) + "\n\n";

        messages.forEach((msg) => {
          const role = msg.role === "user" ? "You" : "Assistant";
          const content = msg.streamingContent || msg.content || "";
          const time = msg.timestamp
            ? formatTime(msg.timestamp)
            : "Unknown time";
          exportContent += `${role} (${time}):\n${content}\n\n`;
        });

        // Create and download file
        const blob = new Blob([exportContent], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `chat_conversation_${Date.now()}.txt`;
        link.click();
        URL.revokeObjectURL(url);

        track("chatbot_export", { format: "text" });
      } else if (format === "json") {
        // Export as JSON
        const cleanMessages = messages.map((msg) => {
          const { isStreaming, streamingContent, ...cleanMsg } = msg;
          return cleanMsg;
        });
        exportContent = JSON.stringify(cleanMessages, null, 2);
        const blob = new Blob([exportContent], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `chat_conversation_${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);

        track("chatbot_export", { format: "json" });
      }
    } catch (err) {
      console.error("Export failed:", err);
      setError("Failed to export conversation. Please try again.");
    }
  };

  return (
    <>
      {/* Floating Chat Button - Hidden on mobile, shown on desktop (icon only, rectangular) */}
      <motion.button
        onClick={handleToggle}
        className="hidden md:inline-flex fixed bottom-6 right-6 z-50 items-center justify-center px-4 py-4 rounded-2xl liquid-glass text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <XMarkIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleToggle}
            />

            {/* Chat Window */}
            <motion.div
              ref={chatWindowRef}
              className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] md:w-96 h-[calc(100%-8rem)] md:h-[600px] bg-white/15 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-lg flex flex-col overflow-hidden"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div
                className="relative liquid-glass text-gray-800 dark:text-white p-4 flex items-center justify-between"
                style={{
                  background:
                    "linear-gradient(to right, rgba(59, 131, 246, 0.1), rgba(138, 92, 246, 0.1)), rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.02)",
                }}
              >
                <div>
                  <h3 className="font-bold text-lg">Ask Me Anything</h3>
                </div>
                <div className="flex items-center gap-2">
                  {/* Export Button */}
                  {messages.length > 1 && (
                    <div className="relative group">
                      <button
                        onClick={() => exportConversation("text")}
                        className="text-xs px-2 py-1 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 rounded transition-colors flex items-center gap-1 shadow-sm text-gray-800 dark:text-white"
                        title="Export conversation"
                      >
                        <ArrowDownTrayIcon className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                  <button
                    onClick={clearChat}
                    className="text-xs px-2 py-1 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 rounded transition-colors shadow-sm text-gray-800 dark:text-white"
                    title="Clear chat"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleToggle}
                    className="p-1 hover:bg-white/20 backdrop-blur-md rounded transition-colors text-gray-800 dark:text-white"
                    aria-label="Close chat"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages Area Wrapper - Clips elastic effect */}
              <div className="flex-1 overflow-hidden relative">
                <div
                  ref={messagesContainerRef}
                  className="h-full overflow-y-auto p-4 space-y-4 bg-transparent transition-transform duration-200 ease-out"
                  style={{
                    transform:
                      elasticOffset !== 0
                        ? `translateY(${elasticOffset}px)`
                        : "translateY(0)",
                  }}
                >
                  {/* Suggested Questions (show only when no user messages) */}
                  {showSuggestions && messages.length === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                        <SparklesIcon className="w-3 h-3" />
                        Try asking:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {SUGGESTED_QUESTIONS.slice(0, 4).map(
                          (question, idx) => (
                            <motion.button
                              key={idx}
                              onClick={() => handleSuggestedQuestion(question)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-xs px-3 py-1.5 bg-blue-500/20 dark:bg-blue-500/15 backdrop-blur-md border border-blue-500/30 dark:border-blue-400/20 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-500/30 dark:hover:bg-blue-500/20 transition-colors shadow-sm"
                            >
                              {question}
                            </motion.button>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}

                  {messages.map((msg, index) => {
                    const messageId = msg.id || `msg-${index}-${msg.timestamp}`;
                    const displayContent = msg.isStreaming
                      ? msg.streamingContent
                      : msg.content;
                    const isStreaming =
                      msg.isStreaming &&
                      streamingMessageId === (msg.id || messageId);

                    return (
                      <motion.div
                        key={messageId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex ${
                          msg.role === "user" ? "justify-end" : "justify-start"
                        } group`}
                      >
                        <div className="flex flex-col max-w-[80%]">
                          <div
                            className={`rounded-2xl px-4 py-2 relative backdrop-blur-md ${
                              msg.role === "user"
                                ? "text-gray-800 dark:text-gray-200 shadow-lg"
                                : "bg-white/20 dark:bg-black/20 text-gray-800 dark:text-gray-200 border border-white/20 dark:border-white/10 shadow-md"
                            }`}
                            style={
                              msg.role === "user"
                                ? {
                                    background:
                                      "linear-gradient(to right, rgba(59, 131, 246, 0.1), rgba(138, 92, 246, 0.1)), rgba(255, 255, 255, 0.2)",
                                    backdropFilter: "blur(12px)",
                                    WebkitBackdropFilter: "blur(12px)",
                                    border:
                                      "1px solid rgba(255, 255, 255, 0.02)",
                                  }
                                : undefined
                            }
                          >
                            <p className="text-sm whitespace-pre-wrap break-words pr-6 pb-1">
                              {displayContent}
                              {isStreaming && (
                                <span className="inline-block w-2 h-4 bg-current ml-1 animate-pulse" />
                              )}
                            </p>
                            {/* Copy button */}
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  msg.content || displayContent,
                                  messageId
                                )
                              }
                              className={`absolute bottom-1 right-1 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                                msg.role === "user"
                                  ? "text-gray-800/70 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"
                                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                              }`}
                              title="Copy message"
                              disabled={isStreaming}
                            >
                              {copiedMessageId === messageId ? (
                                <CheckIcon className="w-4 h-4" />
                              ) : (
                                <ClipboardDocumentIcon className="w-4 h-4" />
                              )}
                            </button>
                          </div>

                          {/* Quick Action Buttons */}
                          {msg.quickActions &&
                            msg.quickActions.length > 0 &&
                            !isStreaming && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-2 flex flex-wrap gap-2"
                              >
                                {msg.quickActions.map((action, idx) => (
                                  <motion.button
                                    key={idx}
                                    onClick={action.action}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-xs px-3 py-1.5 liquid-glass text-gray-800 dark:text-gray-200 rounded-full transition-colors flex items-center gap-1 shadow-md"
                                    style={{
                                      background:
                                        "linear-gradient(to right, rgba(59, 131, 246, 0.1), rgba(138, 92, 246, 0.1)), rgba(255, 255, 255, 0.2)",
                                      backdropFilter: "blur(12px)",
                                      WebkitBackdropFilter: "blur(12px)",
                                      border:
                                        "1px solid rgba(255, 255, 255, 0.02)",
                                    }}
                                  >
                                    {action.label}
                                    <ArrowRightIcon className="w-3 h-3 text-gray-800 dark:text-gray-200" />
                                  </motion.button>
                                ))}
                              </motion.div>
                            )}

                          {msg.timestamp && (
                            <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 px-2">
                              {formatTime(msg.timestamp)}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Loading Indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl px-4 py-2 shadow-md">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-500/70 dark:bg-blue-400/70 rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-purple-500/70 dark:bg-purple-400/70 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <div
                            className="w-2 h-2 bg-blue-500/70 dark:bg-blue-400/70 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`px-4 py-2 rounded-lg text-sm backdrop-blur-md shadow-md ${
                        error.toLowerCase().includes("rate limit")
                          ? "bg-yellow-500/20 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-400/30 dark:border-yellow-600/30"
                          : "bg-red-500/20 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-400/30 dark:border-red-600/30"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span>⚠️</span>
                        <span>{error}</span>
                      </div>
                      {error.toLowerCase().includes("rate limit") && (
                        <p className="text-xs mt-2 opacity-75">
                          The API has rate limits. Please wait a moment before
                          asking another question.
                        </p>
                      )}
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input Area */}
              <div className="relative p-4 bg-transparent backdrop-blur-md border-t border-white/20 dark:border-white/10">
                {/* Quick Suggestions (after assistant messages) */}
                {!isLoading &&
                  !showSuggestions &&
                  messages.length > 1 &&
                  messages[messages.length - 1]?.role === "assistant" && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-3 flex flex-wrap gap-2"
                    >
                      {SUGGESTED_QUESTIONS.slice(0, 3).map((question, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => handleSuggestedQuestion(question)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-2.5 py-1 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-full hover:bg-white/30 dark:hover:bg-black/30 transition-colors shadow-sm"
                        >
                          {question.length > 30
                            ? question.substring(0, 30) + "..."
                            : question}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputMessage}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.length <= 500) {
                          setInputMessage(value);
                          setError(null); // Clear error when user starts typing
                        }
                      }}
                      onKeyPress={handleKeyPress}
                      placeholder={
                        rateLimited
                          ? `Wait ${cooldownSeconds}s...`
                          : "Type your question..."
                      }
                      disabled={isLoading || rateLimited}
                      maxLength={500}
                      className="w-full px-4 py-2 pr-12 border border-white/20 dark:border-white/10 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-md text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 shadow-md"
                    />
                    {inputMessage.length > 0 && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 dark:text-gray-500">
                        {inputMessage.length}/500
                      </span>
                    )}
                  </div>
                  <motion.button
                    onClick={() => handleSendMessage()}
                    disabled={isLoading || !inputMessage.trim() || rateLimited}
                    className="px-4 py-2 liquid-glass text-gray-800 dark:text-white rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center shadow-md"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(59, 131, 246, 0.1), rgba(138, 92, 246, 0.1)), rgba(255, 255, 255, 0.02)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.02)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={
                      rateLimited
                        ? `Please wait ${cooldownSeconds} seconds`
                        : "Send message"
                    }
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Press Enter to send • Shift+Enter for new line
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
