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
    // Return specific icons for certain skills
    if (skill.toLowerCase().includes("python")) {
      return <CommandLineIcon className="h-4 w-4 text-blue-500" />;
    }
    if (
      skill.toLowerCase().includes("pytorch") ||
      skill.toLowerCase().includes("tensorflow")
    ) {
      return <CubeIcon className="h-4 w-4 text-purple-500" />;
    }
    if (
      skill.toLowerCase().includes("opencv") ||
      skill.toLowerCase().includes("vision")
    ) {
      return <EyeIcon className="h-4 w-4 text-blue-500" />;
    }
    if (
      skill.toLowerCase().includes("research") ||
      skill.toLowerCase().includes("ieee")
    ) {
      return <AcademicCapIcon className="h-4 w-4 text-blue-500" />;
    }
    if (
      skill.toLowerCase().includes("reinforcement") ||
      skill.toLowerCase().includes("game")
    ) {
      return <RocketLaunchIcon className="h-4 w-4 text-pink-500" />;
    }
    if (
      skill.toLowerCase().includes("neural") ||
      skill.toLowerCase().includes("deep")
    ) {
      return <CpuChipIcon className="h-4 w-4 text-blue-500" />;
    }
    if (
      skill.toLowerCase().includes("data") ||
      skill.toLowerCase().includes("analytics")
    ) {
      return <ChartBarIcon className="h-4 w-4 text-green-500" />;
    }
    if (
      skill.toLowerCase().includes("medical") ||
      skill.toLowerCase().includes("health")
    ) {
      return <LightBulbIcon className="h-4 w-4 text-green-500" />;
    }
    if (
      skill.toLowerCase().includes("algorithm") ||
      skill.toLowerCase().includes("optimization")
    ) {
      return <PuzzlePieceIcon className="h-4 w-4 text-purple-500" />;
    }
    if (
      skill.toLowerCase().includes("framework") ||
      skill.toLowerCase().includes("library")
    ) {
      return <CogIcon className="h-4 w-4 text-gray-500" />;
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
            AI Engineering Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive skills in deep learning, computer vision, and research
            methodologies for cutting-edge AI development
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
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16"
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

        {/* Expertise Highlights */}
        <motion.div
          className="grid gap-8 md:grid-cols-3 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="ai-card p-8 text-center"
            variants={itemVariants}
          >
            <AcademicCapIcon className="h-12 w-12 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Research Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Published research in IEEE conferences with focus on medical AI
              and computer vision applications
            </p>
          </motion.div>

          <motion.div
            className="ai-card p-8 text-center"
            variants={itemVariants}
          >
            <EyeIcon className="h-12 w-12 text-purple-500 dark:text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Medical AI Specialist
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Expertise in brain tumor segmentation and skin cancer
              classification with state-of-the-art deep learning models
            </p>
          </motion.div>

          <motion.div
            className="ai-card p-8 text-center"
            variants={itemVariants}
          >
            <BeakerIcon className="h-12 w-12 text-pink-500 dark:text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Game AI & RL
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced reinforcement learning implementations for game AI,
              including TrackMania and classic games
            </p>
          </motion.div>
        </motion.div>

        {/* Technical Proficiency */}
        <motion.div
          className="ai-card p-8 max-w-4xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Technical Proficiency
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Deep Learning & Frameworks
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• PyTorch & TensorFlow expertise</li>
                <li>• CNN, ResNet, Vision Transformers</li>
                <li>• UNet architectures for medical imaging</li>
                <li>• Neural network optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Research & Development
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• IEEE conference publications</li>
                <li>• Experimental design & methodology</li>
                <li>• Statistical analysis & validation</li>
                <li>• Medical AI research focus</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
