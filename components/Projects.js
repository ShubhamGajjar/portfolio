// components/Projects.js
import React, { useState, useEffect } from "react";
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
  PlayIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { projects } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDemo, setSelectedDemo] = useState(null);

  const categories = ["All", "AI/ML Core", "Data Science"];

  const closeModal = () => {
    setSelectedDemo(null);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    if (!selectedDemo) {
      return;
    }

    const handleEsc = (event) => {
      if (event.keyCode === 27 || event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeModal();
      }
    };

    // Don't prevent body scroll - allow scrolling even when modal is open
    window.addEventListener("keydown", handleEsc, true);

    return () => {
      window.removeEventListener("keydown", handleEsc, true);
    };
  }, [selectedDemo]);

  const filteredProjects = projects
    .filter((project) => project.category !== "Research")
    .filter((project) =>
      activeCategory === "All" ? true : project.category === activeCategory
    );

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
    } else if (
      status?.includes("Under Review") ||
      status?.includes("Submitted")
    ) {
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
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
            className="text-4xl md:text-5xl font-bold mb-6 ai-gradient-text leading-relaxed pb-1"
            variants={itemVariants}
          >
            Projects
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
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="ai-card p-8 hover:scale-105 transition-all duration-300"
              variants={itemVariants}
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-normal">
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
              <div className="flex gap-3 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
                  >
                    <CodeBracketIcon className="h-4 w-4 text-white dark:text-gray-900" />
                    View Code
                  </a>
                )}
                {project.demoUrl && project.github && (
                  <button
                    onClick={() => setSelectedDemo(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
                  >
                    <PlayIcon className="h-4 w-4" />
                    Run Demo
                  </button>
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
        </motion.div>
      </div>

      {/* Demo Modal - Redesigned */}
      <AnimatePresence>
        {selectedDemo && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            />

            {/* Modal - Slides up from bottom */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 rounded-t-3xl shadow-2xl flex flex-col"
              style={{ height: "90vh", maxHeight: "90vh" }}
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-t-3xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                    <PlayIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {selectedDemo.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Running from GitHub
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedDemo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Code
                  </a>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors group"
                    aria-label="Close (ESC)"
                    title="Close (ESC)"
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>

              {/* Content Area - Scrollable */}
              <div className="flex-1 overflow-y-auto relative">
                <div className="p-6 space-y-4">
                  {/* Live Demo Option if available */}
                  {selectedDemo.demoUrl && (
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-purple-600 rounded-lg">
                          <PlayIcon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                            Live Demo Available
                          </h4>
                          <p className="text-sm text-purple-700 dark:text-purple-300">
                            Try the application right now
                          </p>
                        </div>
                      </div>
                      <a
                        href={selectedDemo.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        Open Live Demo
                      </a>
                    </div>
                  )}

                  {/* Instructions */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Run Locally
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
                      <li>
                        Clone the repository:{" "}
                        <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                          git clone {selectedDemo.github}
                        </code>
                      </li>
                      <li>
                        Install dependencies:{" "}
                        <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                          pip install -r requirements.txt
                        </code>
                      </li>
                      <li>
                        Run the application:{" "}
                        <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                          python app.py
                        </code>{" "}
                        or{" "}
                        <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                          gradio app.py
                        </code>
                      </li>
                      <li>
                        Open the local URL shown in the terminal (usually{" "}
                        <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                          http://localhost:7860
                        </code>
                        )
                      </li>
                    </ol>
                  </div>

                  {/* Direct GitHub Link */}
                  {selectedDemo.github && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={selectedDemo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <CodeBracketIcon className="h-4 w-4" />
                        View Source Code on GitHub
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer with instructions */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400 text-center">
                Press{" "}
                <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">
                  ESC
                </kbd>{" "}
                to close • Click outside to close
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
