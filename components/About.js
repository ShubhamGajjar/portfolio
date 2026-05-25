export default function About({ variant = "home" }) {
  if (variant === "full") return <AboutFull />;
  return <AboutHome />;
}

function AboutHome() {
  return (
    <section id="about" className="py-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-[14px]">01 · About</div>
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
          engineering experience. Most candidates have one or the other; I bring both to the same desk.
        </p>
      </div>
    </section>
  );
}

function AboutFull() {
  return (
    <section className="py-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-[14px]">About</div>
      <h2 className="section-title mb-14">
        Hello, I&apos;m <em>Shubham</em>.
      </h2>

      <div className="font-serif max-w-[70ch] space-y-6 text-ink-2" style={{ fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.75 }}>
        <p>
          I&apos;m an AI researcher and M.S. AI student at Northeastern University, working at the intersection
          of <em className="italic text-jade-dk">vision-language models</em> and biomedicine.
        </p>

        <p>
          I work on two parallel tracks. As a Research Assistant at Northeastern, I&apos;m building an end-to-end
          vision-language model for veterinary fine-needle aspirate cytology — fine-tuning MedGemma 1.5 4B with
          QLoRA on a MedSigLIP encoder, deployed on Databricks with MLflow and Unity Catalog. Separately, for my
          Research Capstone, I led MorphoCLIP — a dual-encoder contrastive system aligning Cell Painting
          microscopy with natural-language perturbation descriptions across drugs, CRISPR knockouts, and ORF
          overexpressions.
        </p>

        <p>
          Before graduate school I spent a year at BigCircle (UPSAAS Technologies LLP) as an AI engineer,
          shipping a multi-agent Deep Research pipeline, dashboards, and React Native apps. The engineering
          background keeps the research honest — I think hard about pipelines, reproducibility, and what
          actually ships.
        </p>

        <p className="text-soft" style={{ fontSize: "15px" }}>
          Outside the work above, my research interests span multimodal contrastive learning, parameter-efficient
          fine-tuning of large foundation models, attention mechanisms for medical image segmentation and
          classification, and the data engineering required to make terabyte-scale microscopy and pathology
          datasets tractable.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-10">
        <a
          className="btn-pill primary"
          href="/Shubham_Gajjar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
        <a
          className="btn-pill"
          href="/Shubham_Gajjar_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
