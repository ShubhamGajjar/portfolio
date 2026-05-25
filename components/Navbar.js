import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ChatBubbleIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const MenuIcon = ({ open, ...props }) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...props}>
    <path d={open ? "M4 4 L16 16 M4 16 L16 4" : "M3 6 H17 M3 14 H17"} />
  </svg>
);

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar({ onChatToggle }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <style>{`
        .nav-glass-pill {
          background-color: oklch(from var(--background) l c h / 55%);
          backdrop-filter: blur(6px) saturate(150%);
          -webkit-backdrop-filter: blur(6px) saturate(150%);
          box-shadow:
            inset -0.3px -1px 4px 0 color-mix(in srgb, black 12%, transparent),
            inset -1.5px 2.5px 0 -2px color-mix(in srgb, black 18%, transparent),
            inset 0 3px 4px -2px color-mix(in srgb, black 18%, transparent),
            inset 2px -6.5px 1px -4px color-mix(in srgb, black 10%, transparent),
            0 1px 5px 0 color-mix(in srgb, black 10%, transparent),
            0 6px 24px 0 color-mix(in srgb, black 10%, transparent);
        }

        .nav-brand {
          font-family: var(--font-display), var(--font-sans), "Nunito", sans-serif;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: -.01em;
          color: rgb(var(--ink));
          padding: 9px 16px;
          border-radius: 999px;
          white-space: nowrap;
          text-shadow: 0 1px 2px oklch(from var(--background) l c h / 30%);
          transition: color .2s, background-color .25s;
        }
        .nav-brand:hover {
          color: rgb(var(--jade-dk));
          background-color: color-mix(in srgb, white 24%, transparent);
        }

        .nav-link {
          font-family: var(--font-mono), "JetBrains Mono", monospace;
          font-size: 13px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: rgb(var(--ink));
          padding: 10px 14px;
          border-radius: 999px;
          transition: color .2s, background-color .25s;
          text-shadow: 0 1px 2px oklch(from var(--background) l c h / 30%);
        }
        .nav-link:hover {
          color: rgb(var(--jade-dk));
          background-color: color-mix(in srgb, white 28%, transparent);
        }
        .nav-link.active {
          color: rgb(var(--jade-dk));
          background-color: color-mix(in srgb, white 22%, transparent);
        }

        .nav-cta {
          font-family: var(--font-mono), "JetBrains Mono", monospace;
          font-size: 13px;
          letter-spacing: .12em;
          text-transform: uppercase;
          font-weight: 700;
          color: rgb(var(--jade-dk));
          padding: 10px 14px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color .2s, background-color .25s;
          text-shadow: 0 1px 2px oklch(from var(--background) l c h / 30%);
        }
        .nav-cta:hover {
          color: rgb(var(--ink));
          background-color: color-mix(in srgb, white 32%, transparent);
        }

        .nav-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgb(var(--ink));
          transition: color .2s, background-color .25s;
        }
        .nav-icon-btn:hover {
          color: rgb(var(--jade-dk));
          background-color: color-mix(in srgb, white 28%, transparent);
        }

        .nav-divider {
          width: 1px;
          height: 22px;
          background: rgb(var(--ink) / .18);
          margin: 0 6px;
        }
      `}</style>

      {/* ─────────── Desktop: one combined pill at top center ─────────── */}
      <nav className="hidden md:block fixed top-5 left-1/2 -translate-x-1/2 z-[200]">
        <div className="nav-glass-pill rounded-full pl-3 pr-2 py-1.5 flex items-center gap-1">
          <Link href="/" className="nav-brand">
            Shubham Gajjar
          </Link>

          <span className="nav-divider" />

          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/#contact"
                ? false
                : router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${active ? " active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}

          <span className="nav-divider" />

          {onChatToggle && (
            <button
              type="button"
              onClick={onChatToggle}
              className="nav-icon-btn"
              aria-label="Open chatbot"
            >
              <ChatBubbleIcon className="h-[17px] w-[17px]" />
            </button>
          )}

          <a
            href="/Shubham_Gajjar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            aria-label="Download resume PDF"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* ─────────── Mobile: brand pill on the left, hamburger on the right ─────────── */}
      <nav className="md:hidden fixed top-4 left-4 z-[200]">
        <div className="nav-glass-pill rounded-full px-1 py-1">
          <Link href="/" className="nav-brand">
            Shubham Gajjar
          </Link>
        </div>
      </nav>

      <div className="md:hidden fixed top-4 right-4 z-[200]">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="nav-glass-pill rounded-full w-10 h-10 inline-flex items-center justify-center text-ink hover:text-jade-dk transition-colors"
        >
          <MenuIcon open={open} className="w-4 h-4" />
        </button>

        {open && (
          <div className="nav-glass-pill rounded-2xl mt-2 px-3 py-3 min-w-[220px] flex flex-col gap-1 font-mono text-[12px] tracking-[.12em] uppercase absolute right-0">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 px-2 text-soft hover:text-jade-dk rounded-lg hover:bg-white/30 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/Shubham_Gajjar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-2 px-2 mt-1 text-jade-dk font-bold rounded-lg hover:bg-white/30 transition-colors"
            >
              Resume
            </a>
            {onChatToggle && (
              <button
                onClick={() => {
                  setOpen(false);
                  onChatToggle();
                }}
                className="py-2 px-2 text-soft hover:text-jade-dk text-left rounded-lg hover:bg-white/30 transition-colors"
              >
                Chat
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
