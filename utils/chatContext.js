// utils/chatContext.js
import {
  projects,
  skills,
  researchPapers,
  socialLinks,
  experience,
  workExperience,
  journey,
  education,
  relevantCoursework,
  certifications,
} from "./data";

/**
 * Builds a comprehensive context string for the Gemini API
 * containing all portfolio information
 */
export function buildChatContext() {
  let context = `You are an AI assistant helping visitors learn about Shubham Gajjar, an AI Researcher & M.S. Artificial Intelligence Student at Northeastern University.

PERSONAL INFORMATION:
- Name: Shubham Gajjar
- Role: AI Researcher & M.S. Artificial Intelligence Student at Northeastern University
- Experience: ${experience}
- Location: ${socialLinks.location}
- Phone: ${socialLinks.phone}
- Email: ${socialLinks.email}
- Website: ${socialLinks.website}
- GitHub: ${socialLinks.github}
- LinkedIn: ${socialLinks.linkedin}
- Google Scholar: ${socialLinks.googleScholar}
- ORCID: ${socialLinks.orcid}

TECHNICAL SKILLS:
`;

  // Format skills by category
  for (const [category, skillList] of Object.entries(skills)) {
    context += `\n${category}:\n`;
    skillList.forEach((skill) => {
      context += `  - ${skill}\n`;
    });
  }

  context += `\n\nEDUCATION (${education.length} degrees):\n`;
  education.forEach((edu, index) => {
    context += `\n${index + 1}. ${edu.degree}\n`;
    context += `   Institution: ${edu.institution}\n`;
    context += `   Location: ${edu.location}\n`;
    context += `   Period: ${edu.period}\n`;
    context += `   GPA: ${edu.gpa}\n`;
    context += `   Status: ${edu.status}\n`;
  });

  context += `\n\nRELEVANT COURSEWORK:\n`;
  relevantCoursework.forEach((course) => {
    context += `  - ${course}\n`;
  });

  context += `\n\nCERTIFICATIONS (${certifications.length} total):\n`;
  certifications.forEach((cert, index) => {
    context += `\n${index + 1}. ${cert.name}\n`;
    context += `   Issuer: ${cert.issuer}\n`;
    context += `   Year: ${cert.year}\n`;
  });

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

  context += `\n\nWORK EXPERIENCE (${workExperience.length} total):\n`;
  workExperience.forEach((work, index) => {
    context += `\n${index + 1}. ${work.position} at ${work.company}\n`;
    context += `   Location: ${work.location}\n`;
    context += `   Duration: ${work.duration}\n`;
    context += `   Description: ${work.description}\n`;
    if (work.responsibilities && work.responsibilities.length > 0) {
      context += `   Key Responsibilities:\n`;
      work.responsibilities.forEach((resp) => {
        context += `     - ${resp}\n`;
      });
    }
    if (work.technologies && work.technologies.length > 0) {
      context += `   Technologies: ${work.technologies.join(", ")}\n`;
    }
  });

  context += `\n\nJOURNEY TIMELINE (Work + Research + Projects):\n`;
  journey.forEach((item, index) => {
    context += `\n${index + 1}. ${item.title} (${item.type})\n`;
    context += `   Organization: ${item.organization}\n`;
    context += `   Location: ${item.location}\n`;
    context += `   Period: ${item.period}\n`;
    context += `   Summary: ${item.summary}\n`;
    if (item.highlights && item.highlights.length > 0) {
      context += `   Highlights:\n`;
      item.highlights.forEach((highlight) => {
        context += `     - ${highlight}\n`;
      });
    }
    if (item.responsibilities && item.responsibilities.length > 0) {
      context += `   Responsibilities:\n`;
      item.responsibilities.forEach((resp) => {
        context += `     - ${resp}\n`;
      });
    }
    if (item.technologies && item.technologies.length > 0) {
      context += `   Technologies: ${item.technologies.join(", ")}\n`;
    }
    if (item.status) {
      context += `   Status: ${item.status}\n`;
    }
  });

  context += `\n\nINSTRUCTIONS:
- Answer questions about Shubham's resume, CV, skills, projects, research, and portfolio
- Be conversational, friendly, and helpful
- Provide accurate information based only on the context above
- If asked about something not in the context, politely say you don't have that information
- Keep responses concise and scannable - people prefer brief, clear answers over long descriptions
- IMPORTANT: For technical skills questions, provide a concise bullet-point list organized by category. Do NOT write long descriptions. Just list the skills clearly.
- When mentioning projects or research, be brief - include key technologies, status, and achievements in 1-2 sentences
- For contact information, mention all available channels (email, GitHub, LinkedIn, Google Scholar, ORCID)
- IMPORTANT: DO NOT use markdown formatting (no **bold**, *italic*, # headers, or any markdown syntax)
- Use plain text only - write naturally without any formatting symbols
- Use bullet points with dashes (-) for lists to make information easy to scan
- Prioritize brevity and clarity - small detailed answers are better than lengthy descriptions

You can answer questions about:
- Resume and CV content
- Education background and academic achievements
- Technical skills and expertise (provide concise lists, not descriptions)
- Work experience and professional background
- Certifications
- Projects (brief summaries with key technologies and status)
- Research papers and publications (brief summaries with status)
- Journey timeline (work, research, and projects)
- Contact information (email, phone, location, website, social media)
- Overall background and experience`;

  return context;
}
