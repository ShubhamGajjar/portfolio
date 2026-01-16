// components/Footer.js
import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../utils/data";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="relative mt-auto border-t border-white/10 dark:border-gray-700/30 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="mb-8">
          {/* Brand Section */}
          <div>
            <motion.h3
              className="text-2xl font-bold ai-gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Shubham Gajjar
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              AI Researcher & M.S. Artificial Intelligence Student at
              Northeastern University, exploring deep learning, computer vision,
              and biomedical imaging.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <EnvelopeIcon className="w-4 h-4" />
                {socialLinks.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" />
                <span>Portland, Maine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
