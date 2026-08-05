import * as React from 'react';

/**
 * Full-bleed atmospheric hero: photo or looping video, deep overlay, stacked uppercase headline.
 */
export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  /** One array entry per headline line. */
  lines?: React.ReactNode[];
  /** Uppercase mauve subline. */
  subline?: React.ReactNode;
  /** Background image URL. */
  image?: string;
  /** CSS object/background-position for the image, e.g. "38% center". @default "center" */
  imagePosition?: string;
  /** Slide the image sideways by N% (positive = right). Use when a portrait photo is width-locked by `cover` and background-position has no effect. @default 0 */
  imageShift?: number;
  /** Background video URL — autoplays muted and looping; takes precedence over image. */
  video?: string;
  /** Playback speed for `video`. Below 1 slows the clip down. @default 1 */
  videoRate?: number;
  /** Trim the clip to a later in-point, as a fraction of its duration (0.5 = second half only). @default 0 */
  videoStart?: number;
  /** Dissolve the loop seam over N seconds, using a second stacked copy of the clip. 0 = hard cut. @default 0 */
  videoCrossfade?: number;
  /** Deep overlay alpha, 0.6–0.75. @default 0.68 */
  overlay?: number;
  /** @default "92vh" */
  height?: string;
  /** @default "center" */
  align?: 'center' | 'bottomLeft';
  /** Thin mauve scroll rule at the bottom edge. @default false */
  scrollHint?: boolean;
  children?: React.ReactNode;
}
export declare function Hero(props: HeroProps): JSX.Element;
