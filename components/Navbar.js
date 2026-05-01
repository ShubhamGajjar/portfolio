import { useState } from "react";

export default function Navbar({ onChatToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 sm:px-12 py-4 border-b border-line backdrop-blur-md"
      style={{ background: "rgba(244,246,241,.92)" }}
    >
      <a href="#hero" className="font-display font-extrabold text-[15px] text-ink">
        Shubham Gajjar
      </a>

      <div className="hidden md:flex gap-7 font-mono text-[11px] tracking-[.12em] uppercase text-soft">
        <a href="#about" className="hover:text-jade-dk transition-colors">About</a>
        <a href="#work" className="hover:text-jade-dk transition-colors">Work</a>
        <a href="#research" className="hover:text-jade-dk transition-colors">Research</a>
        <a href="#contact" className="hover:text-jade-dk transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        {onChatToggle && (
          <button
            onClick={onChatToggle}
            className="hidden sm:inline-flex font-mono text-[11px] tracking-[.12em] uppercase text-soft hover:text-jade-dk transition-colors"
            aria-label="Open chatbot"
          >
            Chat
          </button>
        )}
        <a
          href="/Shubham_Gajjar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display font-bold text-[13px] bg-jade-dk text-white px-5 py-2 rounded-full hover:bg-ink transition-colors"
        >
          Resume ↓
        </a>
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d={open ? "M4 4 L16 16 M4 16 L16 4" : "M3 6 H17 M3 14 H17"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-paper border-b border-line px-6 py-4 flex flex-col gap-3 font-mono text-[12px] tracking-[.12em] uppercase text-soft">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#research" onClick={() => setOpen(false)}>Research</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
