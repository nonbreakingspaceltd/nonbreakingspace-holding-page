export type Props = {
  /** Extra class(es) merged onto the root <svg>. */
  class?: string;
  /**
   * Accessible name. When set, the mark renders as a labelled `role="img"`
   * graphic; when omitted it is decorative (`presentation`, aria-hidden).
   */
  title?: string;
  /**
   * Emit the per-glyph self-draw layers so the mark can animate itself when
   * wrapped in `.reveal-draw`. Off by default — most placements are static.
   * @default false
   */
  animated?: boolean;
};
