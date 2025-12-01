// components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { skills } from "../utils/data";

const Hero = ({ title, subtitle, resumeLink }) => {
  // Get all skill categories and their skills
  const allCategories = Object.entries(skills);

  // Custom order for scrolling text rows
  // Original order: 0=AI/ML Core, 1=Deep Learning Frameworks, 2=Computer Vision, 3=Data Science, 4=Research, 5=Game AI, 6=Cloud, 7=Tools, 8=Leadership
  // New order: 0=blank row, 1=Deep Learning Frameworks, 2=AI/ML Core, 3=Data Science, 4=Research, 5=Game AI, 6=Tools, 7=Leadership
  const skillCategories = [
    ["", []], // Blank row -> Row 1
    allCategories[1], // Deep Learning Frameworks -> Row 2
    allCategories[0], // AI/ML Core -> Row 3
    allCategories[3], // Data Science & Analytics -> Row 4
    allCategories[4], // Research & Development -> Row 5
    allCategories[5], // Game AI & RL -> Row 6
    allCategories[2], // Computer Vision -> Row 1
    allCategories[7], // Tools -> Row 7
    allCategories[8], // Leadership & Adaptability -> Row 8
  ];

  // Different speeds for each row (in seconds - higher = slower)
  const speeds = [1600, 1800, 2000, 1700, 2200, 1760, 2400, 1840];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center liquid-glass overflow-hidden"
    >
      {/* Enhanced Background Patterns */}
      <div className="absolute inset-0 ai-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

      {/* Horizontal Repeating Text Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {skillCategories.map(([category, categorySkills], rowIndex) => {
          const duration = speeds[rowIndex % speeds.length];
          // All rows move in the same direction (right)
          const animationName = "scrollHorizontalRight";
          // Different starting offsets for each row to avoid synchronized start
          const startOffsets = [-50, -30, -70, -20, -80, -40, -60, -10];
          const animationDelay = startOffsets[rowIndex % startOffsets.length];

          return (
            <div
              key={category}
              className="absolute whitespace-nowrap diagonal-text-row"
              style={{
                top: `${(rowIndex / skillCategories.length) * 100}%`,
                left: "50%",
                marginLeft: "0",
                animationName: animationName,
                animationDuration: `${duration}s`,
                animationDelay: `${animationDelay}s`,
              }}
            >
              <div className="flex gap-8 text-6xl md:text-8xl font-bold text-gray-900/5 dark:text-white/5">
                {[...Array(12)].map((_, repeatIndex) =>
                  categorySkills.map((skill, skillIndex) => (
                    <span
                      key={`${category}-${repeatIndex}-${skillIndex}`}
                      className="inline-block"
                    >
                      {skill} •{" "}
                    </span>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            delay: 0.9,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href={resumeLink}
            download="Shubham_Gajjar_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
