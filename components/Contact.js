// components/Contact.js
import React from "react";
import {
  CpuChipIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  AcademicCapIcon,
  BeakerIcon,
  EyeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { socialLinks } from "../utils/data";
import { motion } from "framer-motion";

const Contact = () => {
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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20 static-glass">
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
            Let's Collaborate
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Ready to work on cutting-edge AI research and innovative machine
            learning projects
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </p>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    {socialLinks.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <AcademicCapIcon className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Research Focus
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Medical AI, Computer Vision, Deep Learning
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BeakerIcon className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Expertise
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    IEEE Publications, Neural Networks, Reinforcement Learning
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="space-y-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-card p-4 hover:scale-105 transition-all duration-200 block"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 ai-glass rounded-lg">
                        <svg
                          className="h-5 w-5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          GitHub
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          View AI/ML projects and research code
                        </p>
                      </div>
                    </div>
                    <svg
                      className="h-4 w-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-card p-4 hover:scale-105 transition-all duration-200 block"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 ai-glass rounded-lg">
                        <svg
                          className="h-5 w-5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          LinkedIn
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Professional network and research updates
                        </p>
                      </div>
                    </div>
                    <svg
                      className="h-4 w-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </a>
                <a
                  href={socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-card p-4 hover:scale-105 transition-all duration-200 block"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 ai-glass rounded-lg">
                        <svg
                          className="h-5 w-5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          X (Twitter)
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          AI research insights and updates
                        </p>
                      </div>
                    </div>
                    <svg
                      className="h-4 w-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Collaboration Areas */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Research & Collaboration Areas
            </h3>
            <div className="grid gap-4">
              <div className="ai-card p-6 hover:scale-105 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 ai-glass rounded-xl">
                    <EyeIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Medical AI Research
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Brain tumor segmentation, skin cancer classification,
                      medical imaging
                    </p>
                  </div>
                </div>
              </div>
              <div className="ai-card p-6 hover:scale-105 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 ai-glass rounded-xl">
                    <CpuChipIcon className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Deep Learning & Neural Networks
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      CNN, ResNet, Vision Transformers, hybrid architectures
                    </p>
                  </div>
                </div>
              </div>
              <div className="ai-card p-6 hover:scale-105 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 ai-glass rounded-xl">
                    <BeakerIcon className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Reinforcement Learning
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Game AI, autonomous agents, evolutionary algorithms
                    </p>
                  </div>
                </div>
              </div>
              <div className="ai-card p-6 hover:scale-105 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 ai-glass rounded-xl">
                    <ChartBarIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Data Science & Analytics
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Sentiment analysis, predictive modeling, statistical
                      analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="ai-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Research & Project Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in collaborating on cutting-edge AI research or
              innovative machine learning projects? Let's explore opportunities
              to advance medical AI and computer vision together.
            </p>
            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 btn-ai"
            >
              <AcademicCapIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              Start Research Discussion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
