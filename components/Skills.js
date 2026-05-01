const CATEGORIES = [
  {
    label: "Frameworks",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "FastAPI"],
  },
  {
    label: "Deep Learning",
    items: [
      "Vision Transformers",
      "CNN / ResNet",
      "UNet",
      "Contrastive Learning",
      "Reinforcement Learning",
    ],
  },
  {
    label: "Computer Vision",
    items: ["OpenCV", "Albumentations", "Medical Imaging", "DINOv3"],
  },
  {
    label: "Data",
    items: ["Python", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    label: "Web & Mobile",
    items: ["Next.js", "React Native", "TypeScript"],
  },
  {
    label: "DevOps",
    items: ["Docker", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-[14px]">§ 05 · Stack</div>
      <h2 className="section-title mb-14">
        Tools I <em>use most</em>.
      </h2>

      <div className="border-t-[1.5px] border-line">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.label}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 items-start py-7 border-b border-line"
          >
            <div className="font-mono text-[11px] tracking-[.18em] uppercase text-jade pt-2">
              {cat.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span key={s} className="pill on">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
