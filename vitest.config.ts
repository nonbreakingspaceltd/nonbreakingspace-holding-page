/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

// Component unit tests run through Astro's own Vite pipeline (so `.astro`
// modules, scoped styles and aliases resolve exactly as in a build) and render
// via the experimental Astro Container API. End-to-end specs in tests/e2e/ are
// Playwright's domain and are deliberately excluded here.
export default getViteConfig({
  test: {
    include: ['src/**/__tests__/**/*.test.ts'],
  },
});
