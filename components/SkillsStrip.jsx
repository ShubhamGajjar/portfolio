import Link from "next/link";

export default function SkillsStrip({ skills }) {
  return (
    <section className="pt-4 pb-20 px-6 sm:px-12 max-w-[1200px] mx-auto">
      <div className="eyebrow mb-5">Stack snapshot</div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="pill">
            {s}
          </span>
        ))}
        <Link
          href="/about"
          className="pill inline-flex items-center gap-1.5 hover:bg-jade-dk hover:text-white hover:border-jade-dk transition-colors"
        >
          <span>Full stack</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
