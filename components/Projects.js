// components/Projects.js
import React, { useState } from "react";
import {
  CpuChipIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { projects } from "../utils/data";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI/ML Core", "Data Science", "MLOps"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI/ML Core":
        return <CpuChipIcon className="h-4 w-4" />;
      case "Data Science":
        return <CodeBracketIcon className="h-4 w-4" />;
      case "MLOps":
        return <CpuChipIcon className="h-4 w-4" />;
      default:
        return <CodeBracketIcon className="h-4 w-4" />;
    }
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
            AI & ML Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Innovative projects showcasing cutting-edge AI and machine learning
            solutions
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="ai-card p-6 hover:scale-105 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(project.category)}
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>

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
                    <CodeBracketIcon className="h-4 w-4" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 ai-glass text-gray-900 dark:text-white rounded-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="ai-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Research Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in collaborating on innovative AI research projects?
              Let's explore opportunities to advance the field together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 btn-ai"
            >
              <CpuChipIcon className="h-5 w-5" />
              Discuss Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
