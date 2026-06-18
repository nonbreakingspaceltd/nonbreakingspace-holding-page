# Nonbreakingspace Website

[![Build](https://github.com/nonbreakingspaceltd/nonbreakingspace-website/actions/workflows/build.yml/badge.svg)](https://github.com/nonbreakingspaceltd/nonbreakingspace-website/actions/workflows/build.yml)
[![CodeQL](https://github.com/nonbreakingspaceltd/nonbreakingspace-website/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/nonbreakingspaceltd/nonbreakingspace-website/actions/workflows/codeql-analysis.yml)

The single-page studio website for **Nonbreakingspace Ltd** — a Manchester-based
software, interaction and graphic design studio.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com),
with self-hosted variable fonts and no CMS. Design direction: _“Quiet Index”_ — a
warm-ivory editorial broadsheet where type does almost everything.

## Stack

- **Astro 6** — static output, zero client framework
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
pnpm lint       # Biome lint + format check (biome ci)
pnpm lint:fix   # apply safe Biome fixes + format
pnpm format     # format only
pnpm test:unit  # Vitest component tests (Astro Container API)
pnpm test       # Playwright end-to-end tests
```

Linting and formatting are handled by a single tool, **[Biome](https://biomejs.dev)**
(`biome.json`) — there is no Prettier or ESLint. The config carries the house
style: single quotes, 2-space indent, 100-column width. Tool configs are
TypeScript where the tool allows it (`astro.config.ts`, `playwright.config.ts`);
`biome.json` is JSON-only by necessity.

## Where things live

```text
src/
  components/   One folder per component (Hero, Statement, Capabilities,
                Approach, TrustedBy, Contact, Header, Wordmark, SectionLabel):
                  Name/
                    Name.astro      — markup + scoped <style>
                    index.ts        — barrel (re-exports the component + types)
                    types.ts        — Props (components that take props)
                    __fixtures__/   — sample data for tests
                    __tests__/      — Vitest + Astro Container unit tests
  layouts/      BaseLayout.astro   — <head>, SEO/OG, fonts, reveal script
  pages/        index.astro, brand.astro, 404.astro
  styles/       global.css         — @theme tokens, type scale, motion
public/         favicons, social image, web manifest
tests/e2e/      Playwright specs
```

Components are imported via their folder barrel — `import Hero from '../components/Hero'`.

## Editing the content

All copy lives directly in the section components — there is no CMS. The design
tokens (palette, fluid type scale, spacing, hairlines) are defined once in
`src/styles/global.css`. Capabilities and the Approach steps are simple arrays at
the top of their components.

## CI & releases

GitHub Actions (`.github/workflows/`):

- **Build** — type-check, unit tests + production build on push/PR to `main`.
- **Code** — Biome CI on pull requests.
- **E2E** — Playwright (chromium) on pull requests, uploading the HTML report.
- **CodeQL** — security analysis.
- **Release** — [semantic-release](https://semantic-release.gitbook.io) on push
  to `main`, cutting GitHub releases and tags from the commit history.

Versioning is therefore driven by
**[Conventional Commits](https://www.conventionalcommits.org)** (`feat:`, `fix:`,
`chore:` …); the `package.json` `version` is a `0.0.0` placeholder. Dependencies
and actions are kept current by Dependabot.

## Deploy

Hosted on Vercel. Build settings are pinned in `vercel.json` (framework `astro`,
`astro build` → `dist/`) so they don't depend on the dashboard. Node is pinned to
`24.x` via `engines` in `package.json` and `.nvmrc` (Astro 6 requires Node ≥ 22.12).
