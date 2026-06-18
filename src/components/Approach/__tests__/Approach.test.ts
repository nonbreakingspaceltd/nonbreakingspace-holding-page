import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedSteps } from '../__fixtures__/sample-data';
import Approach from '../Approach.astro';

describe('Approach', () => {
  test('renders the section label and every step verb', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Approach);

    expect(html).toContain('Approach');
    for (const step of expectedSteps) {
      expect(html).toContain(step);
    }
  });
});
