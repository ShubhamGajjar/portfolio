// components/Navbar.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CpuChipIcon,
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    console.log("ScrollToSection called with:", href);

    // Close mobile menu first
    setIsOpen(false);

    // Use setTimeout to ensure menu closes before scrolling
    setTimeout(() => {
      if (href === "#hero") {
        // Scroll to top of page for home button
        console.log("Scrolling to top of page");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const element = document.querySelector(href);
        if (element) {
          console.log("Scrolling to element:", href);
          // Use scrollIntoView with offset for better smoothness
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Add offset for sticky navbar after scroll
          setTimeout(() => {
            const navbarHeight = 80;
            const currentScroll = window.pageYOffset;
            const elementTop = element.offsetTop;
            const offsetPosition = elementTop - navbarHeight;

            if (Math.abs(currentScroll - offsetPosition) > 10) {
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }, 100);
        } else {
          console.log("Element not found:", href);
        }
      }
    }, 50);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav
      className={`sticky top-4 z-50 bg-transparent mx-4 rounded-2xl shadow-lg transition-all duration-300 ${
        scrolled
          ? "bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10"
          : ""
      }`}
      style={{
        opacity: 0,
        animation: "fadeInNav 0.4s ease-out forwards",
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
            <CpuChipIcon className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold ai-gradient-text">
              Shubham Gajjar
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  console.log("Button clicked:", item.name);
                  scrollToSection(item.href);
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150 font-medium cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg ai-glass hover:scale-105 transition-all duration-150"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/10 dark:bg-black/10 backdrop-blur-md border-t border-white/20 dark:border-white/10 rounded-b-2xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      console.log("Mobile button clicked:", item.name);
                      scrollToSection(item.href);
                    }}
                    className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150 font-medium py-2 cursor-pointer"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
