// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Badges from "../components/Badges";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

// Receive theme, toggleTheme, and chatToggleRef from _app.js props
export default function Home({ theme, toggleTheme, chatToggleRef }) {
  const [pageReady, setPageReady] = useState(false);
  const siteUrl = "https://shubhamgajjar.dev";

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
        <title>
          Shubham Gajjar | AI Researcher & M.S. AI @ Northeastern
        </title>
        <meta
          name="description"
          content="AI researcher and M.S. AI student at Northeastern University. Focused on deep learning for medical imaging, computer vision, and reliable AI systems."
        />
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4F46E5" />
        <meta
          name="keywords"
          content="AI Engineer, Machine Learning, Deep Learning, Computer Vision, Medical AI, Research, IEEE Conference, Brain Tumor, Skin Cancer, Reinforcement Learning"
        />
        <meta name="author" content="Shubham Gajjar" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Shubham Gajjar | AI Researcher & M.S. AI @ Northeastern"
        />
        <meta
          property="og:description"
          content="AI researcher and M.S. AI student at Northeastern University. Deep learning for medical imaging, computer vision, and reliable AI systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shubham Gajjar | AI Researcher & M.S. AI @ Northeastern"
        />
        <meta
          name="twitter:description"
          content="AI researcher and M.S. AI student at Northeastern University. Deep learning for medical imaging, computer vision, and reliable AI systems."
        />
      </Head>

      <motion.div
        className="min-h-screen text-fg transition-colors duration-150 relative"
        variants={pageVariants}
        initial="initial"
        animate={pageReady ? "animate" : "initial"}
      >
        {/* Site-wide ambient background (no visible “end” – same on every section) */}
        <div className="fixed inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="absolute inset-0 hero-aurora opacity-60 motion-reduce:opacity-40" />
          <div className="absolute inset-0 ai-pattern opacity-[0.08]" />
          <div className="absolute -top-40 left-[-15%] h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl hero-blob hero-blob-1 motion-reduce:opacity-40" />
          <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-brand/15 blur-3xl hero-blob hero-blob-2 motion-reduce:opacity-40" />
          <div className="absolute inset-0 hero-noise opacity-[0.06] mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-bg/90" />
        </div>

        {pageReady && (
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            onChatToggle={() => chatToggleRef?.current?.()}
          />
        )}

        <motion.main className="flex-grow" variants={contentVariants}>
          <Hero
            title="Hi, I'm Shubham Gajjar"
            subtitle="AI researcher and M.S. AI student at Northeastern University. I work on deep learning for biomedical imaging and computer vision, and I enjoy shipping reliable ML systems."
            resumeLink="/Shubham_Gajjar_Resume.pdf"
          />

          <About />

          <Skills />

          <Experience />

          <Certificates />

          <Badges />

          <Contact />
        </motion.main>
      </motion.div>
    </>
  );
}
