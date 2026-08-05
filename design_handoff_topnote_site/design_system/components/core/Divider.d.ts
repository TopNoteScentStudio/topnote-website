import * as React from 'react';

/** Hairline rule between blocks. */
export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** @default "onDeep" */
  tone?: 'onDeep' | 'onCream';
  /** 2px amber instead of a mauve hairline. @default false */
  accent?: boolean;
}
export declare function Divider(props: DividerProps): JSX.Element;
