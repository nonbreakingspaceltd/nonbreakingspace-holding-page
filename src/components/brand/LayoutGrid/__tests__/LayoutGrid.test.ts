import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedTokens } from '../__fixtures__/sample-data';
import LayoutGrid from '../LayoutGrid.astro';

describe('LayoutGrid', () => {
  test('renders the layout section with every token', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(LayoutGrid);

    expect(html).toContain('Layout');
    for (const token of expectedTokens) {
      expect(html).toContain(token);
    }
  });
});
