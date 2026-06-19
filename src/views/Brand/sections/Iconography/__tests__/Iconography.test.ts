import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedConnectives } from '../__fixtures__/sample-data';
import Iconography from '../Iconography.astro';

describe('Iconography', () => {
  test('renders the iconography section with every connective mark', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Iconography);

    expect(html).toContain('Iconography');
    for (const name of expectedConnectives) {
      expect(html).toContain(name);
    }
  });
});
