import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { defaultLabel, subheadingLabel } from '../__fixtures__/sample-data';
import SectionLabel from '../SectionLabel.astro';

describe('SectionLabel', () => {
  test('renders the label as its accessible name and shows the index', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(SectionLabel, { props: defaultLabel });

    expect(html).toContain(defaultLabel.label);
    expect(html).toContain(defaultLabel.index);
  });

  test('defaults to an <h2> and honours the `as` override', async () => {
    const container = await AstroContainer.create();

    const asH2 = await container.renderToString(SectionLabel, { props: defaultLabel });
    expect(asH2).toMatch(/<h2[\s>]/);

    const asH3 = await container.renderToString(SectionLabel, { props: subheadingLabel });
    expect(asH3).toMatch(/<h3[\s>]/);
    expect(asH3).toContain('id="capabilities-heading"');
  });
});
