// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // legacy tokens (kept so existing components — Chatbot — keep working)
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        brand2: "rgb(var(--brand2) / <alpha-value>)",
        // jade palette — direct named tokens
        jade: "rgb(var(--jade) / <alpha-value>)",
        "jade-dk": "rgb(var(--jade-dk) / <alpha-value>)",
        "jade-md": "rgb(var(--jade-md) / <alpha-value>)",
        "jade-lt": "rgb(var(--jade-lt) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        "paper-2": "rgb(var(--paper-2) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-2": "rgb(var(--ink-2) / <alpha-value>)",
        soft: "rgb(var(--soft) / <alpha-value>)",
        softer: "rgb(var(--softer) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "Lora", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(64,78,59,.04), 0 12px 28px rgba(64,78,59,.10)",
        card: "0 4px 24px -4px rgba(64,78,59,.10)",
        deep: "0 16px 48px -10px rgba(64,78,59,.18)",
        glow: "0 0 0 1px rgba(123,150,105,.18), 0 10px 30px rgba(123,150,105,.16)",
      },
    },
  },
  plugins: [],
};
