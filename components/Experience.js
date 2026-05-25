import { workExperience } from "../utils/data";

function startYearOf(duration) {
  const m = duration?.match(/(\d{4})/);
  return m ? m[1] : "—";
}

function groupByYearDesc(items) {
  const groups = {};
  for (const it of items) {
    const y = startYearOf(it.duration);
    if (!groups[y]) groups[y] = [];
    groups[y].push(it);
  }
  return Object.entries(groups)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, list]) => ({ year, list }));
}

export default function Experience() {
  const groups = groupByYearDesc(workExperience);

  return (
    <section id="work" className="py-28 px-6 sm:px-12 max-w-[900px] mx-auto">
      <div className="eyebrow mb-[14px]">02 · Experience</div>
      <h2 className="section-title mb-14">
        Recent <em>work</em>.
      </h2>

      <div className="space-y-16">
        {groups.map((group) => (
          <YearGroup
            key={group.year}
            year={group.year}
            count={group.list.length}
            label={group.list.length === 1 ? "role" : "roles"}
          >
            {group.list.map((w) => (
              <Role key={w.id} role={w} />
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

function Role({ role }) {
  return (
    <article>
      <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-jade mb-3">
        {role.duration} · {role.location}
      </div>

      <h4
        className="font-display font-extrabold text-ink mb-1"
        style={{
          fontSize: "clamp(20px, 2.4vw, 28px)",
          lineHeight: 1.2,
          letterSpacing: "-.015em",
        }}
      >
        {role.position}
      </h4>

      <p className="font-serif italic text-[14px] text-soft mb-5">{role.company}</p>

      {role.description && (
        <p
          className="font-serif text-ink-2 mb-6 max-w-[70ch]"
          style={{ fontSize: "16px", lineHeight: 1.75 }}
        >
          {role.description}
        </p>
      )}

      {role.responsibilities?.length > 0 && (
        <ul
          className="font-serif text-ink-2 mb-6 max-w-[70ch] list-disc pl-5 space-y-2"
          style={{ fontSize: "15px", lineHeight: 1.65 }}
        >
          {role.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}

      {role.technologies?.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {role.technologies.slice(0, 12).map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] tracking-[.10em] uppercase text-softer"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
