// components/Navbar.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const Navbar = ({ theme, toggleTheme, onChatToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#work-experience" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Badges", href: "#badges" },
    { name: "Contact", href: "#contact" },
  ];

  const lenisScrollTo = (target, options = {}) => {
    if (typeof window === "undefined") return;

    const lenis = window.__lenis;
    const defaultOptions = {
      offset: -80, // account for sticky navbar
      duration: 1.5, // Shorter duration for faster scroll-to
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smoother easing
      ...options,
    };

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(target, defaultOptions);
    } else {
      // Fallback to native smooth scroll
      if (typeof target === "number") {
        window.scrollTo({
          top: target + (defaultOptions.offset || 0),
          behavior: "smooth",
        });
      } else if (target && target.scrollIntoView) {
        const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementTop + (defaultOptions.offset || 0),
          behavior: "smooth",
        });
      }
    }
  };

  const scrollToSection = (href) => {
    // Close mobile menu first
    setIsOpen(false);

    // Use setTimeout to ensure menu closes before scrolling
    setTimeout(() => {
      if (href === "#hero") {
        // Scroll to top of page for home button
        lenisScrollTo(0);
      } else {
        const element = document.querySelector(href);
        if (element) {
          lenisScrollTo(element);
        }
      }
    }, 50);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav
        className="sticky top-4 z-50 mx-4 rounded-2xl shadow-lg transition-all duration-300 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10"
        style={{
          opacity: 0,
          animation: "fadeInNav 0.4s ease-out forwards",
          backdropFilter: "blur(12px)", // Ensure blur is always applied from start
          WebkitBackdropFilter: "blur(12px)", // Safari support
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl font-bold ai-gradient-text">
                Shubham Gajjar
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150 font-medium cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Desktop: Theme Toggle, Mobile: Chat Button & Menu Button */}
            <div className="flex items-center gap-4">
              {/* Desktop Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="hidden md:flex p-2 rounded-lg ai-glass hover:scale-105 transition-all duration-150"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-yellow-500" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-700" />
                )}
              </motion.button>

              {/* Mobile: Chat Button (replaces theme toggle) */}
              <motion.button
                onClick={() => {
                  if (onChatToggle) {
                    onChatToggle();
                  }
                }}
                className="md:hidden p-2 rounded-lg ai-glass hover:scale-105 transition-all duration-150 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Open chat"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg ai-glass"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Rendered outside nav */}
      {mounted && (
        <>
          {/* Backdrop */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-backdrop"
                className="fixed inset-0 bg-black/20 z-[55] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
            )}
          </AnimatePresence>

          {/* Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                className="md:hidden fixed top-24 left-4 right-4 liquid-glass rounded-2xl shadow-2xl z-[60] overflow-hidden"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="px-4 py-6">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150 font-medium py-3 px-4 cursor-pointer rounded-lg hover:bg-white/10 dark:hover:bg-white/5 w-full"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}

                    {/* Theme Toggle in Mobile Menu */}
                    <motion.button
                      onClick={() => {
                        toggleTheme();
                        setIsOpen(false);
                      }}
                      className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150 font-medium py-3 px-4 cursor-pointer rounded-lg hover:bg-white/10 dark:hover:bg-white/5 w-full flex items-center gap-3"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {theme === "dark" ? (
                        <>
                          <SunIcon className="h-5 w-5 text-yellow-500" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <MoonIcon className="h-5 w-5 text-gray-700" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default Navbar;
