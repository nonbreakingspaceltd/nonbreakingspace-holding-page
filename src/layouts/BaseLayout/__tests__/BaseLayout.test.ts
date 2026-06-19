import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import BaseLayout from '../BaseLayout.astro';

describe('BaseLayout', () => {
  test('renders the document shell, head metadata and the slotted content', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(BaseLayout, {
      props: { title: 'Test title', path: '/test' },
      slots: { default: '<main id="index">hello</main>' },
    });

    expect(html).toContain('<html lang="en"');
    expect(html).toContain('<title>Test title</title>');
    expect(html).toContain('rel="canonical"');
    expect(html).toContain('<main id="index">hello</main>');
  });

  test('targets the skip link at the given mainId', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(BaseLayout, {
      props: { mainId: 'brand' },
      slots: { default: '<main id="brand"></main>' },
    });

    expect(html).toContain('class="skip-link" href="#brand"');
  });

  test('emits a noindex robots tag only when asked', async () => {
    const container = await AstroContainer.create();

    const indexed = await container.renderToString(BaseLayout, { slots: { default: '' } });
    expect(indexed).not.toContain('noindex');

    const hidden = await container.renderToString(BaseLayout, {
      props: { noindex: true },
      slots: { default: '' },
    });
    expect(hidden).toContain('noindex, nofollow');
  });
});
