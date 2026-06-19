import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedMotion } from '../__fixtures__/sample-data';
import Motion from '../Motion.astro';

describe('Motion', () => {
  test('renders the motion section with every token name', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Motion);

    expect(html).toContain('Motion');
    for (const name of expectedMotion) {
      expect(html).toContain(name);
    }
  });
});
