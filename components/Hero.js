// components/Hero.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownIcon,
  DocumentArrowDownIcon,
  CpuChipIcon,
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BeakerIcon,
  ChartBarIcon,
  EyeIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CogIcon,
  CubeIcon,
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

  const neuralNetworkVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center liquid-glass overflow-hidden">
      {/* Enhanced Background Patterns */}
      <div className="absolute inset-0 ai-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/8 via-purple-400/8 to-pink-400/8 animate-pulse-glow"></div>

      {/* Animated Neural Network Visualization */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neural Network Nodes */}
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full"
          variants={neuralNetworkVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full"
          variants={neuralNetworkVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-4 h-4 bg-pink-400 rounded-full"
          variants={neuralNetworkVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute top-60 left-1/4 w-2 h-2 bg-green-400 rounded-full"
          variants={neuralNetworkVariants}
          animate="animate"
          style={{ animationDelay: "1.5s" }}
        />
        <motion.div
          className="absolute bottom-60 right-1/3 w-3 h-3 bg-yellow-400 rounded-full"
          variants={neuralNetworkVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating AI Icons */}
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
          <CubeIcon className="w-6 h-6 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-pink-400/20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
        >
          <ChartBarIcon className="w-10 h-10 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute top-60 left-1/4 text-green-400/20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "0.5s" }}
        >
          <EyeIcon className="w-7 h-7 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-60 right-1/3 text-yellow-400/20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1.5s" }}
        >
          <RocketLaunchIcon className="w-6 h-6 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute top-80 left-1/3 text-indigo-400/20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2.5s" }}
        >
          <LightBulbIcon className="w-5 h-5 drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* AI Engineer Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 mb-12"
          variants={itemVariants}
        >
          <CpuChipIcon className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            AI Engineer & Research Specialist
          </span>
        </motion.div>

        {/* Enhanced Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 ai-gradient-text"
          variants={itemVariants}
        >
          Hi, I'm Shubham Gajjar
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Pioneering the future of AI through cutting-edge research in medical
          imaging, reinforcement learning, and deep learning. Published
          researcher with expertise in computer vision and neural networks.
        </motion.p>

        {/* Enhanced Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <a
            href="/Shubham_Gajjar_Resume.pdf"
            download
            className="action-button inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#research"
            className="action-button inline-flex items-center gap-2 px-8 py-4 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-300"
          >
            View Research
            <AcademicCapIcon className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Enhanced AI Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
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
              96.3%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Model Accuracy
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold ai-gradient-text mb-2">
              IEEE
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Conference
            </div>
          </div>
        </motion.div>

        {/* Research Highlights */}
        <motion.div
          className="mt-12 p-8 ai-card max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-4">
            <AcademicCapIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Research Focus Areas
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 glass-card rounded-lg">
              <EyeIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Medical AI
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Brain tumor segmentation & Skin cancer classification
              </p>
            </div>
            <div className="text-center p-4 glass-card rounded-lg">
              <CpuChipIcon className="h-8 w-8 text-purple-500 dark:text-purple-400 mx-auto mb-3" />
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Reinforcement Learning
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Game AI & Autonomous decision making
              </p>
            </div>
            <div className="text-center p-4 glass-card rounded-lg">
              <ChartBarIcon className="h-8 w-8 text-pink-500 dark:text-pink-400 mx-auto mb-3" />
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Deep Learning
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Neural networks & Computer vision
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technical Expertise */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center p-6 glass-card rounded-xl">
            <CpuChipIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Deep Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              PyTorch, TensorFlow, CNN, ResNet, Vision Transformers
            </p>
          </div>
          <div className="text-center p-6 glass-card rounded-xl">
            <EyeIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Computer Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Medical Imaging, Image Segmentation, Object Detection
            </p>
          </div>
          <div className="text-center p-6 glass-card rounded-xl">
            <BeakerIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Research & Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              IEEE Publications, Experimental Design, Medical AI
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
