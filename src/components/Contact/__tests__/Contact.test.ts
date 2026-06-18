import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import Contact from '../Contact.astro';

describe('Contact', () => {
  test('renders the studio email as a mailto link', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Contact);

    expect(html).toContain('hello@nonbreakingspace.co.uk');
    expect(html).toContain('mailto:hello@nonbreakingspace.co.uk');
  });

  test('includes the back-to-top control and a brand-guidelines link', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Contact);

    expect(html).toContain('aria-label="Back to top"');
    expect(html).toContain('href="/brand"');
  });
});
