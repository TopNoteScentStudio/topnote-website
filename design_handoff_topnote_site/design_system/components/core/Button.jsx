import React from 'react';

export function Button({ variant = 'primary', size = 'md', tone = 'onDeep', as = 'button', disabled = false, children, style, ...rest }) {
  const pad = size === 'sm' ? '10px 20px' : size === 'lg' ? '20px 44px' : '16px 32px';
  const fs = size === 'sm' ? 'var(--fs-nav)' : 'var(--fs-ui)';
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)',
    fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-medium)', fontSize: fs,
    letterSpacing: 'var(--ls-nav)', textTransform: 'uppercase', lineHeight: 'var(--lh-ui)',
    borderRadius: 'var(--radius)', border: '1px solid transparent', padding: pad,
    textDecoration: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-color)', opacity: disabled ? 0.45 : 1,
  };
  const variants = {
    primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' },
    secondary: { background: 'transparent', borderColor: 'var(--action-secondary-border)', color: 'var(--action-secondary-fg)' },
    ghost: { background: 'transparent', color: 'var(--cream)', padding: '0 0 4px', borderBottom: '1px solid var(--amber)' },
  };
  /* On an amber fill, amber-on-amber is invisible — restate the accent as deep.
     On cream, amber text fails contrast, so deep is the only legal treatment. */
  const onLight = tone === 'onAmber' || tone === 'onCream';
  const toneOverrides = !onLight ? null : {
    primary: tone === 'onAmber' ? { background: 'var(--deep)', color: 'var(--cream)' } : null,
    secondary: { borderColor: 'var(--deep)', color: 'var(--deep)' },
    ghost: { color: 'var(--deep)', borderBottom: '1px solid var(--deep)' },
  }[variant];
  const hovers = {
    primary: onLight ? { background: 'var(--terracotta)' } : { background: 'var(--action-primary-bg-hover)' },
    secondary: onLight ? { background: 'rgba(26,21,18,.08)' } : { background: 'var(--action-secondary-bg-hover)' },
    ghost: onLight ? { color: 'var(--terracotta)' } : { color: 'var(--amber)' },
  };
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return (
    <Tag
      disabled={as === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...toneOverrides, ...(hover && !disabled ? hovers[variant] : null), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
