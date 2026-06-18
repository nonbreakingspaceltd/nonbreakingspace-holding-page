import type { SectionLabelProps } from '../index';

// Representative props for rendering SectionLabel in tests and previews.
export const defaultLabel: SectionLabelProps = {
  index: '01',
  label: 'Index',
};

export const subheadingLabel: SectionLabelProps = {
  index: '02',
  label: 'Capabilities',
  id: 'capabilities-heading',
  as: 'h3',
};
