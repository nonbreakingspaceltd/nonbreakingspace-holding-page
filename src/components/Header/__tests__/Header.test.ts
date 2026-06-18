import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import Header from '../Header.astro';

describe('Header', () => {
  test('carries the #top back-to-top target on the masthead', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Header);

    expect(html).toMatch(/<header[^>]*id="top"/);
  });

  test('renders the lockup and a labelled theme toggle', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Header);

    expect(html).toContain('Nonbreakingspace');
    expect(html).toContain('data-theme-toggle');
    expect(html).toMatch(/aria-label="Switch to (dark|light) theme"/);
  });
});
