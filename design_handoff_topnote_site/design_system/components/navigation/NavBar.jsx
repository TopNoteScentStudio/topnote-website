import React from 'react';
import { Wordmark } from '../brand/Wordmark.jsx';

const LINK = {
  fontFamily: 'var(--font-body)', fontSize: 'var(--fs-nav)', fontWeight: 'var(--fw-medium)',
  textTransform: 'uppercase', letterSpacing: 'var(--ls-nav)', textDecoration: 'none',
  color: 'var(--cream)', paddingBottom: 6, borderBottom: '2px solid transparent',
  transition: 'var(--transition-color)', lineHeight: 'var(--lh-ui)',
};

export function NavBar({ items = [], active, mode = 'dropdown', sticky = true, onNavigate, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(null);
  const go = (e, item) => { if (onNavigate) { e.preventDefault(); onNavigate(item); } setOpen(false); };
  const bar = { display: 'block', width: 24, height: 1, background: 'var(--cream)', transition: 'transform var(--dur-base) var(--ease-standard)' };
  return (
    <>
      <nav
        style={{
          position: sticky ? 'sticky' : 'relative', top: 0, zIndex: 40,
          height: 'var(--nav-h)', background: 'var(--deep)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 var(--space-lg)', ...style,
        }}
        {...rest}
      >
        <a href="#" onClick={(e) => go(e, items[0])} style={{ textDecoration: 'none' }}>
          <Wordmark size={20} />
        </a>

        {mode === 'links' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
            {items.map((it) => {
              const on = it.id === active;
              return (
                <a
                  key={it.id} href={it.href || '#'} onClick={(e) => go(e, it)}
                  onMouseEnter={() => setHover(it.id)} onMouseLeave={() => setHover(null)}
                  style={{ ...LINK, color: on || hover === it.id ? 'var(--amber)' : 'var(--cream)', borderBottomColor: on ? 'var(--amber)' : 'transparent' }}
                >
                  {it.label}
                </a>
              );
            })}
          </div>
        ) : (
          <button
            aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}
            style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', background: 'none', border: 0, cursor: 'pointer', padding: 0, color: 'var(--cream)' }}
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-nav)', fontWeight: 'var(--fw-medium)', textTransform: 'uppercase', letterSpacing: 'var(--ls-nav)', color: open ? 'var(--amber)' : 'var(--cream)', transition: 'var(--transition-color)' }}>
              {open ? 'Close' : 'Menu'}
            </span>
            <span style={{ display: 'grid', gap: 5 }}>
              <span style={{ ...bar, transform: open ? 'translateY(3px) rotate(6deg)' : 'none' }} />
              <span style={{ ...bar, transform: open ? 'translateY(-3px) rotate(-6deg)' : 'none' }} />
            </span>
          </button>
        )}
      </nav>

      {mode === 'dropdown' && open ? (
        <div
          style={{
            position: sticky ? 'fixed' : 'absolute', top: 'var(--nav-h)', right: 0, zIndex: 39,
            minWidth: 320, background: 'var(--deep)', borderLeft: '1px solid var(--mauve-40)',
            borderBottom: '1px solid var(--mauve-40)', padding: 'var(--space-lg)',
            display: 'grid', gap: 'var(--space-md)', animation: 'none',
          }}
        >
          {items.map((it) => (
            <a
              key={it.id} href={it.href || '#'} onClick={(e) => go(e, it)}
              onMouseEnter={() => setHover(it.id)} onMouseLeave={() => setHover(null)}
              style={{
                fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 122',
                fontWeight: 'var(--fw-regular)', fontSize: '1.5rem', textDecoration: 'none',
                letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase',
                color: it.id === active || hover === it.id ? 'var(--amber)' : 'var(--cream)',
                transition: 'var(--transition-color)',
              }}
            >
              {it.label}
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
}
