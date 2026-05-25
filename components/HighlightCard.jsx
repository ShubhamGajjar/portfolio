import Link from "next/link";

export default function HighlightCard({ kicker, title, sub, href, cta }) {
  return (
    <Link
      href={href}
      className="ai-card flex flex-col p-6 hover:no-underline group h-full"
    >
      <div className="font-mono text-[10px] tracking-[.18em] uppercase text-jade mb-3">
        {kicker}
      </div>

      <div
        className="font-display font-extrabold text-ink text-[18px] leading-tight mb-2"
        style={{ letterSpacing: "-.01em" }}
      >
        {title}
      </div>

      <div className="font-serif italic text-[13px] text-soft mb-6" style={{ lineHeight: 1.5 }}>
        {sub}
      </div>

      <div className="mt-auto inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[.12em] uppercase text-jade-dk group-hover:text-jade transition-colors">
        <span>{cta}</span>
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </Link>
  );
}
