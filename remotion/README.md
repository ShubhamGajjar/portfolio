# Portfolio Remotion Animation

Scroll-scrubbed 8s research-journey animation for shubhamgajjar.dev.

- 1920×1080 · 30 fps · 240 frames · jade pebble palette
- Renders PNG sequence to `../public/anim/`
- Scrub-test page at `../public/scrub-test.html`

## Setup

```bash
cd remotion
npm install
```

## Develop

```bash
npm start              # opens Remotion Studio in browser
```

Remotion Studio supports frame scrubbing, so you can preview each phase in
isolation by jumping to its frame range:

| Phase | Frames  | Description                     |
| ----- | ------- | ------------------------------- |
| 1     | 0–70    | Brain · tumor · particles       |
| 2     | 60–150  | Network architecture            |
| 3     | 140–210 | Classification fan-out          |
| 4     | 200–240 | Name assembly                   |

## Render PNG sequence

```bash
npm run build          # renders 240 PNGs into ../public/anim/
```

Default output filenames are `element-0000000.png` … `element-0000239.png`
(7-digit zero-padded, 0-indexed). The scrub-test page (`scrub-test.html`)
expects this exact pattern. If it changes, edit `FRAME_PREFIX` / `FRAME_PAD`
in that file.

Lighter alternatives:

```bash
npm run build:webp     # WebP (smaller files, slightly slower decode)
npm run build:half     # 960×540 (1/4 size on disk)
```

## Test the scrub

```bash
open ../public/scrub-test.html
```

Works with `file://` directly — no server needed. Scroll the page to scrub
through frames. HUD top-left shows current frame and load status.
