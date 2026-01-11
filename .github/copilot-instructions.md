# Copilot / AI agent instructions for H2E Framework

Purpose: give quick, actionable guidance so an AI coding agent can be productive immediately.

- **Project type:** Astro (static site) with Tailwind; dev commands in `package.json`.
- **Start (local):** `npm install` then `npm run dev` (serves at localhost:4321).

Architecture overview
- Pages are standard Astro routes under `src/pages/` (e.g. `src/pages/index.astro`, `src/pages/terminal.astro`).
- Global styles are in `src/styles/global.css`; static assets live in `public/` (images/, sounds/).
- Build output: `npm run build` → `dist/`.
- Vite/Tailwind integration is declared in `astro.config.mjs` via `@tailwindcss/vite`.

Project-specific conventions & patterns
- Keep top-level page logic in `src/pages/*.astro`. Small UI pieces can be extracted to `src/components/` if added.
- The `terminal.astro` page contains large inline styles and custom UI (boot sequence, sound controls, exit modal). When modifying behavior, search for the comments `// BOOT SEQUENCE` and `// Session-based boot skip`.
- Import paths are relative inside `.astro` frontmatter (example: `import '../styles/global.css'` in `src/pages/index.astro`).
- Assets referenced from pages should be placed under `public/` and referenced by root paths (e.g. `/images/...`).

Integration points & important files to inspect
- `package.json` — dev/build scripts and dependencies (astro, tailwind). See this first for commands.
- `astro.config.mjs` — Vite plugin setup (Tailwind). Modify this when changing build tooling.
- `tsconfig.json` — extends `astro/tsconfigs/strict`; respects Astro TS types.
- `src/pages/terminal.astro` — main interactive surface; large, monolithic page with UX state and animations.
- `README.md` — starter docs; update when introducing new developer workflows.

Quick examples (use these patterns)
- Add a new route: create `src/pages/my-route.astro` — Astro exposes it at `/my-route`.
- Use global styles: `--- import '../styles/global.css'; ---` in frontmatter.
- Reference public assets: `<img src="/images/characters/hero.png" alt="hero">`.

Notes for code edits
- Prefer minimal, focused edits. The `terminal.astro` file is stateful and sensitive — test in `npm run dev` after any change.
- No CI tests or linters configured — run site locally to validate visual and functional changes.
- If you add new dependencies, update `package.json` and run `npm install` locally before committing.

When in doubt, ask the maintainer to confirm UX changes to `terminal.astro` (boot flow, sound, exit modal). After this change, run `npm run dev` and visually verify.

If you want me to expand this into contributor guidelines or add automated checks, say so and I will draft them.
