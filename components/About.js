export default function About() {
  return (
    <section id="about" className="py-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-[14px]">§ 01 · About</div>
      <h2 className="section-title mb-14">
        Researcher at the intersection
        <br />
        of <em>vision &amp; medicine</em>.
      </h2>

      <div className="font-serif max-w-[68ch]">
        <p
          className="text-ink-2"
          style={{ fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.7 }}
        >
          I&apos;m a <em className="italic text-jade-dk">published AI researcher</em> with a year of production
          engineering experience: an unusual combination. Most candidates have one or the other; I bring both to the
          same desk.
        </p>
        <p className="text-soft text-[15px] mt-[18px]" style={{ lineHeight: 1.7 }}>
          At Northeastern&apos;s Roux Institute I&apos;m completing an M.S. in AI (GPA 4.0/4.0) with research on hybrid
          CNN-Transformer architectures for medical imaging. Published at IEEE AIC 2025, with additional work under
          review at Elsevier. Before graduate school I shipped multi-agent APIs, dashboards, and React Native iOS apps
          at BigCircle. The engineering keeps the research honest.
        </p>
      </div>
    </section>
  );
}
