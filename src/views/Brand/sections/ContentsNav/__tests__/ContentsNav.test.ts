import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedSections } from '../__fixtures__/sample-data';
import ContentsNav from '../ContentsNav.astro';

describe('ContentsNav', () => {
  test('renders a labelled nav linking to every section', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ContentsNav);

    expect(html).toContain('aria-label="Section index"');
    for (const label of expectedSections) {
      expect(html).toContain(label.replaceAll('&', '&amp;'));
    }
  });
});
