// pages/index.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Research from "../components/Research";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Badges from "../components/Badges";
import Contact from "../components/Contact";

export default function Home({ chatToggleRef }) {
  const siteUrl = "https://shubhamgajjar.dev";

  return (
    <>
      <Head>
        <title>Shubham Gajjar | AI Researcher & M.S. AI @ Northeastern</title>
        <meta
          name="description"
          content="AI researcher and M.S. AI student at Northeastern University. Deep learning for medical imaging, computer vision, and reliable AI systems."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7B9669" />
        <meta
          name="keywords"
          content="AI Engineer, Machine Learning, Deep Learning, Computer Vision, Medical AI, Research, IEEE Conference, Brain Tumor, Skin Cancer, Reinforcement Learning"
        />
        <meta name="author" content="Shubham Gajjar" />
        <meta property="og:title" content="Shubham Gajjar | AI Researcher & M.S. AI @ Northeastern" />
        <meta
          property="og:description"
          content="AI researcher and M.S. AI student at Northeastern University. Deep learning for medical imaging, computer vision, and reliable AI systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shubham Gajjar | AI Researcher & M.S. AI @ Northeastern" />
        <meta
          name="twitter:description"
          content="AI researcher and M.S. AI student at Northeastern University. Deep learning for medical imaging, computer vision, and reliable AI systems."
        />
      </Head>

      <Navbar onChatToggle={() => chatToggleRef?.current?.()} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Certificates />
        <Badges />
        <Contact />
      </main>
    </>
  );
}
