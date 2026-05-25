export default function NowCard({ headline, body, updated }) {
  return (
    <section className="py-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="flex items-center gap-3 mb-[14px]">
        <span className="eyebrow">Now</span>
        <span className="font-mono text-[10px] tracking-[.18em] uppercase text-softer leading-none">
          {updated}
        </span>
      </div>
      <h2 className="section-title mb-8">
        Currently <em>{headline}</em>.
      </h2>
      <p
        className="font-serif text-soft max-w-[68ch]"
        style={{ fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.7 }}
      >
        {body}
      </p>
    </section>
  );
}
