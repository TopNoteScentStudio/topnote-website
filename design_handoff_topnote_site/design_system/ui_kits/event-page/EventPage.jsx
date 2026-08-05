const { Wordmark, Button, ProductCard, DiscountCode, Eyebrow, Divider } = window.TopNoteScentStudioDesignSystem_5e2582;

const P = '../../assets/photography/';
const PRODUCTS = [
  { brand: '[Partner brand]', name: '[Product Name 1]', code: 'TOPNOTE15', image: P + 'liberty-bottle.jpg' },
  { brand: '[Partner brand]', name: '[Product Name 2]', code: 'TOPNOTE15', image: P + 'bottle-held-light.jpg' },
  { brand: '[Partner brand]', name: '[Product Name 3]', code: 'SETOF5', image: P + 'reaching-window.jpg' },
];
const utm = (p) => '#?utm_source=topnote&utm_medium=qr&utm_campaign=summer_launch_2026&utm_content=' + p;

function EventPage() {
  const [copied, setCopied] = React.useState(null);
  return (
    <div style={{ minHeight: '100vh', background: 'var(--deep)' }}>
      <header style={{ padding: 'var(--space-lg)', display: 'grid', justifyItems: 'center', gap: 'var(--space-lg)' }}>
        <Wordmark size={20} />
        <Divider style={{ width: 40 }} accent />
        <div style={{ display: 'grid', gap: 'var(--space-sm)', justifyItems: 'center', textAlign: 'center' }}>
          <Eyebrow>Tonight at [event name]</Eyebrow>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 130', fontWeight: 700, fontSize: 'clamp(2rem,7vw,3rem)', lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--cream)' }}>
            [Partner brand]
          </h1>
          <p style={{ margin: 0, maxWidth: '38ch', color: 'var(--mauve)', fontSize: 'var(--fs-body)' }}>
            The scents you smelled tonight, with your event discount.
          </p>
        </div>
      </header>
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 var(--space-lg) var(--space-2xl)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)' }}>
        {PRODUCTS.map((p) => (
          <ProductCard key={p.name} {...p} href={utm(p.name.toLowerCase().replace(/ /g, '_'))} onCopy={() => setCopied(p.name)} />
        ))}
      </main>
      <footer style={{ borderTop: '1px solid var(--mauve-40)', padding: 'var(--space-lg)', display: 'grid', justifyItems: 'center', gap: 'var(--space-sm)' }}>
        <a href="#" style={{ color: 'var(--mauve)', fontSize: 'var(--fs-caption)', textDecoration: 'none', display: 'flex', gap: 6, alignItems: 'center' }}>
          Powered by <Wordmark size={12} tone="amber" as="span" />
        </a>
        {copied ? <span style={{ color: 'var(--amber)', fontSize: 'var(--fs-caption)' }}>Code for {copied} copied</span> : null}
      </footer>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<EventPage />);
