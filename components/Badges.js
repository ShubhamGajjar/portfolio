import React from "react";
import { motion } from "framer-motion";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { badges } from "../utils/certificates";

const Badges = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="badges" className="py-20 static-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ai-gradient-text leading-normal overflow-visible pb-2">
            Badges
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Digital badges and credentials from Northeastern University
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              className="flex flex-col items-center bg-white/60 dark:bg-gray-800/40 rounded-lg p-6 shadow-md border border-transparent hover:shadow-lg transition text-center"
              variants={itemVariants}
            >
              <img
                src={badge.badge}
                alt={`${badge.title} badge`}
                className="w-24 h-24 object-contain rounded mb-4"
              />
              <h3 className="font-semibold text-base text-gray-800 dark:text-gray-100 mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {badge.issuer}
              </p>
              <motion.a
                href={badge.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:opacity-90 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
                View Credential
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Badges;
