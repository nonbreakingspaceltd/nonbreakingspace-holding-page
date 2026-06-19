import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import NotFound from '../NotFound.astro';

describe('NotFound', () => {
  test('renders the 404 message, the main landmark and a link home', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(NotFound);

    expect(html).toMatch(/<main[^>]*id="index"/);
    expect(html).toContain('404');
    expect(html).toContain('Page not found');
    expect(html).toContain('href="/"');
  });
});
