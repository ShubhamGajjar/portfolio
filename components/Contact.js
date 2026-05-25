import { useState } from "react";
import { socialLinks } from "../utils/data";

const SOCIALS = [
  { label: "LinkedIn", href: socialLinks.linkedin },
  { label: "GitHub", href: socialLinks.github },
  { label: "Google Scholar", href: socialLinks.googleScholar },
  { label: "ORCID", href: socialLinks.orcid },
  { label: "Resume · PDF", href: "/Shubham_Gajjar_Resume.pdf" },
  { label: "CV · PDF", href: "/Shubham_Gajjar_CV.pdf" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-jade-dk text-white pt-32 pb-20 px-6 sm:px-12 relative overflow-hidden"
    >
      <div
        className="absolute -top-52 -right-52 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,.07) 0%, transparent 60%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(186,200,177,.18) 0%, transparent 60%)" }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto">
        <div className="eyebrow on-dark mb-5">08 · Get in touch</div>
        <h2
          className="font-display font-black mb-11"
          style={{ fontSize: "clamp(56px, 10vw, 170px)", lineHeight: ".88", letterSpacing: "-.05em" }}
        >
          Let&apos;s <em className="font-serif italic font-semibold text-jade-lt">talk.</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-[72px] items-start">
          <div>
            <p
              className="font-serif italic max-w-[40ch]"
              style={{
                fontSize: "clamp(18px, 1.8vw, 25px)",
                lineHeight: 1.5,
                color: "rgba(255,255,255,.75)",
              }}
            >
              Open to <em className="not-italic text-jade-lt">research and engineering</em> collaborations in medical
              AI, computer vision, and Large Language Models.
            </p>
            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-3 font-serif text-white border-b-[1.5px] pb-1 mt-7 transition-colors hover:text-jade-lt"
              style={{
                fontSize: "clamp(18px, 2vw, 28px)",
                borderColor: "rgba(255,255,255,.28)",
              }}
            >
              {socialLinks.email} ↗
            </a>

            <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[600px]">
              <input
                type="text"
                required
                placeholder="Your name"
                className="input-dark"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                required
                placeholder="Your email"
                className="input-dark"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <textarea
                required
                placeholder="Tell me about the role / collab"
                className="textarea-dark sm:col-span-2"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:col-span-2 bg-jade-lt text-jade-dk font-display font-extrabold text-[14px] py-3 rounded-full hover:bg-white transition-colors disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Message sent ✓"
                    : status === "error"
                      ? "Try again"
                      : "Send message →"}
              </button>
            </form>
          </div>

          <div className="border-t border-white/10">
            {SOCIALS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-between items-center py-3.5 border-b border-white/10 transition-all hover:pl-2 text-white/55"
              >
                <span
                  className="font-display font-extrabold text-[19px] text-white group-hover:text-jade-lt transition-colors"
                  style={{ letterSpacing: "-.01em" }}
                >
                  {l.label}
                </span>
                <span className="font-serif italic text-white/30 group-hover:translate-x-1 group-hover:text-jade-lt transition-all">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
