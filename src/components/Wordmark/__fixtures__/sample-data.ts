import type { WordmarkProps } from '../index';

// Decorative by default — no accessible name, static single-path mark.
export const decorative: WordmarkProps = {};

// Labelled: exposes an accessible name and renders as role="img".
export const labelled: WordmarkProps = {
  title: 'Nonbreakingspace',
};

// Animated: emits the per-glyph self-draw layers for the reveal.
export const animated: WordmarkProps = {
  animated: true,
};
