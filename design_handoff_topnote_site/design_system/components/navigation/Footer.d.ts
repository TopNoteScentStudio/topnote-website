import * as React from 'react';

export interface FooterLink { label: string; href?: string }

/**
 * Three-column footer on deep — brand, navigation, contact — with a mauve bottom bar.
 * @startingPoint section="Navigation" subtitle="Three-column site footer" viewport="700x320"
 */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  tagline?: React.ReactNode;
  links?: FooterLink[];
  contact?: FooterLink[];
  legal?: React.ReactNode;
}
export declare function Footer(props: FooterProps): JSX.Element;
