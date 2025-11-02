// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ResearchPapers from "../components/ResearchPapers";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Receive theme, toggleTheme, and chatToggleRef from _app.js props
export default function Home({ theme, toggleTheme, chatToggleRef }) {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    // Ensure page is fully rendered before starting animations
    const timer = setTimeout(() => {
      setPageReady(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  const contentVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Shubham Gajjar | AI Engineer & Research Specialist</title>
        <meta
          name="description"
          content="AI Engineer and Research Specialist with expertise in medical AI, computer vision, and deep learning. Published researcher with IEEE conference publications."
        />
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <meta
          name="keywords"
          content="AI Engineer, Machine Learning, Deep Learning, Computer Vision, Medical AI, Research, IEEE Conference, Brain Tumor, Skin Cancer, Reinforcement Learning"
        />
        <meta name="author" content="Shubham Gajjar" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Shubham Gajjar | AI Engineer & Research Specialist"
        />
        <meta
          property="og:description"
          content="AI Engineer and Research Specialist with expertise in medical AI, computer vision, and deep learning. Published researcher with IEEE conference publications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shubham Gajjar | AI Engineer & Research Specialist"
        />
        <meta
          name="twitter:description"
          content="AI Engineer and Research Specialist with expertise in medical AI, computer vision, and deep learning. Published researcher with IEEE conference publications."
        />
      </Head>

      <motion.div
        className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-150`}
        variants={pageVariants}
        initial="initial"
        animate={pageReady ? "animate" : "initial"}
      >
        {pageReady && (
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            onChatToggle={() => chatToggleRef?.current?.()}
          />
        )}

        {/* Main content grows to push footer down */}
        <motion.main className="flex-grow" variants={contentVariants}>
          <Hero
            title="Hi, I'm Shubham Gajjar"
            subtitle="AI Engineer & Research Specialist pioneering the future with intelligent solutions and cutting-edge artificial intelligence."
            resumeLink="/Shubham_Gajjar_Resume.pdf"
          />

          <About />

          <Skills />

          <ResearchPapers />

          <Projects />

          <Contact />
        </motion.main>

        <Footer />
      </motion.div>
    </>
  );
}
