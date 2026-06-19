import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import Brand from '../Brand.astro';

describe('Brand view', () => {
  test('composes the full /brand spec sheet inside the base layout', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Brand);

    // Document shell + brand-specific head/landmark wiring come from BaseLayout.
    expect(html).toContain('<html lang="en"');
    expect(html).toContain('<title>Brand Guidelines');
    expect(html).toContain('class="skip-link" href="#brand"');
    expect(html).toContain('<main id="brand"');

    // The single <h1> and title come from BrandHero at the top of the spec.
    expect(html).toMatch(/<h1[\s>]/);
    expect(html).toContain('Brand Guidelines');
  });
});
