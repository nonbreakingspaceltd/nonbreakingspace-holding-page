import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import BrandIdea from '../BrandIdea.astro';

describe('BrandIdea', () => {
  test('renders the section label, positioning line and the name/promise split', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(BrandIdea);

    expect(html).toContain('Brand');
    expect(html).toContain('everyone');
    expect(html).toContain('The name');
    expect(html).toContain('The promise');
  });
});
