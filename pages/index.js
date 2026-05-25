// pages/index.js
import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import NowCard from "../components/NowCard";
import Highlights from "../components/Highlights";
import SkillsStrip from "../components/SkillsStrip";
import Contact from "../components/Contact";
import { workExperience, researchPapers, projects } from "../utils/data";

const siteUrl = "https://shubhamgajjar.dev";

// Subset of skills surfaced in the compact home strip — full list lives on /about
const HOME_SKILLS = [
  "PyTorch",
  "Computer Vision",
  "Vision Transformers",
  "Medical AI",
  "Python",
  "Next.js",
  "Reinforcement Learning",
  "Contrastive Learning",
];

// Edit this whenever your current focus changes — it's the "currently working on" card
const NOW = {
  headline: "Two parallel projects in medical AI",
  body:
    "As Research Assistant at Northeastern, I'm building a vision-language model for veterinary mast cell tumor cytology — MedGemma 1.5 4B with QLoRA on a MedSigLIP encoder, deployed on Databricks. For my Research Capstone (a separate track), I led MorphoCLIP: a dual-encoder contrastive system aligning Cell Painting microscopy with natural-language perturbations.",
  updated: "May 2026",
};

export default function Home() {
  const latestWork = workExperience[0];
  const latestPaper = researchPapers[0];
  const latestProject = projects[0];

  return (
    <>
      <Head>
        <title>Shubham Gajjar | AI Researcher & M.S. AI @ Northeastern</title>
        <meta
          name="description"
          content="AI researcher and M.S. AI student at Northeastern University. Deep learning for medical imaging, computer vision, and reliable AI systems."
        />
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

      <main>
        <Hero />
        <About />
        <NowCard headline={NOW.headline} body={NOW.body} updated={NOW.updated} />
        <Highlights work={latestWork} paper={latestPaper} project={latestProject} />
        <SkillsStrip skills={HOME_SKILLS} />
        <Contact />
      </main>
    </>
  );
}
