// components/Hero.js
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Scroll-based transforms for icons
  const cpuIconY = useTransform(scrollY, [0, 500], [0, -100]);
  const cpuIconX = useTransform(scrollY, [0, 500], [0, 50]);
  const cubeIconY = useTransform(scrollY, [0, 500], [0, 80]);
  const cubeIconX = useTransform(scrollY, [0, 500], [0, -30]);
  const chartIconY = useTransform(scrollY, [0, 500], [0, -60]);
  const chartIconX = useTransform(scrollY, [0, 500], [0, 40]);
  const eyeIconY = useTransform(scrollY, [0, 500], [0, 70]);
  const eyeIconX = useTransform(scrollY, [0, 500], [0, -20]);
  const rocketIconY = useTransform(scrollY, [0, 500], [0, -90]);
  const rocketIconX = useTransform(scrollY, [0, 500], [0, 60]);
  const lightbulbIconY = useTransform(scrollY, [0, 500], [0, 50]);
  const lightbulbIconX = useTransform(scrollY, [0, 500], [0, -40]);

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center liquid-glass overflow-hidden"
    >
      {/* Enhanced Background Patterns - Matching Loading Spinner */}
      <div className="absolute inset-0 ai-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/8 via-purple-400/8 to-pink-400/8 animate-pulse-glow"></div>

      {/* Animated Neural Network Visualization - Enhanced for Morphing */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neural Network Nodes - Matching Loading Spinner */}
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-4 h-4 bg-pink-400 rounded-full"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-60 left-1/4 w-2 h-2 bg-green-400 rounded-full"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute bottom-60 right-1/3 w-3 h-3 bg-yellow-400 rounded-full"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating AI Icons with Scroll-Responsive Animations Only */}
        <motion.div
          className="absolute top-20 left-10 text-blue-400/20"
          style={{ y: cpuIconY, x: cpuIconX }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.3 },
          }}
        >
          <CpuChipIcon className="w-8 h-8 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-purple-400/20"
          style={{ y: cubeIconY, x: cubeIconX }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{
            scale: 1.3,
            rotate: -5,
            transition: { duration: 0.3 },
          }}
        >
          <CubeIcon className="w-6 h-6 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-pink-400/20"
          style={{ y: chartIconY, x: chartIconX }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          whileHover={{
            scale: 1.4,
            rotate: 10,
            transition: { duration: 0.3 },
          }}
        >
          <ChartBarIcon className="w-10 h-10 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute top-60 left-1/4 text-green-400/20"
          style={{ y: eyeIconY, x: eyeIconX }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          whileHover={{
            scale: 1.25,
            rotate: -8,
            transition: { duration: 0.3 },
          }}
        >
          <EyeIcon className="w-7 h-7 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute bottom-60 right-1/3 text-yellow-400/20"
          style={{ y: rocketIconY, x: rocketIconX }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          whileHover={{
            scale: 1.35,
            rotate: 12,
            transition: { duration: 0.3 },
          }}
        >
          <RocketLaunchIcon className="w-6 h-6 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute top-80 left-1/3 text-indigo-400/20"
          style={{ y: lightbulbIconY, x: lightbulbIconX }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{
            scale: 1.3,
            rotate: -15,
            transition: { duration: 0.3 },
          }}
        >
          <LightBulbIcon className="w-5 h-5 drop-shadow-lg" />
        </motion.div>

        {/* Additional Animated Elements with Scroll Response Only */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-blue-300/15"
          style={{
            y: useTransform(scrollY, [0, 500], [0, -30]),
            x: useTransform(scrollY, [0, 500], [0, 20]),
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          whileHover={{
            scale: 1.2,
            rotate: 180,
            transition: { duration: 0.3 },
          }}
        >
          <CommandLineIcon className="w-4 h-4 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 text-purple-300/15"
          style={{
            y: useTransform(scrollY, [0, 500], [0, 40]),
            x: useTransform(scrollY, [0, 500], [0, -25]),
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          whileHover={{
            scale: 1.2,
            rotate: -180,
            transition: { duration: 0.3 },
          }}
        >
          <CogIcon className="w-5 h-5 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/3 text-green-300/15"
          style={{
            y: useTransform(scrollY, [0, 500], [0, -50]),
            x: useTransform(scrollY, [0, 500], [0, 35]),
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
          whileHover={{
            scale: 1.2,
            rotate: 90,
            transition: { duration: 0.3 },
          }}
        >
          <PuzzlePieceIcon className="w-6 h-6 drop-shadow-lg" />
        </motion.div>
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
            download="Shubham_Gajjar_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
            Download CV
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
