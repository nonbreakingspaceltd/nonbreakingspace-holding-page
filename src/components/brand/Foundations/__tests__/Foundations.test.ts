import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedPrinciples } from '../__fixtures__/sample-data';
import Foundations from '../Foundations.astro';

describe('Foundations', () => {
  test('renders the section label and all three principles', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Foundations);

    expect(html).toContain('Foundations');
    for (const principle of expectedPrinciples) {
      expect(html).toContain(principle);
    }
  });
});
