// components/Contact.js
import React from "react";
import {
  CpuChipIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
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
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Let's collaborate on innovative AI and machine learning projects
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="ai-card p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 ai-glass rounded-xl">
                    <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-200"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="ai-card p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 ai-glass rounded-xl">
                    <MapPinIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Available for remote collaboration worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="ai-card p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 ai-glass rounded-xl">
                    <CpuChipIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Research Focus
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Computer Vision, NLP, Deep Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Connect & Collaborate
            </h3>

            <div className="grid gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-card p-6 hover:scale-105 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 ai-glass rounded-xl">
                        <CpuChipIcon className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {link.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Connect on {link.name}
                        </p>
                      </div>
                    </div>
                    <CpuChipIcon className="h-5 w-5 text-blue-500" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="ai-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Research Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in collaborating on cutting-edge AI research? Let's
              explore opportunities to advance the field together.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 btn-ai"
            >
              <CpuChipIcon className="h-5 w-5" />
              Start Discussion
            </a>
          </div>
        </div>

        {/* Research Collaboration Areas */}
        <div className="mt-12">
          <div className="ai-card p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Collaboration Areas
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-6 glass-card rounded-xl">
                <CpuChipIcon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Computer Vision
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Object detection, image segmentation, autonomous systems
                </p>
              </div>
              <div className="text-center p-6 glass-card rounded-xl">
                <CpuChipIcon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Natural Language Processing
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Transformers, multilingual models, text generation
                </p>
              </div>
              <div className="text-center p-6 glass-card rounded-xl">
                <CpuChipIcon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Deep Learning
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Neural networks, reinforcement learning, model optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
