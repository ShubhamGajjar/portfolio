// components/About.js
import React from "react";
import { motion } from "framer-motion";
import {
  RocketLaunchIcon,
  AcademicCapIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 static-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ai-gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AI Engineer and Researcher passionate about medical AI applications
            and cutting-edge deep learning solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <RocketLaunchIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Journey
            </h3>
          </div>

          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              I specialize in medical AI applications, particularly brain tumor
              segmentation and skin cancer classification. My research focuses
              on developing hybrid neural network architectures that achieve
              state-of-the-art performance in medical image analysis.
            </p>
            <p>
              With expertise in TensorFlow, PyTorch, and Computer Vision, I've
              achieved 96.3% accuracy in skin cancer classification using hybrid
              ResNet-ViT models. My work spans from medical AI to game AI,
              demonstrating versatility across different AI applications.
            </p>
            <p>
              I'm passionate about advancing AI technology to solve real-world
              healthcare problems and contribute to systems that improve medical
              diagnosis and patient outcomes.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mt-12 flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-3 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <AcademicCapIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                IEEE AIC 2025 - Accepted Paper
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <StarIcon className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                96.3% Model Accuracy Achieved
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
