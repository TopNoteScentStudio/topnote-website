import * as React from 'react';

/** Single-line text field — square, transparent, mauve stroke, amber on focus. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Switches stroke and hint to terracotta. @default false */
  invalid?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
