import * as React from 'react';

/**
 * The Top Note wordmark, set in type.
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLElement> {
  /** Cap height driver, in px. @default 28 */
  size?: number;
  /** Which surface it sits on. @default "cream" */
  tone?: 'cream' | 'deep' | 'amber';
  /** Element to render. @default "div" */
  as?: keyof JSX.IntrinsicElements;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
