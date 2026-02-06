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

  // Collect all skills/keywords mentioned across your work (to highlight them in the UI)
  const normalize = (str) => str.toLowerCase().trim().replace(/\s+/g, " ");

  const mentionedSkills = (() => {
    const mentioned = new Set();

    projects.forEach((project) => {
      project.technologies?.forEach((tech) => mentioned.add(normalize(tech)));
    });
    researchPapers.forEach((paper) => {
      paper.keywords?.forEach((keyword) => mentioned.add(normalize(keyword)));
    });
    workExperience.forEach((work) => {
      work.technologies?.forEach((tech) => mentioned.add(normalize(tech)));
    });

    return mentioned;
  })();

  const isSkillUsed = (skill) => {
    const s = normalize(skill);
    if (mentionedSkills.has(s)) return true;

    // If "React" appears as part of "React Native", still count it as used.
    // This is intentionally permissive (better UX).
    const escaped = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${escaped}\\b`, "i");
    return Array.from(mentionedSkills).some((m) => regex.test(m));
  };

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ai-gradient-text font-display">
            Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A focused snapshot of the tools and concepts I use most.
          </p>
          <p className="mt-3 text-sm text-muted max-w-2xl mx-auto">
            Highlighted skills appear in my projects, research, or work experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <div key={category} className="glass-card p-6">
              <h3 className="text-base sm:text-lg font-semibold text-fg font-display">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills[category].map((skill) => {
                  const used = isSkillUsed(skill);
                  return (
                    <span
                      key={`${category}-${skill}`}
                      className={
                        "inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm " +
                        (used
                          ? "border-brand/30 bg-brand/10 text-fg"
                          : "border-border/60 bg-card/40 text-muted")
                      }
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
