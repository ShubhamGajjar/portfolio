// components/Footer.js
import React from "react";
import { socialLinks } from "../utils/data";
import { HeartIcon, CpuChipIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 mt-auto ai-glassmorphism border-t border-white/20 dark:border-gray-700/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <CpuChipIcon className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-bold ai-gradient-text">
                Shubham Gajjar
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              AI Engineer & ML Specialist passionate about building intelligent
              solutions and pushing the boundaries of artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="#hero"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#skills"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 ai-glass hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 rounded-lg transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <div className="text-gray-600 dark:text-gray-300 group-hover:text-blue-400 transition-colors text-lg font-bold">
                    {social.icon === "github" && "G"}
                    {social.icon === "linkedin" && "L"}
                    {social.icon === "twitter" && "T"}
                    {social.icon === "email" && "E"}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 dark:border-gray-700/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Shubham Gajjar. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm">
              <span>Built with</span>
              <HeartIcon className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using Next.js, Tailwind CSS & AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
