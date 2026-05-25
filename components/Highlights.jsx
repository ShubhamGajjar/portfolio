import HighlightCard from "./HighlightCard";

export default function Highlights({ work, paper, project }) {
  return (
    <section className="py-20 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-[14px]">Highlights</div>
      <h2 className="section-title mb-12">
        Latest <em>across the desk</em>.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HighlightCard
          kicker="Latest work"
          title={work.position}
          sub={`${work.company} · ${work.duration}`}
          href="/work"
          cta="See all work"
        />
        <HighlightCard
          kicker="Latest paper"
          title={paper.title}
          sub={`${paper.conference} · ${paper.status}`}
          href="/research"
          cta="See all research"
        />
        <HighlightCard
          kicker="Latest project"
          title={project.title}
          sub={project.category}
          href="/projects"
          cta="See all projects"
        />
      </div>
    </section>
  );
}
