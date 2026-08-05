import * as React from 'react';

export interface NavItem { id: string; label: string; href?: string }

/**
 * Fixed top bar on deep: wordmark left, MENU dropdown right (or inline links).
 */
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  /** id of the current page. */
  active?: string;
  /** "dropdown" is the brand default; "links" lays the items out inline. @default "dropdown" */
  mode?: 'dropdown' | 'links';
  /** @default true */
  sticky?: boolean;
  onNavigate?: (item: NavItem) => void;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
