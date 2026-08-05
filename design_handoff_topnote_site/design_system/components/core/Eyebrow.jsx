import React from 'react';

export function Eyebrow({ tone = 'mauve', children, style, ...rest }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-medium)',
        textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)', lineHeight: 'var(--lh-ui)',
        color: tone === 'amber' ? 'var(--amber)' : 'var(--mauve)', ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
