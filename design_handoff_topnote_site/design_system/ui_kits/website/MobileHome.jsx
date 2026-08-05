function MobileHome() {
  const [open, setOpen] = React.useState(false);
  const S = { padding: 'var(--space-xl) var(--space-md)' };
  const bar = { display: 'block', width: 22, height: 1, background: 'var(--cream)', margin: '5px 0' };
  return (
    <div style={{ width: 390, minHeight: 844, background: 'var(--deep)', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
      <nav style={{ position: 'sticky', top: 0, zIndex: 40, height: 56, background: 'var(--deep)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 var(--space-md)' }}>
        <Wordmark size={17} />
        <button aria-label="Menu" onClick={() => setOpen(!open)} style={{ background: 'none', border: 0, padding: 6, cursor: 'pointer' }}>
          <span style={bar} /><span style={bar} /><span style={bar} />
        </button>
      </nav>

      {open ? (
        <div style={{ position: 'absolute', inset: '56px 0 0', background: 'var(--deep)', zIndex: 39, display: 'grid', alignContent: 'center', justifyItems: 'center', gap: 'var(--space-lg)' }}>
          {NAV.map((n, i) => (
            <a key={n.id} href="#" onClick={(e) => { e.preventDefault(); setOpen(false); }}
              style={{ fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 120', fontWeight: 400, fontSize: 28, textDecoration: 'none', color: i === 0 ? 'var(--amber)' : 'var(--cream)' }}>
              {n.label}
            </a>
          ))}
        </div>
      ) : null}

      <section style={{ position: 'relative', height: 640, display: 'grid', placeItems: 'center', padding: 'var(--space-lg)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(' + PHOTOS.sprayPortrait + ')', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'saturate(.9)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,21,18,.68)' }} />
        <div style={{ position: 'relative', textAlign: 'center', display: 'grid', gap: 'var(--space-lg)', justifyItems: 'center' }}>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 135', fontWeight: 700, fontSize: 42, lineHeight: 0.95, letterSpacing: '.02em', textTransform: 'uppercase', color: 'var(--cream)' }}>
            <span style={{ display: 'block' }}>Top Note</span><span style={{ display: 'block' }}>Scent Studio</span>
          </h1>
          <p style={{ margin: 0, fontSize: 14, letterSpacing: 'var(--ls-subline)', textTransform: 'uppercase', color: 'var(--mauve)' }}>Experiential scent discovery</p>
        </div>
        <div style={{ position: 'absolute', bottom: 28, width: 1, height: 40, background: 'var(--mauve)' }} />
      </section>

      <section style={{ ...S, background: 'var(--cream)' }}>
        <p style={{ margin: 0, textAlign: 'center', fontSize: 17, lineHeight: 1.6, color: 'var(--deep)' }}>
          [FOUNDERS TO WRITE: 2–3 sentences about Top Note's mission.]
        </p>
      </section>

      <section style={S}>
        <SectionHeader eyebrow="What we do" title="Services" />
        <div style={{ display: 'grid', gap: 'var(--space-lg)', marginTop: 'var(--space-lg)' }}>
          {['[Service Name 1]', '[Service Name 2]', '[Service Name 3]'].map((t, i) => (
            <Card key={t} eyebrow={'0' + (i + 1)} title={t} footer={<Button variant="ghost">Learn more</Button>}>
              [Service description — 1–2 sentences.]
            </Card>
          ))}
        </div>
      </section>

      <section style={{ position: 'relative', ...S, textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(' + PHOTOS.sprayPortrait + ')', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,21,18,.72)' }} />
        <div style={{ position: 'relative', display: 'grid', gap: 'var(--space-lg)', justifyItems: 'center' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 130', fontWeight: 700, fontSize: 30, lineHeight: 1.1, letterSpacing: '.02em', textTransform: 'uppercase', color: 'var(--cream)' }}>[Partnership Headline]</h2>
          <p style={{ margin: 0, color: 'var(--cream)', fontSize: 16, lineHeight: 1.6 }}>[One sentence of filler copy.]</p>
          <Button>Brand partnerships</Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<MobileHome />);
