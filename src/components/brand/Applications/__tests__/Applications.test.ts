import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import Applications from '../Applications.astro';

describe('Applications', () => {
  test('renders the section label and the application stages', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Applications);

    expect(html).toContain('Applications');
    expect(html).toContain('App icon');
    expect(html).toContain('Masthead lockup');
    expect(html).toContain('Share card');
  });
});
