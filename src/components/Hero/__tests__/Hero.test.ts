import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import Hero from '../Hero.astro';

describe('Hero', () => {
  test('renders the single <h1> with an accessible brand name', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Hero);

    expect(html).toMatch(/<h1[\s>]/);
    expect(html).toContain('Nonbreakingspace');
  });

  test('renders the headline and a mailto call to action', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Hero);

    expect(html).toContain('mailto:hello@nonbreakingspace.co.uk');
    expect(html).toMatch(/Software, interaction and visual design/);
  });
});
