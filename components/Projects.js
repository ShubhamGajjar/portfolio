import { projects } from "../utils/data";

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

export default function Projects() {
  const groups = groupByYearDesc(projects);

  return (
    <section id="projects" className="py-28 px-6 sm:px-12 max-w-[900px] mx-auto">
      <div className="eyebrow mb-[14px]">04 · Projects</div>
      <h2 className="section-title mb-14">
        Things I&apos;ve <em>built</em>.
      </h2>

      <div className="space-y-16">
        {groups.map((group) => (
          <YearGroup
            key={group.year}
            year={group.year}
            count={group.list.length}
            label={group.list.length === 1 ? "project" : "projects"}
          >
            {group.list.map((p) => (
              <ProjectItem key={p.id} project={p} />
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

function ProjectItem({ project }) {
  return (
    <article>
      <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-jade mb-3">
        {project.category}
        {project.impact && project.impact !== project.category && (
          <span className="text-softer"> · {project.impact}</span>
        )}
      </div>

      <h4
        className="font-display font-extrabold text-ink mb-4"
        style={{ fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: 1.2, letterSpacing: "-.015em" }}
      >
        {project.title}
      </h4>

      <p
        className="font-serif text-ink-2 mb-6 max-w-[70ch]"
        style={{ fontSize: "16px", lineHeight: 1.75 }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {project.technologies?.slice(0, 8).map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] tracking-[.10em] uppercase text-softer"
          >
            {t}
          </span>
        ))}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-[12px] text-jade-dk hover:text-jade transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-[12px] text-jade-dk hover:text-jade transition-colors"
          >
            Live demo →
          </a>
        )}
      </div>
    </article>
  );
}
