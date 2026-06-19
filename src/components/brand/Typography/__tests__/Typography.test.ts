import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import { expectedDisplayClasses, expectedRoles } from '../__fixtures__/sample-data';
import Typography from '../Typography.astro';

describe('Typography', () => {
  test('renders both families, the display scale and the functional roles', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Typography);

    expect(html).toContain('Typography');
    expect(html).toContain('Fraunces');
    expect(html).toContain('Inter');

    for (const cls of expectedDisplayClasses) {
      expect(html).toContain(cls);
    }
    for (const name of expectedRoles) {
      expect(html).toContain(name);
    }
  });
});
