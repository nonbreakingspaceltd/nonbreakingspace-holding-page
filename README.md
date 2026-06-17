# nonbreakingspace-holding-page

[![Build](https://github.com/nonbreakingspaceltd/nonbreakingspace-holding-page/actions/workflows/build.yml/badge.svg)](https://github.com/nonbreakingspaceltd/nonbreakingspace-holding-page/actions/workflows/build.yml)
[![CodeQL](https://github.com/nonbreakingspaceltd/nonbreakingspace-holding-page/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/nonbreakingspaceltd/nonbreakingspace-holding-page/actions/workflows/codeql-analysis.yml)

The single-page studio website for **Nonbreakingspace Ltd** — a Manchester-based
software, interaction and graphic design studio.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com),
with self-hosted variable fonts and no CMS. Design direction: _“Quiet Index”_ — a
warm-ivory editorial broadsheet where type does almost everything.

## Stack

- **Astro 5** — static output, zero client framework
- **Tailwind v4** — CSS-first config (`@theme`) via `@tailwindcss/vite`
- **Fonts** — self-hosted variable [Fraunces](https://fonts.google.com/specimen/Fraunces)
  (display) + [Inter](https://fonts.google.com/specimen/Inter) (body) via Fontsource
- A single small vanilla `<script>` powers a subtle reveal-on-scroll, fully gated
  behind `prefers-reduced-motion` and a `.js` hook (no JS ⇒ everything renders).

## Develop

```sh
pnpm install
pnpm dev        # local dev server
pnpm build      # production build → dist/
pnpm preview    # preview the production build
pnpm check      # astro + TypeScript diagnostics
```

## Where things live

```text
src/
  components/   Hero, Statement, Capabilities, Approach, Contact, Header,
                Wordmark, SectionLabel
  layouts/      BaseLayout.astro   — <head>, SEO/OG, fonts, reveal script
  pages/        index.astro, 404.astro
  styles/       global.css         — @theme tokens, type scale, motion
public/         favicons, social image, web manifest
```

## Editing the content

All copy lives directly in the section components — there is no CMS. The design
tokens (palette, fluid type scale, spacing, hairlines) are defined once in
`src/styles/global.css`. Capabilities and the Approach steps are simple arrays at
the top of their components.

## Deploy

Hosted on Vercel. Build settings are pinned in `vercel.json` (framework `astro`,
`astro build` → `dist/`) so they don't depend on the dashboard. Node is pinned to
`22.x` via `engines` in `package.json` (Astro 6 requires Node ≥ 22.12).
