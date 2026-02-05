// components/Skills.js
import React from "react";
import { motion } from "framer-motion";
import {
  skills,
  projects,
  researchPapers,
  workExperience,
} from "../utils/data";

const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Collect all skills mentioned in projects, research, and work experience
  const getMentionedSkills = () => {
    const mentioned = new Set();

    // Normalize function for case-insensitive comparison
    const normalize = (str) => str.toLowerCase().trim().replace(/\s+/g, " ");

    // From projects
    projects.forEach((project) => {
      project.technologies?.forEach((tech) => {
        mentioned.add(normalize(tech));
      });
    });

    // From research papers
    researchPapers.forEach((paper) => {
      paper.keywords?.forEach((keyword) => {
        mentioned.add(normalize(keyword));
      });
    });

    // From work experience
    workExperience.forEach((work) => {
      work.technologies?.forEach((tech) => {
        mentioned.add(normalize(tech));
      });
    });

    return mentioned;
  };

  const mentionedSkills = getMentionedSkills();

  // Filter out skills that are already mentioned
  const filterSkills = (skillList) => {
    const normalize = (str) => str.toLowerCase().trim().replace(/\s+/g, " ");

    return skillList.filter((skill) => {
      const normalizedSkill = normalize(skill);

      // Check for exact match first
      if (mentionedSkills.has(normalizedSkill)) {
        return false;
      }

      // For multi-word skills, check if they appear as complete phrases in mentioned skills
      // e.g., "Deep Learning" matches "Deep Learning Frameworks" but "React" doesn't match "React Native"
      const words = normalizedSkill.split(" ");
      if (words.length > 1) {
        // Multi-word skill: check if it appears as a complete phrase
        const isMentioned = Array.from(mentionedSkills).some((mentioned) => {
          // Check if all words appear as complete words in sequence
          const regex = new RegExp(
            `\\b${normalizedSkill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
            "i",
          );
          return regex.test(mentioned);
        });
        if (isMentioned) return false;
      }

      return true;
    });
  };

  // Filter skills for each category
  const filteredSkills = {};
  Object.keys(skills).forEach((category) => {
    const filtered = filterSkills(skills[category]);
    if (filtered.length > 0) {
      filteredSkills[category] = filtered;
    }
  });

  const categories = Object.keys(filteredSkills);

  return (
    <section id="skills" className="py-20 static-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ai-gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Specialized expertise in AI/ML, computer vision, and research
            methodologies
          </p>
        </motion.div>

        {/* Layout: left = category title, right = skills */}
        <motion.div
          className="space-y-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const skillList = filteredSkills[category];
            return (
              <div
                key={category}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
              >
                {/* Left: Category title */}
                <div className="flex-shrink-0 sm:w-56">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    {category}
                  </h3>
                </div>
                {/* Right: Skills as plain text */}
                <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                  {skillList.join(", ")}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
