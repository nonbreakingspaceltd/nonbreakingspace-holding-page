import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedLexicon } from '../__fixtures__/sample-data';
import Voice from '../Voice.astro';

describe('Voice', () => {
  test('renders the voice & accessibility section with every lexicon phrase', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Voice);

    expect(html).toContain('Voice');
    expect(html).toContain('Accessibility');
    for (const say of expectedLexicon) {
      expect(html).toContain(say);
    }
  });
});
