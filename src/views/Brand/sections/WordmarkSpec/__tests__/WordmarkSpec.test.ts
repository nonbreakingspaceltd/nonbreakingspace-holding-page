import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import WordmarkSpec from '../WordmarkSpec.astro';

describe('WordmarkSpec', () => {
  test('renders the wordmark spec with its key headings', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(WordmarkSpec);

    expect(html).toContain('Wordmark');
    expect(html).toContain('Clear space');
    expect(html).toContain('Misuse');
  });
});
