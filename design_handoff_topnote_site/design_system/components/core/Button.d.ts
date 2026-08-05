import * as React from 'react';

/**
 * Top Note button. Square corners, uppercase DM Sans label.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Surface the button sits on. On amber or cream the accent restates as `deep`, since amber-on-amber and amber-on-cream both fail. @default "onDeep" */
  tone?: 'onDeep' | 'onAmber' | 'onCream';
  /** Render as an anchor for links. @default "button" */
  as?: 'button' | 'a';
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
