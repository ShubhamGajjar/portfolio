// components/About.js
import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BeakerIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ai-gradient-text font-display">
            About Me
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-5 text-muted leading-relaxed text-base sm:text-lg">
            <p>
              I’m an AI researcher and M.S. Artificial Intelligence student at Northeastern
              University (The Roux Institute). I work at the intersection of deep learning,
              computer vision, and biomedical imaging.
            </p>
            <p>
              I’ve published and presented research at <span className="text-fg">IEEE AIC 2025</span>,
              and I have ongoing work under review (Elsevier) on attention‑enhanced segmentation
              models for brain tumor MRI. I’m especially interested in hybrid architectures
              (CNNs + Transformers), strong evaluation, and building ML systems that are reliable
              in practice.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <AcademicCapIcon className="h-5 w-5 text-brand" />
                <p className="text-sm font-semibold text-fg">Research focus</p>
              </div>
              <p className="mt-2 text-sm text-muted">
                Medical imaging, computer vision, and hybrid deep learning architectures.
              </p>
            </div>
            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <BeakerIcon className="h-5 w-5 text-brand" />
                <p className="text-sm font-semibold text-fg">Recent highlights</p>
              </div>
              <p className="mt-2 text-sm text-muted">
                Published at IEEE AIC 2025 • Brain tumor segmentation work under review.
              </p>
            </div>
          </div>

          {/* Download CV Button */}
          <motion.div
            className="mt-12 flex justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href="/Shubham_Gajjar_CV.pdf"
              download="Shubham_Gajjar_CV.pdf"
              className="btn-secondary"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
