import { badges } from "../utils/certificates";

export default function Badges() {
  return (
    <section id="badges" className="py-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-[14px]">07 · Credentials</div>
      <h2 className="section-title mb-14">
        Northeastern <em>badges</em>.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[18px]">
        {badges.map((b) => (
          <a
            key={b.id}
            href={b.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group ai-card p-5 flex flex-col items-center gap-3 text-center cursor-pointer"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.badge} alt={b.title} className="w-full h-full object-contain" />
            </div>
            <h3
              className="font-display font-extrabold text-[12px] leading-tight text-ink-2 mt-auto"
              style={{ letterSpacing: "-.01em" }}
            >
              {b.title}
            </h3>
            <div className="font-mono text-[9px] tracking-[.12em] uppercase text-softer">{b.issuer}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
