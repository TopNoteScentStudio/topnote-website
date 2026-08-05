import * as React from 'react';

/** Small uppercase label above a title or on a card. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "mauve" */
  tone?: 'mauve' | 'amber';
  children?: React.ReactNode;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
