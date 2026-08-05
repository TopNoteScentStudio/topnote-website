import * as React from 'react';

/**
 * Full-width call-to-action band — amber fill, or a photo with a deep overlay.
 */
export interface CTABandProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "amber" */
  tone?: 'amber' | 'image';
  title: React.ReactNode;
  body?: React.ReactNode;
  /** Background photo, used when tone="image". */
  image?: string;
  /** A Button. */
  action?: React.ReactNode;
  /** Rendered below `action` — the slot to use when composing in markup. */
  children?: React.ReactNode;
}
export declare function CTABand(props: CTABandProps): JSX.Element;
