# Jaco Wang — AI Product Portfolio

AI Product Builder × Creative Technologist portfolio.
Live: https://jaco-yijie.github.io

## Stack

React 19 · TypeScript · Vite · Tailwind CSS 4 · React Router

## Local

```bash
npm install
npm run dev        # dev server
npm run build      # typecheck + build + SPA 404 fallback
npm run lint
```

## Structure

```
docs/          CONTENT_AUDIT · PORTFOLIO_PRD · DESIGN_SYSTEM
src/data/      content layer — all copy, metrics and links live here
src/components/
src/pages/
public/resume/
```

All external links resolve through `src/data/links.ts`.
Every proof metric carries a `source` field pointing at where it was verified.

## Motion experiment

`public/videos/jaco-motion.mp4` is the web encode of the supplied Jaco.mp4 (720 × 1280, 30.53 seconds). The WebP poster is a frame from that video. The source is assigned only when the stage enters the viewport; it pauses offscreen and respects reduced motion. Playback can always be toggled with the keyboard or pointer.

## Verification

```bash
npm ci
npm run build
npm run lint
npm test
npm run dev -- --host 127.0.0.1 --port 4175
# In a second terminal, with an existing Playwright installation:
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs node scripts/check-ui.mjs
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs node scripts/check-portfolio.mjs
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs node scripts/check-themes.mjs
```

Pull requests run the existing lint, test and production build workflow. Only main deploys the generated `dist/` artifact to GitHub Pages. Existing project routes, resume and demo URLs are preserved.

## Homepage and preferences

The homepage has five sections: Hero, one motion experiment, three selected projects, About and Contact. Full project details and demo links remain on their case-study routes. Additional projects and notes are available from the footer.

- Language: URL `?lang=zh/en` → saved `portfolio-language` → supported browser language → English. Links retain queries and anchors; the homepage displays one language at a time.
- Theme: Light / Dark / System, defaulting to System. `portfolio-theme` persists the selection. `src/theme/tokens.css` supplies shared colors to the homepage and existing detail pages; `ThemeProvider` responds to OS preference changes. A small head script sets the initial theme before CSS/React to avoid a flash.
- Browser checks cover six route widths and seven theme-layout widths, preference persistence, system changes, unavailable storage, early theme application, video behavior and original project links.
