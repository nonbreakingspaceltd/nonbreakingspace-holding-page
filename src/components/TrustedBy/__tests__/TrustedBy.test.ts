import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedBrands } from '../__fixtures__/sample-data';
import TrustedBy from '../TrustedBy.astro';

describe('TrustedBy', () => {
  test('renders the eyebrow and an accessible name for every brand', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(TrustedBy);

    expect(html).toContain('Trusted by');
    for (const brand of expectedBrands) {
      // `&` is HTML-escaped to `&amp;` in the rendered attribute value.
      expect(html).toContain(`aria-label="${brand.replaceAll('&', '&amp;')}"`);
    }
  });

  test('puts role="img" on the mark host, never the <li>', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(TrustedBy);

    expect(html).not.toMatch(/<li[^>]*role="img"/);
  });
});
