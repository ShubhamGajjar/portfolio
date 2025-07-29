// components/ResearchPapers.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DocumentTextIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ClockIcon,
  EyeIcon,
  DocumentArrowDownIcon,
  BeakerIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { researchPapers } from "../utils/data";

const ResearchPapers = () => {
  const [expandedPaper, setExpandedPaper] = useState(null);

  const getStatusIcon = (status) => {
    if (status === "Accepted") {
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    }
    return <ClockIcon className="h-5 w-5 text-yellow-500" />;
  };

  const getStatusColor = (status) => {
    if (status === "Accepted") {
      return "bg-green-500/10 text-green-600 border-green-500/20";
    }
    return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
  };

  const toggleAbstract = (paperId) => {
    setExpandedPaper(expandedPaper === paperId ? null : paperId);
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

  const abstractVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="research" className="py-20 static-glass">
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
            Research Publications
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Published research in medical AI and computer vision, contributing
            to the advancement of healthcare through innovative deep learning
            solutions
          </motion.p>
        </motion.div>

        {/* Research Impact Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-3xl md:text-4xl font-bold ai-gradient-text mb-2">
              2
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Research Papers
            </div>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-3xl md:text-4xl font-bold ai-gradient-text mb-2">
              IEEE
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Conference
            </div>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-3xl md:text-4xl font-bold ai-gradient-text mb-2">
              96.3%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Model Accuracy
            </div>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-3xl md:text-4xl font-bold ai-gradient-text mb-2">
              Medical
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              AI Focus
            </div>
          </motion.div>
        </motion.div>

        {/* Research Papers Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              className="ai-card p-8 hover:scale-105 transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {/* Paper Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <DocumentTextIcon className="h-8 w-8 text-blue-500" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {paper.authors}
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusColor(
                    paper.status
                  )}`}
                >
                  {getStatusIcon(paper.status)}
                  <span className="text-xs font-medium">{paper.status}</span>
                </div>
              </div>

              {/* Conference Info */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {paper.conference}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {paper.year} • DOI: {paper.doi}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {paper.description}
              </p>

              {/* Research Impact */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Research Impact
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 glass-card rounded-lg">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Medical AI Contribution
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      Advanced deep learning models for medical image analysis
                      and diagnosis
                    </p>
                  </div>
                  <div className="p-4 glass-card rounded-lg">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Technical Innovation
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      Novel hybrid architectures combining state-of-the-art
                      neural networks
                    </p>
                  </div>
                </div>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Research Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs rounded-full border border-blue-500/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {keyword}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Abstract Toggle */}
              {paper.abstract && (
                <div className="mb-6">
                  <motion.button
                    onClick={() => toggleAbstract(paper.id)}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <EyeIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {expandedPaper === paper.id
                        ? "Hide Abstract"
                        : "View Abstract"}
                    </span>
                  </motion.button>

                  <AnimatePresence>
                    {expandedPaper === paper.id && (
                      <motion.div
                        className="mt-4 p-4 glass-card rounded-lg"
                        variants={abstractVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Abstract
                        </h5>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {paper.abstract}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap">
                {paper.certificate && (
                  <motion.a
                    href={paper.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/15 transition-all duration-200 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <DocumentArrowDownIcon className="h-4 w-4" />
                    View Certificate
                  </motion.a>
                )}
                {paper.pdf && !paper.certificate && (
                  <motion.a
                    href={paper.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500/15 transition-all duration-200 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <DocumentTextIcon className="h-4 w-4" />
                    View Paper
                  </motion.a>
                )}
                {paper.status === "Accepted" &&
                  paper.doi !== "Pending - IEEE Xplore" && (
                    <motion.a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 glass-card text-gray-900 dark:text-white rounded-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View on IEEE
                    </motion.a>
                  )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Collaboration CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="ai-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Research Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in collaborating on cutting-edge medical AI research?
              Let's explore opportunities to advance healthcare through
              innovative deep learning solutions.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 btn-ai"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AcademicCapIcon className="h-5 w-5" />
              Discuss Research
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchPapers;
