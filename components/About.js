// components/About.js
import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  EyeIcon,
  CpuChipIcon,
  StarIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const About = () => {
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
    <section id="about" className="py-20 static-glass">
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
            About My AI Journey
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            AI Engineer and Researcher focused on medical AI applications and
            cutting-edge deep learning solutions
          </motion.p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="ai-card p-8" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <AcademicCapIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Research Focus
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Specialized in medical AI applications including brain tumor
              segmentation and skin cancer classification. Developed hybrid
              architectures achieving state-of-the-art performance in medical
              image analysis.
            </p>
          </motion.div>

          <motion.div className="ai-card p-8" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <CogIcon className="h-8 w-8 text-purple-500 dark:text-purple-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Technical Expertise
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Expert in PyTorch, TensorFlow, computer vision, and neural network
              architectures. Experience spans medical AI to game AI,
              demonstrating versatility in AI applications.
            </p>
          </motion.div>

          <motion.div className="ai-card p-8" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <LightBulbIcon className="h-8 w-8 text-pink-500 dark:text-pink-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Medical AI Impact
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Achieved 96.3% accuracy in skin cancer classification with hybrid
              ResNet-ViT model. VGG16-MCA UNet architecture shows superior
              performance in brain tumor segmentation.
            </p>
          </motion.div>

          <motion.div className="ai-card p-8" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <RocketLaunchIcon className="h-8 w-8 text-green-500 dark:text-green-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Innovation & Growth
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Exploring AI frontiers from reinforcement learning to evolutionary
              algorithms. Projects demonstrate both theoretical understanding
              and practical implementation skills.
            </p>
          </motion.div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          className="ai-card p-8 max-w-4xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <StarIcon className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Key Achievements
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Research Publications
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• IEEE AIC 2025 - Accepted Paper</li>
                <li>• International Journal - Under Review</li>
                <li>• Medical AI Research Focus</li>
                <li>• Computer Vision Applications</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technical Milestones
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 96.3% Model Accuracy Achieved</li>
                <li>• Novel Hybrid Architectures</li>
                <li>• Medical Image Analysis</li>
                <li>• Game AI & Reinforcement Learning</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="ai-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vision for the Future
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Passionate about advancing AI technology to solve real-world
              healthcare problems. Goal is to contribute to AI systems that
              improve medical diagnosis and patient outcomes.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
              <CpuChipIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              <span className="text-sm font-medium">
                Advancing AI for Healthcare
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
