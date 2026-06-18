export type Props = {
  /** Two-digit foliation index (decorative; hidden from assistive tech). */
  index: string;
  /** The visible text — and the section's accessible name. */
  label: string;
  /** Optional id, so a section can reference it via aria-labelledby. */
  id?: string;
  /**
   * Heading level to render as.
   * @default 'h2'
   */
  as?: 'h2' | 'h3';
};
