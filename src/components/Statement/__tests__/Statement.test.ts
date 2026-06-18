import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import Statement from '../Statement.astro';

describe('Statement', () => {
  test('renders the manifesto with its labelled heading', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Statement);

    expect(html).toContain('id="statement-text"');
    expect(html).toMatch(/everyone/);
    expect(html).toMatch(/not just the few/);
  });
});
