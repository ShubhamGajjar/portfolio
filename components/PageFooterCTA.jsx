import Link from "next/link";

export default function PageFooterCTA() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-[1200px] mx-auto text-center">
      <div className="flex justify-center mb-5">
        <span className="eyebrow">Reach out</span>
      </div>
      <h2 className="section-title mb-8">
        Got a question? <em>Let&apos;s talk</em>.
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/#contact" className="btn-pill primary">
          Get in touch →
        </Link>
        <Link href="/" className="btn-pill">
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
