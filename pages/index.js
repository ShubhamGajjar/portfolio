// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

// Receive theme and toggleTheme from _app.js props
export default function Home({ theme, toggleTheme }) {
  return (
    <>
      <Head>
        <title>Shubham Gajjar | Portfolio</title>
        <meta name="description" content="Portfolio of Shubham Gajjar, showcasing projects in AI, ML, and Deep Learning." />
        <link rel="icon" href="/favicon.ico" /> {/* Make sure you have a favicon in /public */}
      </Head>

      {/* Main layout container */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900"> {/* Ensure bg is set here too */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Main content grows to push footer down */}
        <main className="flex-grow">
          <Hero
            title="Hi, I'm Shubham Gajjar 👋"
            subtitle="I’m passionate about AI, ML, and Deep Learning. Explore my work and feel free to reach out!"
            resumeLink="/Shubham_Gajjar_Resume.pdf" // Ensure this PDF is in your /public folder
          />

          <Projects />

          {/* You can add more sections here later */}
          {/* e.g., <AboutMe /> <Skills /> <ContactForm /> */}

        </main>

        <Footer />
      </div>
    </>
  );
}