// components/Projects.js
import React, { useState } from "react";
import { projects } from "../utils/data";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  PlayIcon,
  TagIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI/ML":
        return CpuChipIcon;
      case "Data Science":
        return CpuChipIcon;
      default:
        return CodeBracketIcon;
    }
  };

  return (
    <section
      id="projects"
      className="py-16 relative overflow-hidden bg-gray-50 dark:bg-gray-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 ai-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold ai-gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Cutting-edge solutions that demonstrate advanced capabilities in
            deep learning, computer vision, and natural language processing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "ai-glass text-blue-400 shadow-lg"
                    : "glass-card text-gray-700 dark:text-gray-300 hover:scale-105"
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = getCategoryIcon(project.category);
            return (
              <div key={project.id} className="group ai-card overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 ai-gradient opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-white opacity-60" />
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 glass-card text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  {/* AI Badge for AI/ML projects */}
                  {project.category === "AI/ML" && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-300 text-xs font-medium rounded-full">
                        AI/ML
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TagIcon className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Technologies
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 glass-card text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass-card text-gray-900 dark:text-white text-sm font-medium rounded-lg hover:scale-105 transition-all duration-200"
                    >
                      <CodeBracketIcon className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 btn-ai text-sm font-medium rounded-lg transition-all duration-200"
                    >
                      <PlayIcon className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="ai-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build the Future?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's collaborate on cutting-edge projects and bring innovative
              solutions to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 btn-ai"
            >
              Let's Connect
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
