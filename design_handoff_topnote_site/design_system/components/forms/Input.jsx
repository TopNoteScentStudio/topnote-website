import React from 'react';

export function Input({ label, hint, invalid = false, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const shell = {
    fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)',
    color: 'var(--cream)', background: 'transparent', border: '1px solid var(--mauve)',
    borderRadius: 'var(--radius)', padding: '12px 14px', width: '100%', outline: 'none',
    transition: 'var(--transition-color)',
  };
  return (
    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
      {label ? <label htmlFor={uid} style={{ fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)', color: 'var(--mauve)' }}>{label}</label> : null}
      <input
        id={uid} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ ...shell, borderColor: invalid ? 'var(--terracotta)' : focus ? 'var(--amber)' : 'var(--mauve)', ...style }}
        {...rest}
      />
      {hint ? <span style={{ fontSize: 'var(--fs-caption)', color: invalid ? 'var(--terracotta)' : 'var(--mauve)' }}>{hint}</span> : null}
    </div>
  );
}
