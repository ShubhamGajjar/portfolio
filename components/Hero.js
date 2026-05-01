import { motion } from "framer-motion";
import { socialLinks } from "../utils/data";

const EASE = [0.2, 0.8, 0.2, 1];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-[120px] pb-20 px-6 sm:px-12 relative overflow-hidden flex items-center"
    >
      <div className="hero-blob-a" />
      <div className="hero-blob-b" />

      <div className="relative z-[1] max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
        <div>
          <h1
            className="font-display font-black text-ink mb-6"
            style={{ fontSize: "clamp(60px, 9vw, 140px)", lineHeight: ".9", letterSpacing: "-.04em" }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
            >
              Shubham
            </motion.span>
            <motion.span
              className="block font-serif italic font-semibold text-jade"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.38, ease: EASE }}
            >
              Gajjar.
            </motion.span>
          </h1>

          <motion.p
            className="font-serif text-soft max-w-[42ch]"
            style={{ fontSize: "clamp(17px, 1.5vw, 21px)", lineHeight: "1.65" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
          >
            M.S. AI at <strong className="font-semibold text-ink-2">Northeastern University</strong>.<br />
            Building <em className="italic text-jade-dk">practical AI</em> for healthcare and real-world systems.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mt-9"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          >
            <a
              className="btn-pill primary"
              href="/Shubham_Gajjar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume ↓
            </a>
            <a className="btn-pill" href={`mailto:${socialLinks.email}`}>
              Email me →
            </a>
          </motion.div>
        </div>

        <ProfileHighlightsCard />
      </div>
    </section>
  );
}

const HIGHLIGHTS = [
  {
    year: "2026 – Present",
    title: "Research Assistant",
    sub: "Northeastern · Vision-Language Models in Biomedicine",
  },
  {
    year: "2026",
    title: "MorphoCLIP",
    sub: "Cell Painting contrastive learning · Working paper",
  },
  {
    year: "2025",
    title: "Hybrid ResNet–ViT for Skin Cancer",
    sub: "Published · IEEE AIC 2025",
  },
];

function ProfileHighlightsCard() {
  return (
    <motion.div
      className="bg-white border border-line rounded-[18px] shadow-deep relative overflow-hidden w-full"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: "linear-gradient(90deg, rgb(var(--jade)), rgb(var(--jade-md)))" }}
      />

      {/* Photo */}
      <div className="aspect-square w-full bg-paper-2 overflow-hidden border-b border-line">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/profile-picture.jpg"
          alt="Shubham Gajjar"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(.95)" }}
        />
      </div>

      {/* Highlights */}
      <div className="p-7">
        <div className="font-mono text-[10px] tracking-[.18em] uppercase text-jade flex items-center gap-2 mb-5">
          <span className="w-[6px] h-[6px] rounded-full bg-jade animate-pulse" />
          Highlights
        </div>

        <div className="flex flex-col">
          {HIGHLIGHTS.map((item, i) => (
            <div key={i} className={i > 0 ? "pt-5 mt-5 border-t border-line" : ""}>
              <div className="font-mono text-[10px] tracking-[.12em] text-jade">{item.year}</div>
              <div
                className="font-display font-extrabold text-ink text-[16px] leading-tight mt-1"
                style={{ letterSpacing: "-.01em" }}
              >
                {item.title}
              </div>
              <div className="font-serif italic text-[12.5px] text-soft mt-1" style={{ lineHeight: 1.45 }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
