import { projects } from "../utils/data";

const SHOWN_IDS = [1, 2, 3]; // TrackMania, Twitter Sentiment, Image Mosaic

export default function Projects() {
  const list = projects.filter((p) => SHOWN_IDS.includes(p.id));
  return (
    <section id="projects" className="py-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-[14px]">§ 04 · Projects</div>
      <h2 className="section-title mb-14">
        Things I&apos;ve <em>built</em>.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] items-start">
        {list.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function Card({ project }) {
  return (
    <div className="ai-card p-[26px] flex flex-col gap-[14px]">
      <div className="font-mono text-[10px] tracking-[.16em] uppercase text-jade flex items-center gap-2 w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-jade" />
        {project.category}
      </div>

      <h3
        className="font-display font-extrabold text-[19px] leading-[1.25] text-ink"
        style={{ letterSpacing: "-.01em" }}
      >
        {project.title}
      </h3>

      <p className="font-serif text-[14px] text-soft" style={{ lineHeight: 1.6 }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-line">
        {project.technologies.slice(0, 5).map((t) => (
          <span
            key={t}
            className="font-mono text-[9px] uppercase tracking-[.10em] text-softer border border-line rounded-full px-2.5 py-0.5 bg-paper-2"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-[12px] text-jade-dk hover:text-jade transition-colors inline-flex items-center gap-2"
          >
            <span className="w-[16px] h-[1.5px] bg-jade-lt" />
            GitHub →
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-[12px] text-jade-dk hover:text-jade transition-colors inline-flex items-center gap-2"
          >
            <span className="w-[16px] h-[1.5px] bg-jade-lt" />
            Live demo →
          </a>
        )}
      </div>
    </div>
  );
}
