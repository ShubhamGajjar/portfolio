// components/Skills.js
import React, { useState } from "react";
import { CpuChipIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { skills } from "../utils/data";
import { motion } from "framer-motion";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("AI/ML Core");

  const categoryIcons = {
    "AI/ML Core": CpuChipIcon,
    "Deep Learning": CpuChipIcon,
    "Data Science": ChartBarIcon,
    "MLOps & Deployment": CpuChipIcon,
    "Research & Development": CpuChipIcon,
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="skills" className="py-20 static-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 ai-gradient-text"
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive AI/ML skillset with expertise in research and
            development
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skills).map((category) => {
            const Icon = categoryIcons[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeCategory === category
                    ? "ai-glass text-blue-600 dark:text-blue-400"
                    : "glass-card text-gray-600 dark:text-gray-400 hover:scale-105"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="ai-card p-6 text-center hover:scale-105 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {skill}
              </h3>
            </div>
          ))}
        </div>

        {/* Research Expertise Highlight */}
        <div className="ai-card p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <ChartBarIcon className="h-8 w-8 text-blue-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Core Expertise
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Research & Development
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Academic paper writing and publication</li>
                <li>• Experimental design and statistical analysis</li>
                <li>• Literature review and research synthesis</li>
                <li>• Conference presentation and collaboration</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Continuous Learning
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Staying updated with latest AI research</li>
                <li>• Implementing cutting-edge algorithms</li>
                <li>• Contributing to open-source projects</li>
                <li>• Mentoring and knowledge sharing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
