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
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Badges", href: "#badges" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    // Close mobile menu first
    setIsOpen(false);

    // Use setTimeout to ensure menu closes before scrolling
    setTimeout(() => {
      if (href === "#hero") {
        // Scroll to top of page for home button
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const element = document.querySelector(href);
        if (element) {
          const navOffset = 80; // approximate navbar height
          const elementTop =
            element.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: elementTop - navOffset,
            behavior: "smooth",
          });
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
      <nav className="sticky top-4 z-50 px-4">
        <div className="mx-auto max-w-6xl">
          <div
            className="liquid-glass"
            style={{ opacity: 0, animation: "fadeInNav 0.4s ease-out forwards" }}
          >
            <div className="px-4 sm:px-6">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <button
                  type="button"
                  onClick={() => scrollToSection("#hero")}
                  className="focus-ring rounded-xl px-2 py-1"
                  aria-label="Go to top"
                >
                  <span className="text-lg sm:text-xl font-bold ai-gradient-text font-display">
                    Shubham Gajjar
                  </span>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="group focus-ring rounded-xl px-3 py-2 text-sm font-medium text-fg/80 hover:text-fg transition-colors"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute left-0 -bottom-1 h-px w-0 bg-brand transition-all duration-200 group-hover:w-full" />
                      </span>
                    </button>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {/* Chat */}
                  <motion.button
                    onClick={() => onChatToggle?.()}
                    className="focus-ring rounded-xl p-2 ai-glass text-fg"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    title="Open chat"
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  </motion.button>

                  {/* Theme Toggle */}
                  <motion.button
                    onClick={toggleTheme}
                    className="focus-ring rounded-xl p-2 glass"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Toggle theme"
                    title="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <SunIcon className="h-5 w-5 text-amber-400" />
                    ) : (
                      <MoonIcon className="h-5 w-5 text-fg/80" />
                    )}
                  </motion.button>

                  {/* Mobile Menu Button */}
                  <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus-ring rounded-xl p-2 glass"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                  >
                    {isOpen ? (
                      <XMarkIcon className="h-6 w-6 text-fg/80" />
                    ) : (
                      <Bars3Icon className="h-6 w-6 text-fg/80" />
                    )}
                  </motion.button>
                </div>
              </div>
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
                className="fixed inset-0 bg-black/30 z-[55] md:hidden"
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
                className="md:hidden fixed top-24 left-4 right-4 liquid-glass shadow-2xl z-[60] overflow-hidden"
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
                        className="text-left text-fg/85 hover:text-fg transition-colors font-medium py-3 px-4 cursor-pointer rounded-xl hover:bg-card/40 w-full focus-ring"
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
                      className="text-left text-fg/85 hover:text-fg transition-colors font-medium py-3 px-4 cursor-pointer rounded-xl hover:bg-card/40 w-full flex items-center gap-3 focus-ring"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {theme === "dark" ? (
                        <>
                          <SunIcon className="h-5 w-5 text-amber-400" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <MoonIcon className="h-5 w-5 text-fg/80" />
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
