import React from 'react';

export function DiscountCode({ code, label = 'Code', onCopy, style, ...rest }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(code);
    setCopied(true); setTimeout(() => setCopied(false), 1600);
    if (onCopy) onCopy(code);
  };
  return (
    <button
      onClick={copy}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-md)',
        width: '100%', padding: '12px 16px', background: 'transparent', cursor: 'pointer',
        border: '1px solid var(--amber)', borderRadius: 'var(--radius)',
        fontFamily: 'var(--font-body)', transition: 'var(--transition-color)', ...style,
      }}
      {...rest}
    >
      <span style={{ fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)', color: 'var(--mauve)' }}>{label}</span>
      <span style={{ fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-bold)', letterSpacing: '0.08em', color: 'var(--amber)' }}>{copied ? 'Copied' : code}</span>
    </button>
  );
}
