// components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  DocumentArrowDownIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { researchPapers, socialLinks } from "../utils/data";

const Hero = ({ title, subtitle, resumeLink }) => {
  const published = researchPapers?.find((p) => p.status === "Published");
  const underReview = researchPapers?.find((p) => p.status === "Under Review");

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 sm:pb-20"
    >
      {/* Background is site-wide (see index.js); hero has no local gradient so it never “ends” */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm text-fg/80 backdrop-blur-md"
            >
              <MapPinIcon className="h-4 w-4 text-brand" />
              <span>{socialLinks?.location || "Portland, Maine"}</span>
              <span className="text-muted">•</span>
              <span className="text-fg/80">AI • Medical imaging • Systems</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.05, ease: "easeOut" }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg font-display"
            >
              <span className="block">{title}</span>
              <span className="mt-2 block text-2xl sm:text-3xl lg:text-4xl font-semibold text-fg/80">
                Building practical AI for healthcare and real-world systems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
              className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center"
            >
              <a
                href={resumeLink}
                download="Shubham_Gajjar_Resume.pdf"
                className="btn-primary"
              >
                <DocumentArrowDownIcon className="h-5 w-5" />
                Download resume
              </a>
              <a href="#experience" className="btn-secondary">
                View experience
              </a>
              <a href="#contact" className="btn-ai">
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm"
            >
              {socialLinks?.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-fg/80 hover:text-fg transition-colors"
                >
                  LinkedIn
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              )}
              {socialLinks?.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-fg/80 hover:text-fg transition-colors"
                >
                  GitHub
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              )}
              {socialLinks?.googleScholar && (
                <a
                  href={socialLinks.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-fg/80 hover:text-fg transition-colors"
                >
                  Google Scholar
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Right */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-fg">
                  Highlights
                </h2>
                <span className="text-xs text-muted">
                  Quick scan
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                  <p className="text-sm font-semibold text-fg">
                    {published
                      ? `Published • ${published.conference}`
                      : "Published research • IEEE conference"}
                  </p>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    Hybrid deep learning for skin lesion classification (HAM10000).
                  </p>
                  {published?.ieeeUrl && (
                    <a
                      href={published.ieeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm text-brand hover:opacity-80 transition-colors"
                    >
                      View on IEEE Xplore
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                  <p className="text-sm font-semibold text-fg">
                    {underReview ? "Under review • Elsevier" : "Ongoing research"}
                  </p>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    Brain tumor segmentation in FLAIR MRI with attention-enhanced UNet variants.
                  </p>
                </div>

                <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                  <p className="text-sm font-semibold text-fg">
                    Engineering experience
                  </p>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    Built production systems: multi-agent APIs, dashboards, and mobile apps.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
