import * as React from 'react';

/**
 * Content card. On deep surfaces: 1px mauve hairline. On cream: no box, 2px amber top rule.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "onDeep" */
  tone?: 'onDeep' | 'onCream';
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Usually a ghost Button. */
  footer?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
