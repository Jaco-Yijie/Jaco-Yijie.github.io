# Jaco Wang — AI Product Portfolio

Personal portfolio for AI product internship applications.
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
