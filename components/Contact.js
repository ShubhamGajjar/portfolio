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
                        <CpuChipIcon className="h-5 w-5 text-blue-500" />
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
                    <CpuChipIcon className="h-4 w-4 text-blue-500" />
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
                        <AcademicCapIcon className="h-5 w-5 text-blue-500" />
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
                    <AcademicCapIcon className="h-4 w-4 text-blue-500" />
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
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
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
                    <BeakerIcon className="h-4 w-4 text-blue-500" />
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
              <AcademicCapIcon className="h-5 w-5" />
              Start Research Discussion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
