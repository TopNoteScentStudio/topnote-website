import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

export function SectionHeader({ eyebrow, title, subtitle, align = 'left', tone = 'onDeep', width = 'expanded', style, ...rest }) {
  const fg = tone === 'onCream' ? 'var(--deep)' : 'var(--cream)';
  return (
    <header
      style={{
        display: 'grid', gap: 'var(--space-md)', textAlign: align,
        justifyItems: align === 'center' ? 'center' : 'start',
        maxWidth: align === 'center' ? 'var(--measure)' : undefined,
        marginInline: align === 'center' ? 'auto' : undefined, ...style,
      }}
      {...rest}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        style={{
          margin: 0, fontFamily: 'var(--font-display)',
          fontVariationSettings: width === 'expanded' ? '"wdth" 130' : '"wdth" 112',
          fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-section)', lineHeight: 'var(--lh-heading)',
          letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: fg,
        }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)', color: tone === 'onCream' ? 'var(--terracotta)' : 'var(--mauve)' }}>
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
