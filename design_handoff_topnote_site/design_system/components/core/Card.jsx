import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

export function Card({ tone = 'onDeep', eyebrow, title, children, footer, style, ...rest }) {
  const onCream = tone === 'onCream';
  return (
    <article
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-md)',
        padding: onCream ? 'var(--space-lg) 0 0' : 'var(--space-lg)',
        borderRadius: 'var(--radius)',
        border: onCream ? 'none' : 'var(--border-hairline-soft)',
        borderTop: onCream ? 'var(--border-accent)' : undefined,
        background: 'transparent',
        color: onCream ? 'var(--deep)' : 'var(--cream)',
        ...style,
      }}
      {...rest}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {title ? (
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 118', fontWeight: 'var(--fw-regular)', fontSize: 'var(--fs-subhead)', lineHeight: 'var(--lh-heading)' }}>
          {title}
        </h3>
      ) : null}
      {children ? (
        <div style={{ fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: onCream ? 'var(--deep)' : 'var(--cream)' }}>{children}</div>
      ) : null}
      {footer ? <div style={{ marginTop: 'auto', paddingTop: 'var(--space-sm)' }}>{footer}</div> : null}
    </article>
  );
}
