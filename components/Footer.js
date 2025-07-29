// components/Footer.js
import React from "react";
import { socialLinks } from "../utils/data";
import { HeartIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 mt-auto bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Shubham Gajjar
            </h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer & AI/ML Engineer passionate about creating
              innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#hero"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors text-lg font-bold">
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
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Shubham Gajjar. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <HeartIcon className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
