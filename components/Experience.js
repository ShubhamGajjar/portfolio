const ENTRIES = [
  {
    y: "2026 – Present",
    titlePre: "Research ",
    titleEm: "Assistant",
    titlePost: "",
    org: "Northeastern University · Part-time",
    desc: "Vision-Language Models in Biomedicine. MedGemma / LLaVA-Med for cell-image classification.",
  },
  {
    y: "2025 – 2027",
    titlePre: "M.S. ",
    titleEm: "Artificial Intelligence",
    titlePost: "",
    org: "Northeastern University · Roux Institute",
    desc:
      "Graduate research in Vision-Language Models, computer vision, medical imaging.\nGPA 4.0/4.0",
  },
  {
    y: "2025",
    titlePre: "AI ",
    titleEm: "Engineer",
    titlePost: "",
    org: "BigCircle · UPSAAS Technologies LLP",
    desc: "Multi-agent APIs · Deep Research Tool development.",
  },
  {
    y: "2022 – 2025",
    titlePre: "B.E. Computer ",
    titleEm: "Engineering",
    titlePost: "",
    org: "LDRP-ITR · Gandhinagar, India",
    desc: "ML, DL, CV foundations.\nGPA 8.41/10",
  },
];

export default function Experience() {
  return (
    <section id="work" className="py-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-[14px]">§ 02 · Experience</div>
      <h2 className="section-title mb-14">
        Recent <em>work</em>.
      </h2>
      <div className="border-t-[1.5px] border-line">
        {ENTRIES.map((e, i) => (
          <Row key={i} {...e} />
        ))}
      </div>
    </section>
  );
}

function Row({ y, titlePre, titleEm, titlePost, org, desc }) {
  return (
    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[110px_1.3fr_1fr] gap-3 md:gap-7 items-start py-7 border-b border-line">
      <div className="font-mono text-[12px] tracking-[.08em] text-jade pt-1.5 whitespace-nowrap">{y}</div>
      <div>
        <div
          className="font-display font-extrabold text-[20px] md:text-[24px] leading-tight text-ink"
          style={{ letterSpacing: "-.02em" }}
        >
          {titlePre}
          <em className="font-serif italic font-semibold text-jade">{titleEm}</em>
          {titlePost}
        </div>
        <div className="font-mono text-[11px] tracking-[.06em] text-softer mt-1">{org}</div>
      </div>
      <div
        className="font-serif text-[14px] text-soft hidden md:block max-w-[44ch] pt-1.5 whitespace-pre-line"
        style={{ lineHeight: 1.6 }}
      >
        {desc}
      </div>
    </div>
  );
}
