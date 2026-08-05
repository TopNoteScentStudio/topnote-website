import * as React from 'react';

/** Multi-line message field, matching Input. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  invalid?: boolean;
  /** @default 5 */
  rows?: number;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
