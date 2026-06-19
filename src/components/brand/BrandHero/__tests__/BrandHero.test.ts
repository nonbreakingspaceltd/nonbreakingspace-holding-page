import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import BrandHero from '../BrandHero.astro';

describe('BrandHero', () => {
  test('renders the single page <h1> and the lede', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(BrandHero);

    expect(html).toMatch(/<h1[\s>]/);
    expect(html).toContain('One system');
    expect(html).toContain('Brand Guidelines');
  });
});
