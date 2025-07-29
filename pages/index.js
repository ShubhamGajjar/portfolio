// pages/index.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Receive theme and toggleTheme from _app.js props
export default function Home({ theme, toggleTheme }) {
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
      </Head>

      {/* Main layout container */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Main content grows to push footer down */}
        <main className="flex-grow">
          <Hero
            title="Hi, I'm Shubham Gajjar 👋"
            subtitle="AI Engineer & ML Specialist pioneering the future with intelligent solutions and cutting-edge artificial intelligence."
            resumeLink="/Shubham_Gajjar_Resume.pdf"
          />

          <Skills />

          <Projects />

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
