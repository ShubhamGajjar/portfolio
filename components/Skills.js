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
      skillLower.includes("rnn")
    ) {
      return <CpuChipIcon className="h-4 w-4 text-blue-500" />;
    }

    // Data science and analytics
    if (
      skillLower.includes("data") ||
      skillLower.includes("analytics") ||
      skillLower.includes("pandas") ||
      skillLower.includes("numpy")
    ) {
      return <ChartBarIcon className="h-4 w-4 text-green-500" />;
    }

    // Medical and healthcare
    if (
      skillLower.includes("medical") ||
      skillLower.includes("health") ||
      skillLower.includes("diagnosis")
    ) {
      return <LightBulbIcon className="h-4 w-4 text-green-500" />;
    }

    // Algorithms and optimization
    if (
      skillLower.includes("algorithm") ||
      skillLower.includes("optimization") ||
      skillLower.includes("genetic")
    ) {
      return <PuzzlePieceIcon className="h-4 w-4 text-purple-500" />;
    }

    // Frameworks and libraries
    if (
      skillLower.includes("framework") ||
      skillLower.includes("library") ||
      skillLower.includes("transformers")
    ) {
      return <CogIcon className="h-4 w-4 text-gray-500" />;
    }

    // Natural language processing
    if (
      skillLower.includes("nlp") ||
      skillLower.includes("language") ||
      skillLower.includes("text")
    ) {
      return <CommandLineIcon className="h-4 w-4 text-indigo-500" />;
    }

    // Statistical analysis
    if (
      skillLower.includes("statistical") ||
      skillLower.includes("scikit") ||
      skillLower.includes("matplotlib")
    ) {
      return <ChartBarIcon className="h-4 w-4 text-green-500" />;
    }

    // Default icon based on category
    return getCategoryIcon(category);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
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
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Specialized expertise in AI/ML, computer vision, and research
            methodologies
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                activeCategory === category
                  ? "ai-glass text-blue-600 dark:text-blue-400"
                  : "glass-card text-gray-600 dark:text-gray-400 hover:scale-105"
              }`}
            >
              {getCategoryIcon(category)}
              <span className="font-medium">{category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills[activeCategory]?.map((skill, index) => (
            <motion.div
              key={index}
              className="ai-card p-6 text-center hover:scale-105 transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center justify-center mb-4">
                {getSkillIcon(skill, activeCategory)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {skill}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
