import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { researchPapers } from "../utils/data";

const STATS = {
  1: [
    { value: "96.3", suffix: "%", label: "Accuracy" },
    { value: "0.961", label: "F1" },
    { value: "1.00", label: "AUC" },
  ],
  2: [
    { value: "99.74", suffix: "%", label: "Acc" },
    { value: "99.71", suffix: "%", label: "Spec" },
    { value: "95.10", suffix: "%", label: "Dice" },
  ],
  3: [
    { value: "24.3", suffix: "%", label: "R@10" },
    { value: "28", label: "Med. Rank" },
    { value: "200×", label: "vs Random" },
  ],
};

const STATUS_LABEL = {
  Published: "Published · IEEE",
  "Under Review": "Under Review · Elsevier",
  "In Progress": "In Progress · 2026",
};

const STATUS_COLOR = {
  Published: { text: "text-jade", dot: "bg-jade" },
  "Under Review": {
    text: "text-[rgb(var(--jade-md))]",
    dot: "bg-[rgb(var(--jade-md))]",
  },
  "In Progress": { text: "text-softer", dot: "bg-softer" },
};

export default function Research() {
  return (
    <section id="research" className="py-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-[14px]">§ 03 · Research</div>
      <h2 className="section-title mb-14">
        Recent <em>research</em>.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] items-start">
        {researchPapers.map((p) => (
          <Paper key={p.id} paper={p} />
        ))}
      </div>
    </section>
  );
}

function Paper({ paper }) {
  const [open, setOpen] = useState(false);
  const stats = STATS[paper.id] || [];
  const statusColor = STATUS_COLOR[paper.status] || STATUS_COLOR["In Progress"];
  const statusLabel = STATUS_LABEL[paper.status] || paper.status;
  const hasIeee = !!paper.ieeeUrl;
  const hasGithub = !!paper.github;

  return (
    <div className="ai-card p-[26px] flex flex-col gap-[14px]">
      <div className={`font-mono text-[10px] tracking-[.16em] uppercase inline-flex items-center gap-2 w-fit ${statusColor.text}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${statusColor.dot}`} />
        {statusLabel}
      </div>

      <h3
        className="font-display font-extrabold text-[19px] leading-[1.25] text-ink"
        style={{ letterSpacing: "-.01em" }}
      >
        {paper.title}
      </h3>

      <div className="font-mono text-[10.5px] text-softer">{paper.conference}</div>

      <div className="grid grid-cols-3 gap-2 py-3 border-y border-line">
        {stats.map((s, i) => (
          <div key={i}>
            <div
              className="font-display font-black text-jade-dk"
              style={{ fontSize: "21px", lineHeight: 1, letterSpacing: "-.02em" }}
            >
              {s.value}
              {s.suffix && (
                <span className="font-serif italic font-normal text-jade text-[13px]">{s.suffix}</span>
              )}
            </div>
            <div className="font-mono text-[9px] tracking-[.12em] uppercase text-softer mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {(hasIeee || hasGithub) && (
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {hasIeee && (
            <a
              href={paper.ieeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-[12px] text-jade-dk hover:text-jade transition-colors inline-flex items-center gap-2"
            >
              <span className="w-[16px] h-[1.5px] bg-jade-lt" />
              IEEE Xplore →
            </a>
          )}
          {hasGithub && (
            <a
              href={paper.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-[12px] text-jade-dk hover:text-jade transition-colors inline-flex items-center gap-2"
            >
              <span className="w-[16px] h-[1.5px] bg-jade-lt" />
              GitHub repo →
            </a>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="font-mono text-[10px] tracking-[.16em] uppercase text-jade-dk hover:text-jade transition-colors inline-flex items-center justify-between gap-2 mt-auto pt-3 border-t border-line w-full"
      >
        <span>{open ? "Hide" : "View"} abstract</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          ↓
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="font-serif text-[13px] text-ink-2 pt-1"
              style={{ lineHeight: 1.65 }}
            >
              {paper.abstract}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
