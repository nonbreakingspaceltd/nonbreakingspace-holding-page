import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedTerms } from '../__fixtures__/sample-data';
import Colophon from '../Colophon.astro';

describe('Colophon', () => {
  test('renders the colophon section listing every credit term', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Colophon);

    expect(html).toContain('Colophon');
    for (const term of expectedTerms) {
      expect(html).toContain(term);
    }
  });
});
