import React from 'react';

export function CTABand({ tone = 'amber', title, body, image, action, children, style, ...rest }) {
  const onAmber = tone === 'amber';
  return (
    <section
      style={{
        position: 'relative', background: onAmber ? 'var(--amber)' : 'var(--deep)',
        padding: 'var(--space-2xl) var(--space-lg)', overflow: 'hidden', ...style,
      }}
      {...rest}
    >
      {!onAmber && image ? (
        <>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(' + image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'var(--deep-75)' }} />
        </>
      ) : null}
      <div style={{ position: 'relative', maxWidth: 'var(--measure)', margin: '0 auto', textAlign: 'center', display: 'grid', gap: 'var(--space-lg)', justifyItems: 'center' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 130', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-section)', lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: onAmber ? 'var(--deep)' : 'var(--cream)' }}>{title}</h2>
        {body ? <p style={{ margin: 0, fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)', color: onAmber ? 'var(--deep)' : 'var(--cream)' }}>{body}</p> : null}
        {action}
        {children}
      </div>
    </section>
  );
}
