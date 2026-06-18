import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedCapabilities } from '../__fixtures__/sample-data';
import Capabilities from '../Capabilities.astro';

describe('Capabilities', () => {
  test('renders the section label and every capability', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Capabilities);

    expect(html).toContain('Capabilities');
    for (const capability of expectedCapabilities) {
      // `&` is HTML-escaped to `&amp;` in the rendered output.
      expect(html).toContain(capability.replaceAll('&', '&amp;'));
    }
  });
});
