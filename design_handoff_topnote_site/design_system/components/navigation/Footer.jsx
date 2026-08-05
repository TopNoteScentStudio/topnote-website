import React from 'react';
import { Wordmark } from '../brand/Wordmark.jsx';
import { Eyebrow } from '../core/Eyebrow.jsx';

const A = { color: 'var(--cream)', textDecoration: 'none', fontSize: 'var(--fs-body)', transition: 'var(--transition-color)' };

export function Footer({ tagline, links = [], contact = [], legal, style, ...rest }) {
  const [hover, setHover] = React.useState(null);
  const link = (l, key) => (
    <a key={key} href={l.href || '#'} onMouseEnter={() => setHover(key)} onMouseLeave={() => setHover(null)}
      style={{ ...A, color: hover === key ? 'var(--amber)' : 'var(--cream)' }}>{l.label}</a>
  );
  return (
    <footer style={{ background: 'var(--deep)', color: 'var(--cream)', padding: 'var(--space-xl) var(--space-lg) var(--space-lg)', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 'var(--space-xl)' }}>
        <div style={{ display: 'grid', gap: 'var(--space-md)', alignContent: 'start' }}>
          <Wordmark size={22} />
          {tagline ? <p style={{ margin: 0, color: 'var(--cream-60)', maxWidth: '30ch', fontSize: 'var(--fs-body)' }}>{tagline}</p> : null}
        </div>
        <div style={{ display: 'grid', gap: 'var(--space-md)', alignContent: 'start' }}>
          <Eyebrow>Explore</Eyebrow>
          <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>{links.map((l, i) => link(l, 'n' + i))}</div>
        </div>
        <div style={{ display: 'grid', gap: 'var(--space-md)', alignContent: 'start' }}>
          <Eyebrow>Contact</Eyebrow>
          <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>{contact.map((l, i) => link(l, 'c' + i))}</div>
        </div>
      </div>
      <div style={{ maxWidth: 'var(--content-max)', margin: 'var(--space-xl) auto 0', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--mauve-40)' }}>
        <p style={{ margin: 0, color: 'var(--mauve)', fontSize: 'var(--fs-caption)' }}>{legal}</p>
      </div>
    </footer>
  );
}
