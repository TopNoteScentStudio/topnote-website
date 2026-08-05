import * as React from 'react';

/** Copy-to-clipboard discount code block, amber hairline border. */
export interface DiscountCodeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  code: string;
  /** @default "Code" */
  label?: string;
  onCopy?: (code: string) => void;
}
export declare function DiscountCode(props: DiscountCodeProps): JSX.Element;
