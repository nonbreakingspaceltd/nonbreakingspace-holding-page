import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { animated, decorative, labelled } from '../__fixtures__/sample-data';
import Wordmark from '../Wordmark.astro';

describe('Wordmark', () => {
  test('is decorative by default (presentation, hidden from assistive tech)', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Wordmark, { props: decorative });

    expect(html).toContain('role="presentation"');
    expect(html).toContain('aria-hidden="true"');
    expect(html).not.toContain('<title>');
  });

  test('exposes an accessible name when titled', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Wordmark, { props: labelled });

    expect(html).toContain('role="img"');
    expect(html).toContain(`aria-label="${labelled.title}"`);
    expect(html).toContain(`<title>${labelled.title}</title>`);
  });

  test('emits the per-glyph self-draw layers only when animated', async () => {
    const container = await AstroContainer.create();

    const still = await container.renderToString(Wordmark, { props: decorative });
    expect(still).not.toContain('nbsp-ink');

    const moving = await container.renderToString(Wordmark, { props: animated });
    expect(moving).toContain('nbsp-ink');
  });
});
