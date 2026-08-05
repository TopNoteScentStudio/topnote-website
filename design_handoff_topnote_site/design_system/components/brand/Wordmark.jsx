import React from 'react';

/* Type-set stand-in for the Top Note wordmark. The supplied logo file
   (assets/logo-topnote-dark.jpg) is a low-res raster with a white background —
   replace this with the SVG export when the founders supply it. */
export function Wordmark({ size = 28, tone = 'cream', as = 'div', style, ...rest }) {
  const color = tone === 'deep' ? 'var(--deep)' : tone === 'amber' ? 'var(--amber)' : 'var(--cream)';
  const Tag = as;
  return (
    <Tag
      style={{
        fontFamily: 'var(--font-display)',
        fontVariationSettings: '"wdth" 130',
        fontSize: size,
        lineHeight: 1,
        color,
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: '0.16em',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontWeight: 800, letterSpacing: '-0.01em' }}>TOP</span>
      <span style={{ fontWeight: 300, letterSpacing: '0.04em' }}>NOTE.</span>
    </Tag>
  );
}
