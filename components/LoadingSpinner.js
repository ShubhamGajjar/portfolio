// components/LoadingSpinner.js
import React from "react";
import { motion } from "framer-motion";
import { CpuChipIcon } from "@heroicons/react/24/outline";

const LoadingSpinner = ({ theme }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center liquid-glass overflow-hidden bg-white dark:bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      {/* Enhanced Background Patterns - Theme-aware */}
      <div className="absolute inset-0 ai-pattern opacity-30 dark:opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-400/8 dark:via-purple-400/8 dark:to-pink-400/8"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/8 via-purple-400/8 to-pink-400/8 dark:from-blue-300/10 dark:via-purple-300/10 dark:to-pink-300/10 animate-pulse-glow"></div>

      {/* Background morphing elements - Theme-aware colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-blue-400 dark:bg-blue-300 rounded-full"
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
          className="absolute top-40 right-20 w-2 h-2 bg-purple-400 dark:bg-purple-300 rounded-full"
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
          className="absolute bottom-40 left-20 w-4 h-4 bg-pink-400 dark:bg-pink-300 rounded-full"
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
          className="absolute top-60 left-1/4 w-2 h-2 bg-green-400 dark:bg-green-300 rounded-full"
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
          className="absolute bottom-60 right-1/3 w-3 h-3 bg-yellow-400 dark:bg-yellow-300 rounded-full"
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
      </div>

      <div className="text-center relative z-10">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-4"
        >
          <CpuChipIcon className="h-16 w-16 text-blue-500 dark:text-blue-400 mx-auto filter drop-shadow-lg" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold ai-gradient-text mb-2"
        >
          Loading Portfolio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 dark:text-gray-300 text-sm sm:text-base"
        >
          Initializing AI-powered experience...
        </motion.p>

        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;
