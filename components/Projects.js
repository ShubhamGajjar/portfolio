// components/Projects.js
import React, { useState } from "react";
import {
  CpuChipIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  EyeIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  CommandLineIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { projects } from "../utils/data";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Research", "AI/ML Core", "Data Science"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Research":
        return (
          <AcademicCapIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
        );
      case "AI/ML Core":
        return (
          <CpuChipIcon className="h-4 w-4 text-purple-500 dark:text-purple-400" />
        );
      case "Data Science":
        return (
          <ChartBarIcon className="h-4 w-4 text-green-500 dark:text-green-400" />
        );
      default:
        return (
          <CodeBracketIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        );
    }
  };

  const getProjectIcon = (project) => {
    const title = project.title.toLowerCase();
    const description = project.description.toLowerCase();

    // Medical AI projects
    if (
      title.includes("brain") ||
      title.includes("tumor") ||
      title.includes("medical")
    ) {
      return (
        <LightBulbIcon className="h-4 w-4 text-green-500 dark:text-green-400" />
      );
    }

    // Skin cancer projects
    if (title.includes("skin") || title.includes("cancer")) {
      return <EyeIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />;
    }

    // Game development projects (simple games, not AI)
    if (
      title.includes("snake") ||
      title.includes("flappy") ||
      title.includes("game clone")
    ) {
      return (
        <CodeBracketIcon className="h-4 w-4 text-orange-500 dark:text-orange-400" />
      );
    }

    // Game AI projects (actual AI)
    if (title.includes("trackmania") && description.includes("reinforcement")) {
      return (
        <RocketLaunchIcon className="h-4 w-4 text-pink-500 dark:text-pink-400" />
      );
    }

    // Reinforcement learning projects
    if (
      description.includes("reinforcement") ||
      description.includes("rl") ||
      description.includes("q-learning")
    ) {
      return (
        <RocketLaunchIcon className="h-4 w-4 text-pink-500 dark:text-pink-400" />
      );
    }

    // Data science projects
    if (
      title.includes("sentiment") ||
      title.includes("twitter") ||
      title.includes("analysis")
    ) {
      return (
        <ChartBarIcon className="h-4 w-4 text-green-500 dark:text-green-400" />
      );
    }

    // Deep learning projects
    if (
      description.includes("deep learning") ||
      description.includes("neural") ||
      description.includes("cnn")
    ) {
      return (
        <CpuChipIcon className="h-4 w-4 text-purple-500 dark:text-purple-400" />
      );
    }

    // Research projects
    if (project.category === "Research") {
      return (
        <AcademicCapIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
      );
    }

    // AI/ML projects
    if (project.category === "AI/ML Core") {
      return (
        <CpuChipIcon className="h-4 w-4 text-purple-500 dark:text-purple-400" />
      );
    }

    // Default
    return (
      <CodeBracketIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
    );
  };

  const getStatusColor = (status) => {
    if (
      status?.includes("Published") ||
      status?.includes("Accepted") ||
      status?.includes("Completed")
    ) {
      return "bg-green-500/10 text-green-600 border-green-500/20";
    } else if (status?.includes("Under Review")) {
      return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
    } else if (status?.includes("Active")) {
      return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    }
    return "bg-gray-500/10 text-gray-600 border-gray-500/20";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 static-glass">
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
            Research & AI Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Cutting-edge research in medical AI and innovative AI/ML projects
            showcasing deep learning expertise
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
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

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="ai-card p-8 hover:scale-105 transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {getProjectIcon(project)}
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                {project.status && (
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs ${getStatusColor(
                      project.status
                    )}`}
                  >
                    <span className="font-medium">{project.status}</span>
                  </div>
                )}
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>

              {/* Impact Badge for Research */}
              {project.impact && (
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs rounded-full border border-purple-500/20">
                    <BeakerIcon className="h-3 w-3 text-purple-500 dark:text-purple-400" />
                    {project.impact}
                  </span>
                </div>
              )}

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
                  >
                    <CodeBracketIcon className="h-4 w-4 text-gray-900 dark:text-white" />
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 ai-glass text-gray-900 dark:text-white rounded-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-900 dark:text-white" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Collaboration CTA */}
        <div className="text-center mt-12">
          <div className="ai-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Research Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in collaborating on innovative AI research projects?
              Let's explore opportunities to advance medical AI and computer
              vision together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 btn-ai"
            >
              <AcademicCapIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              Discuss Research
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
