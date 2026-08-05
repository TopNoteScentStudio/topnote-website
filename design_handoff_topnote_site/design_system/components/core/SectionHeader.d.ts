import * as React from 'react';

/** Eyebrow + uppercase Anybody title + optional subtitle. */
export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  /** Which surface it sits on. @default "onDeep" */
  tone?: 'onDeep' | 'onCream';
  /** Display width axis. @default "expanded" */
  width?: 'expanded' | 'semi';
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
