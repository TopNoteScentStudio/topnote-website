import * as React from 'react';

/** Alternating image | text row used down the Services page. */
export interface ServiceBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small numeral or label, e.g. "01". */
  index?: React.ReactNode;
  title: React.ReactNode;
  body?: React.ReactNode;
  image?: string;
  /** Flip to text | image. @default false */
  reverse?: boolean;
  /** @default "onDeep" */
  tone?: 'onDeep' | 'onCream';
  action?: React.ReactNode;
}
export declare function ServiceBlock(props: ServiceBlockProps): JSX.Element;
