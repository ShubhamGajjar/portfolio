// components/Hero.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownIcon,
  DocumentArrowDownIcon,
  CpuChipIcon,
  AcademicCapIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const Hero = ({ title, subtitle, resumeLink }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center liquid-glass">
      {/* Background patterns */}
      <div className="absolute inset-0 ai-pattern opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-pink-500/3"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse-glow"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-blue-400/20"
          variants={floatingVariants}
          animate="float"
        >
          <CpuChipIcon className="w-8 h-8 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-purple-400/20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
        >
          <CpuChipIcon className="w-6 h-6 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-pink-400/20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
        >
          <CpuChipIcon className="w-10 h-10 drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* AI Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 mb-12"
          variants={itemVariants}
        >
          <CpuChipIcon className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            AI Engineer & ML Specialist
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 ai-gradient-text"
          variants={itemVariants}
        >
          Hi, I'm Shubham Gajjar
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          AI Engineer & ML Specialist pioneering the future with intelligent
          solutions and cutting-edge artificial intelligence.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <a
            href="/Shubham_Gajjar_Resume.pdf"
            download
            className="action-button inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#projects"
            className="action-button inline-flex items-center gap-2 px-8 py-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-300"
          >
            Explore My Work
            <ArrowDownIcon className="w-5 h-5" />
          </a>
        </motion.div>

        {/* AI Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold ai-gradient-text mb-2">
              7+ months
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              AI/ML Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold ai-gradient-text mb-2">
              2
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Research Papers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold ai-gradient-text mb-2">
              6+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              AI Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold ai-gradient-text mb-2">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Technologies
            </div>
          </div>
        </motion.div>

        {/* Research Highlight */}
        <motion.div
          className="mt-12 p-6 ai-card max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-3">
            <AcademicCapIcon className="h-6 w-6 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Research Focus
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Specializing in Computer Vision and Natural Language Processing with
            publications in IEEE conferences. Contributing to the advancement of
            AI through innovative research and practical applications.
          </p>
        </motion.div>

        {/* AI Capabilities */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center p-6 glass-card rounded-xl">
            <CpuChipIcon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Deep Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Neural Networks, CNN, RNN, Transformers
            </p>
          </div>
          <div className="text-center p-6 glass-card rounded-xl">
            <CpuChipIcon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Computer Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Object Detection, Image Segmentation, OCR
            </p>
          </div>
          <div className="text-center p-6 glass-card rounded-xl">
            <CpuChipIcon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              NLP & LLMs
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              BERT, GPT, Text Generation, Sentiment Analysis
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
