import React from 'react';

export function Divider({ tone = 'onDeep', accent = false, style, ...rest }) {
  return (
    <hr
      style={{
        border: 0, height: accent ? 2 : 1, margin: 0,
        background: accent ? 'var(--amber)' : tone === 'onCream' ? 'var(--divider-on-cream)' : 'var(--divider-on-deep)',
        ...style,
      }}
      {...rest}
    />
  );
}
