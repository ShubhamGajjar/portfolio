// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
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
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <>
      <Head>
        <title>Shubham Gajjar | AI Engineer & ML Specialist</title>
        <meta
          name="description"
          content="AI Engineer and Machine Learning Specialist. Expert in Deep Learning, Computer Vision, NLP, and cutting-edge AI solutions."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <meta
          name="keywords"
          content="AI Engineer, Machine Learning, Deep Learning, Computer Vision, NLP, Research, IEEE Conference"
        />
        <meta name="author" content="Shubham Gajjar" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Shubham Gajjar | AI Engineer & ML Specialist"
        />
        <meta
          property="og:description"
          content="AI Engineer and Machine Learning Specialist with research publications in IEEE conferences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shubham Gajjar | AI Engineer & ML Specialist"
        />
        <meta
          name="twitter:description"
          content="AI Engineer and Machine Learning Specialist with research publications in IEEE conferences."
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
                subtitle="AI Engineer & ML Specialist pioneering the future with intelligent solutions and cutting-edge artificial intelligence."
                resumeLink="/Shubham_Gajjar_Resume.pdf"
              />

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
