import { certificates } from "../utils/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-[14px]">06 · Certifications</div>
      <h2 className="section-title mb-14">
        Continued <em>learning</em>.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {certificates.map((c) => (
          <a
            key={c.id}
            href={c.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group ai-card p-6 flex flex-col gap-3 cursor-pointer"
          >
            <div className="font-mono text-[10px] tracking-[.16em] uppercase text-jade flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-jade" />
              {c.date}
            </div>
            <h3
              className="font-display font-extrabold text-[17px] leading-[1.2] text-ink mt-auto"
              style={{ letterSpacing: "-.01em" }}
            >
              {c.title}
            </h3>
            <div className="font-mono text-[10.5px] text-softer">{c.issuer}</div>
            <div className="font-display font-bold text-[12px] text-jade-dk inline-flex items-center gap-2 mt-2">
              <span className="w-[18px] h-[1.5px] bg-jade-lt transition-all group-hover:w-[28px] group-hover:bg-jade" />
              View certificate
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
