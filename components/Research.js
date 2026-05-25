import { researchPapers } from "../utils/data";

const STATUS_TONE = {
  Published: "text-jade",
  "Under Review": "text-jade-md",
  "In Progress": "text-softer",
};

function groupByYearDesc(items) {
  const groups = {};
  for (const it of items) {
    const y = it.year || "—";
    if (!groups[y]) groups[y] = [];
    groups[y].push(it);
  }
  return Object.entries(groups)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, list]) => ({ year, list }));
}

export default function Research() {
  const groups = groupByYearDesc(researchPapers);

  return (
    <section id="research" className="py-28 px-6 sm:px-12 max-w-[900px] mx-auto">
      <div className="eyebrow mb-[14px]">03 · Research</div>
      <h2 className="section-title mb-14">
        Selected <em>research</em>.
      </h2>

      <div className="space-y-16">
        {groups.map((group) => (
          <YearGroup
            key={group.year}
            year={group.year}
            count={group.list.length}
            label={group.list.length === 1 ? "paper" : "papers"}
          >
            {group.list.map((p) => (
              <Paper key={p.id} paper={p} />
            ))}
          </YearGroup>
        ))}
      </div>
    </section>
  );
}

function YearGroup({ year, count, label, children }) {
  return (
    <div>
      <div className="flex items-center gap-5 mb-10">
        <h3
          className="font-display font-black text-jade-dk leading-none"
          style={{ fontSize: "clamp(34px, 4vw, 48px)", letterSpacing: "-.03em" }}
        >
          {year}
        </h3>
        <span className="flex-1 h-px bg-line" />
        <span className="font-mono text-[10.5px] tracking-[.18em] uppercase text-softer">
          {count} {label}
        </span>
      </div>

      <div className="space-y-14">{children}</div>
    </div>
  );
}

function Paper({ paper }) {
  const tone = STATUS_TONE[paper.status] || "text-softer";

  return (
    <article>
      <div className="font-mono text-[10.5px] tracking-[.18em] uppercase mb-3">
        <span className={tone}>{paper.status}</span>
        <span className="text-softer"> · {paper.conference}</span>
      </div>

      <h4
        className="font-display font-extrabold text-ink mb-2"
        style={{ fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: 1.2, letterSpacing: "-.015em" }}
      >
        {paper.title}
      </h4>

      <p className="font-serif italic text-[14px] text-soft mb-5">{paper.authors}</p>

      <p
        className="font-serif text-ink-2 mb-6 max-w-[70ch]"
        style={{ fontSize: "16px", lineHeight: 1.75 }}
      >
        {paper.abstract}
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {paper.keywords?.slice(0, 6).map((k) => (
          <span
            key={k}
            className="font-mono text-[10px] tracking-[.10em] uppercase text-softer"
          >
            {k}
          </span>
        ))}

        {paper.ieeeUrl && (
          <a
            href={paper.ieeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-[12px] text-jade-dk hover:text-jade transition-colors"
          >
            IEEE Xplore →
          </a>
        )}
        {paper.github && (
          <a
            href={paper.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-[12px] text-jade-dk hover:text-jade transition-colors"
          >
            GitHub →
          </a>
        )}
        {paper.doi && paper.doi !== "Pending" && !paper.doi.includes("Pending") && (
          <span className="font-mono text-[10px] text-softer">DOI: {paper.doi}</span>
        )}
      </div>
    </article>
  );
}
