// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ResearchPapers from "../components/ResearchPapers";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

// Receive theme and toggleTheme from _app.js props
export default function Home({ theme, toggleTheme }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.98,
      filter: "blur(5px)",
    },
    in: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    out: {
      opacity: 0,
      scale: 1.02,
      filter: "blur(3px)",
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.0,
  };

  return (
    <>
      <Head>
        <title>Shubham Gajjar | AI Engineer & Research Specialist</title>
        <meta
          name="description"
          content="AI Engineer and Research Specialist with expertise in medical AI, computer vision, and deep learning. Published researcher with IEEE conference publications."
        />
        <link rel="icon" href="/favicon.ico" />
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

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingSpinner key="loading" />
        ) : (
          <motion.div
            key="content"
            className="flex flex-col min-h-screen bg-white dark:bg-gray-900"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
          >
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            {/* Main content grows to push footer down */}
            <main className="flex-grow">
              <Hero
                title="Hi, I'm Shubham Gajjar 👋"
                subtitle="AI Engineer & Research Specialist pioneering the future with intelligent solutions and cutting-edge artificial intelligence."
                resumeLink="/Shubham_Gajjar_Resume.pdf"
              />

              <About />

              <Skills />

              <ResearchPapers />

              <Projects />

              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
