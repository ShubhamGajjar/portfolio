// components/Skills.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CpuChipIcon,
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  EyeIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CogIcon,
  CubeIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { skills } from "../utils/data";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("AI/ML Core");

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI/ML Core":
        return (
          <CpuChipIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
        );
      case "Deep Learning Frameworks":
        return (
          <CubeIcon className="h-5 w-5 text-purple-500 dark:text-purple-400" />
        );
      case "Computer Vision":
        return <EyeIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />;
      case "Data Science & Analytics":
        return (
          <ChartBarIcon className="h-5 w-5 text-green-500 dark:text-green-400" />
        );
      case "Research & Development":
        return (
          <AcademicCapIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
        );
      case "Game AI & RL":
        return (
          <RocketLaunchIcon className="h-5 w-5 text-pink-500 dark:text-pink-400" />
        );
      default:
        return (
          <CodeBracketIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        );
    }
  };

  const getSkillIcon = (skill, category) => {
    const skillLower = skill.toLowerCase();

    // Programming languages
    if (skillLower.includes("python")) {
      return <CommandLineIcon className="h-4 w-4 text-blue-500" />;
    }

    // Deep learning frameworks
    if (
      skillLower.includes("pytorch") ||
      skillLower.includes("tensorflow") ||
      skillLower.includes("keras")
    ) {
      return <CubeIcon className="h-4 w-4 text-purple-500" />;
    }

    // Computer vision
    if (
      skillLower.includes("opencv") ||
      skillLower.includes("vision") ||
      skillLower.includes("image")
    ) {
      return <EyeIcon className="h-4 w-4 text-blue-500" />;
    }

    // Research and academic
    if (
      skillLower.includes("research") ||
      skillLower.includes("ieee") ||
      skillLower.includes("academic")
    ) {
      return <AcademicCapIcon className="h-4 w-4 text-blue-500" />;
    }

    // Game AI and reinforcement learning
    if (
      skillLower.includes("reinforcement") ||
      skillLower.includes("game") ||
      skillLower.includes("evolutionary")
    ) {
      return <RocketLaunchIcon className="h-4 w-4 text-pink-500" />;
    }

    // Neural networks and deep learning
    if (
      skillLower.includes("neural") ||
      skillLower.includes("deep") ||
      skillLower.includes("cnn") ||
      skillLower.includes("rnn") ||
      skillLower.includes("transformer")
    ) {
      return <CpuChipIcon className="h-4 w-4 text-blue-500" />;
    }

    // Data science and analytics
    if (
      skillLower.includes("data") ||
      skillLower.includes("analytics") ||
      skillLower.includes("statistics")
    ) {
      return <ChartBarIcon className="h-4 w-4 text-green-500" />;
    }

    // Development and tools
    if (
      skillLower.includes("git") ||
      skillLower.includes("docker") ||
      skillLower.includes("aws") ||
      skillLower.includes("cloud")
    ) {
      return <CogIcon className="h-4 w-4 text-gray-500" />;
    }

    // Default icon
    return <CodeBracketIcon className="h-4 w-4 text-gray-400" />;
  };

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

  return (
    <section id="skills" className="py-20 static-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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

        {/* Skills Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-150 ${
                activeCategory === category
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700"
                  : "bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
              }`}
            >
              {getCategoryIcon(category)}
              <span className="font-medium">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills[activeCategory]?.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200"
            >
              <div className="flex-shrink-0">
                {getSkillIcon(skill, activeCategory)}
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
