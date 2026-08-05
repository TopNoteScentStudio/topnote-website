import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

export function ServiceBlock({ index, title, body, image, reverse = false, tone = 'onDeep', action, style, ...rest }) {
  const onCream = tone === 'onCream';
  return (
    <div
      style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', alignItems: 'center',
        maxWidth: 'var(--content-max)', margin: '0 auto', ...style,
      }}
      {...rest}
    >
      <div style={{ order: reverse ? 2 : 1, aspectRatio: '4 / 3', background: 'var(--mauve-40)', backgroundImage: image ? 'url(' + image + ')' : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ order: reverse ? 1 : 2, display: 'grid', gap: 'var(--space-md)', color: onCream ? 'var(--deep)' : 'var(--cream)' }}>
        {index ? <Eyebrow>{index}</Eyebrow> : null}
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 122', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-subhead)', lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase' }}>{title}</h3>
        <p style={{ margin: 0, fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)' }}>{body}</p>
        {action}
      </div>
    </div>
  );
}
