import React from 'react';
import { DiscountCode } from './DiscountCode.jsx';
import { Button } from '../core/Button.jsx';

export function ProductCard({ brand, name, image, code, href, ctaLabel = 'Shop now', onCopy, style, ...rest }) {
  return (
    <article style={{ display: 'grid', gap: 'var(--space-md)', border: 'var(--border-hairline-soft)', padding: 'var(--space-md)', ...style }} {...rest}>
      <div style={{ aspectRatio: '3 / 4', background: 'var(--cream-12)', backgroundImage: image ? 'url(' + image + ')' : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ display: 'grid', gap: 4 }}>
        {brand ? <span style={{ fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)', color: 'var(--mauve)' }}>{brand}</span> : null}
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 115', fontWeight: 'var(--fw-regular)', fontSize: '1.25rem', lineHeight: 'var(--lh-heading)', color: 'var(--cream)' }}>{name}</h3>
      </div>
      {code ? <DiscountCode code={code} onCopy={onCopy} /> : null}
      <Button as="a" href={href} variant="primary" size="sm" style={{ justifyContent: 'center' }}>{ctaLabel}</Button>
    </article>
  );
}
