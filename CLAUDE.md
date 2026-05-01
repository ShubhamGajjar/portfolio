# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Run production server
```

No linting, testing, or type-checking setup exists in this project.

## Environment Variables

Copy `.env.local.example` to `.env.local` and set:
- `GEMINI_API_KEY` — Google Gemini API (powers the chatbot)
- `RESEND_API_KEY` — Resend email service (powers contact form)
- `CONTACT_TO_EMAIL` — Recipient for contact form submissions

## Architecture

**Framework:** Next.js (Pages Router), React 19, Tailwind CSS 3, Framer Motion.

**Single-page portfolio** — `pages/index.js` renders all sections in order. Navigation scrolls within the page. `pages/_app.js` manages global theme state (dark/light) via localStorage and passes `isDarkMode`/`toggleTheme` as props to the page.

**API routes:**
- `pages/api/chat.js` — Streams responses from Google Gemini; uses `utils/chatContext.js` to inject portfolio content as system context
- `pages/api/contact.js` — Sends email via Resend

**Data layer** (`utils/`):
- `data.js` — All portfolio content: projects, skills, work experience, education, research papers
- `certificates.js` — Certificate and badge metadata
- `chatContext.js` — Builds the Gemini system prompt from `data.js` content

**Components** map 1:1 to page sections: `Navbar`, `Hero`, `About`, `Skills`, `Experience`, `Certificates`, `Badges`, `Contact`, `Chatbot`.

## Theme System

CSS custom properties in `styles/globals.css` drive both light and dark modes. The `.dark` class is toggled on `<html>`. Key variables: `--bg`, `--fg`, `--muted`, `--card`, `--border`, `--brand`.

Custom utility classes defined in `globals.css`:
- `.glass`, `.glass-strong`, `.glass-card` — glassmorphism panels
- `.ai-glass`, `.ai-card` — brand-accented variants
- `.btn-primary`, `.btn-secondary`, `.btn-ai` — button styles

## Chatbot

`components/Chatbot.js` is the most complex component (~1,400 lines). It handles streaming token animation, rate limiting, localStorage message persistence, conversation export (text/JSON), and mobile touch interactions. The chatbot's persona and knowledge come entirely from `utils/chatContext.js`.

## Content Updates

To update portfolio content (projects, experience, skills, etc.), edit `utils/data.js`. Certificate/badge metadata lives in `utils/certificates.js`. Static assets (images, PDFs) go in `public/`.
