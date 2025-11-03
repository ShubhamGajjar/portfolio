// components/About.js
import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  StarIcon,
  DocumentArrowDownIcon,
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
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              I'm an AI researcher and graduate student at Northeastern
              University, passionate about advancing deep learning applications
              in biomedical imaging and computer vision. My work focuses on
              hybrid neural architectures for tumor segmentation and skin lesion
              classification, bridging healthcare and AI.
            </p>
            <p>
              Previously, I've published in IEEE and contributed to research
              under review at Elsevier, achieving state-of-the-art performance
              in medical image analysis. I'm currently exploring the integration
              of deep learning with healthcare and biological imaging as part of
              my ongoing research journey.
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

          {/* Download CV Button */}
          <motion.div
            className="mt-12 flex justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href="/Shubham_Gajjar_CV.pdf"
              download="Shubham_Gajjar_CV.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              Download My CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
