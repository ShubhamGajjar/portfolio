// components/Hero.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const Hero = ({ title, subtitle, resumeLink }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Skills for diagonal text
  const skills = [
    "Shubham Gajjar",
    "Deep Learning",
    "Computer Vision",
    "Medical AI",
    "Neural Networks",
    "PyTorch",
    "TensorFlow",
    "ResNet",
    "Vision Transformer",
    "UNet",
    "Reinforcement Learning",
    "IEEE Publications",
    "Research",
    "AI Engineer",
  ];

  // Different speeds for each row (in seconds - higher = slower)
  const speeds = [1600, 1800, 2000, 1700, 2200, 1760, 2400, 1840];

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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center liquid-glass overflow-hidden"
    >
      {/* Enhanced Background Patterns */}
      <div className="absolute inset-0 ai-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

      {/* Horizontal Repeating Text Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, rowIndex) => {
          const duration = speeds[rowIndex];
          // All rows move in the same direction (right)
          const animationName = "scrollHorizontalRight";
          // Different starting offsets for each row to avoid synchronized start
          const startOffsets = [-50, -30, -70, -20, -80, -40, -60, -10];
          const animationDelay = startOffsets[rowIndex];

          return (
            <div
              key={rowIndex}
              className="absolute whitespace-nowrap diagonal-text-row"
              style={{
                top: `${rowIndex * 12.5}%`,
                left: "50%",
                marginLeft: "0",
                animationName: animationName,
                animationDuration: `${duration}s`,
                animationDelay: `${animationDelay}s`,
              }}
            >
              <div className="flex gap-8 text-6xl md:text-8xl font-bold text-gray-900/5 dark:text-white/5">
                {[...Array(12)].map((_, repeatIndex) =>
                  skills.map((skill, skillIndex) => (
                    <span
                      key={`${rowIndex}-${repeatIndex}-${skillIndex}`}
                      className="inline-block"
                    >
                      {skill} •{" "}
                    </span>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            delay: 0.9,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href={resumeLink}
            download="Shubham_Gajjar_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
