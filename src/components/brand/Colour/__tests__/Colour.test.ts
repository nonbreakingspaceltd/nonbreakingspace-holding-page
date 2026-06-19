import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedColours } from '../__fixtures__/sample-data';
import Colour from '../Colour.astro';

describe('Colour', () => {
  test('renders the colour section with every palette swatch name', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Colour);

    expect(html).toContain('Colour');
    for (const name of expectedColours) {
      expect(html).toContain(name.replaceAll('&', '&amp;'));
    }
  });
});
