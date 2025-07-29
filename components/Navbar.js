// components/Navbar.js
import Link from "next/link";
import { useState } from "react";
// Correct import for Heroicons v2 (using 24px outline icons)
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="sticky top-0 z-50 ai-glassmorphism border-b border-white/20 dark:border-gray-700/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Site Title/Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#hero")}
              className="flex items-center gap-2 text-xl font-bold ai-gradient-text hover:scale-105 transition-all duration-200"
            >
              <CpuChipIcon className="h-6 w-6" />
              Shubham Gajjar
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
            {/* Theme Toggle Button (Desktop) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-200"
            >
              {/* Using h-5 w-5, Tailwind will resize the imported 24px icon */}
              {theme === "light" ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center md:hidden">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 mr-2 rounded-full text-gray-600 dark:text-gray-400 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-200"
            >
              {/* Using h-5 w-5, Tailwind will resize the imported 24px icon */}
              {theme === "light" ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {/* Use updated icon names and h-6 w-6 classes */}
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      {isOpen && (
        <div
          className="md:hidden border-t border-white/20 dark:border-gray-700/20 ai-glassmorphism"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
