import * as React from 'react';

/**
 * Featured product on an event QR landing page: image, name, copyable code, outbound CTA.
 */
export interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  brand?: string;
  name: React.ReactNode;
  image?: string;
  /** Discount code shown in a copyable block. */
  code?: string;
  /** Outbound purchase URL — must carry UTM parameters. */
  href?: string;
  /** @default "Shop now" */
  ctaLabel?: string;
  onCopy?: (code: string) => void;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
