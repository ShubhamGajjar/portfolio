import React from "react";
import { motion } from "framer-motion";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { certificates } from "../utils/certificates";

const Certificates = () => {
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
    <section id="certificates" className="py-20 static-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ai-gradient-text">
            Certificates
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic and professional certificates. Click to view or download.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="flex items-center justify-between bg-white/60 dark:bg-gray-800/40 rounded-lg p-6 shadow-md border border-transparent hover:shadow-lg transition"
              variants={itemVariants}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {cert.issuer} {cert.date ? `• ${cert.date}` : ""}
                </p>
              </div>
              <motion.a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:opacity-90 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DocumentArrowDownIcon className="w-5 h-5" />
                View
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
