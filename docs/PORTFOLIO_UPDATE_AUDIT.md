# Portfolio PRD / Arcana audit — 2026-09-08

This audit supersedes the 2026-08-11 Stock News PRD and Arcana status/link/count claims in CONTENT_AUDIT.md and PORTFOLIO_PRD.md. Other projects retain their existing sources.

## Repository snapshots

- Portfolio: `2f73f00` before changes; React 19, React Router, shared bilingual content, centralized links and metrics. The temporary projectUpdates layer claimed completeness while linking to a condensed GitHub document.
- Stock News: `9292a5b`; inspected root Python modules, tests, configuration, README, DEPLOY, workflows and docs/PRD.md. The latter is a rewrite, not a faithful complete transcription. Its 5.x lists omit all individual acceptance criteria.
- Arcana: `e7ccaec`; inspected README, package.json, deploy/, deployment/, Dockerfile, docs/v2 deployment and performance reports, server/env.ts, local storage and the existing validation scripts.
- These are fresh clones. No existing local checkout was modified.

## Stock News source and fidelity

Source: the user's original eight-page `PRD · A股板块新闻监控系统.pdf`, V1.4, 2026-07-17, found locally.

SHA-256: `0c298fb15f70b56cf19e9b0cb54a0e0ceafaf5226c9e3e0d2a7b619762360560`

The web data is transcribed from this PDF, not docs/PRD.md. Only PDF compatibility radicals, line wraps, repeated text at page breaks and print headers/footers are normalized. Original functional IDs use ASCII hyphens for stable matching.

Retained:

- Header: title, introduction, name, version, status, date, author and review status.
- 01 background/problem and alternatives; 02 positioning/principles/north-star; 03 users and three scenarios; 04 system flow and information architecture.
- 05 all eight groups and all 26 requirement/acceptance rows: 4 + 3 + 3 + 4 + 4 + 3 + 2 + 3.
- 06 all five non-functional dimensions; 07 all six definitions/targets and the self-evaluation caveat; 08 all six versions and statuses; 09 all five risk/impact/response rows.
- F8-3's original **66** test cases, rather than the later repository's 70.
- F2-1's original “七大类” despite the six categories actually listed. No silent correction of source content.
- Original contents entry “10. 变更记录”: the eight supplied PDF pages have no chapter 10 body. The page explicitly records that absence rather than inventing changes.

Route: `/work/stock-news/prd?lang=zh` or `?lang=en`. Both use the exact same Chinese source data. English navigation labels are supported and the page explicitly states that a full English translation is not provided. The original Chinese article has `lang="zh-CN"` even on the English site.

## Arcana evidence

Public app: https://arcana-e190.onrender.com

Source: `arcana/docs/v2/32-e2-real-deployment.md`, section 6, “Public App URL”; also referenced by `docs/v2/33-e21-asset-domain-and-csp.md`. R2 roots are artwork origins, not demo URLs. Deployment examples and the HF Docker metadata do not override the documented Render app address.

Verified on 2026-09-08: homepage HTTP 200; `/health` HTTP 200 with `status=ok`, `provider=deepseek`, `readingProviderConfigured=true`. This check does not claim that a paid model reading was executed during this audit.

Local checks at e7ccaec:

| Script | Assertions | Result |
|---|---:|---|
| engine:check | 64 | Pass |
| deck:check | 338 | Pass |
| layout:check | 119 | Pass |
| artwork:check | 89 | Pass |
| reading:check | 118 | Pass, Mock provider |
| release:check | 60 | Pass after build |
| deployment:check | 54 | Pass after deployment:build |
| assets:check | 390 full + 390 thumbs | No missing or empty files |

The first deployment check failed because generated package/manifests were absent in a fresh clone. Running the documented deployment:build prerequisite resolved all failures. README's release 45 / deployment 53 counts are outdated. No unrelated source-repository code was changed.

Current MVP facts: six user-controlled stages, five complete 78-card visual decks, deck-independent meanings/randomness/reading prompt, server-only DeepSeek key, default local Mock when no key/provider is set, explicit failure for configured DeepSeek without key, localStorage sessions/journals, reading and follow-up requests sent to the same-origin server.

The old 51.6s → 1.1s V2 performance experiment remains only as explicitly historical case-study evidence. It is removed from current project-card metrics. No historical timings are claimed as current public-demo latency.

## Implementation and checks

- Remove projectUpdates.ts and both QuickRead panels. Valid Arcana facts now live in the original bilingual content/case-study data.
- Internal PRD CTA is shared by the homepage and case-study CTA array, preserves language and opens in the same tab.
- Arcana gets a primary Demo CTA and a localized MVP badge.
- PRD uses typed structured content, semantic HTML tables, isolated horizontal scrolling, mobile disclosure contents and desktop sticky contents.
- Four content regression tests lock completeness, original thresholds, version status and link destinations.
- No new runtime dependencies, telemetry, remote fonts or model API requests were added.
- Build includes route-shell generation for the new deep link; this follows the existing GitHub Pages architecture and remains client-rendered React content.

Final verification: npm install (no lockfile drift), lint, typecheck, four content tests, and build all passed. Build generated seven route shells plus 404.html. Playwright/Chrome exercised all four requested routes in zh/en at 1440, 900, 390 and 320 CSS pixels, plus three language-switch flows and the real Arcana Demo popup: 36 checks passed, zero Portfolio console errors, no viewport overflow. Desktop/mobile screenshots were visually reviewed. The known Render wake-up screen was observed and then the real Arcana homepage was confirmed; no live paid reading was invoked.

Browser QA also exposed the existing missing favicon request, now resolved with a local SVG icon. A PRD heading-focus issue and wide-screen contents-highlighting issue were corrected and revalidated. The new content tests are included in the existing Pages build workflow before build/deploy.
