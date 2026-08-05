function HomeScreen({ onNavigate }) {
  return (
    <>
      <Hero lines={['Top Note', 'Scent Studio']} subline="Experiential scent discovery" image={PHOTOS.reachingDim} imageShift={6} overlay={0.6} height="86vh" scrollHint />
      <Section tone="cream">
        <p style={{ maxWidth: 'var(--measure)', margin: '0 auto', textAlign: 'center', fontSize: 'var(--fs-lede)', lineHeight: 'var(--lh-body)', color: 'var(--deep)' }}>
          [FOUNDERS TO WRITE: 2–3 sentences about what Top Note does. Warm, inviting tone.]
        </p>
      </Section>
      <Section>
        <SectionHeader eyebrow="[Eyebrow]" title="Services" subtitle="[FOUNDERS TO WRITE: one line on the offering.]" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
          {['[Service Name 1]', '[Service Name 2]', '[Service Name 3]'].map((t, i) => (
            <Card key={t} eyebrow={'0' + (i + 1)} title={t} footer={<Button variant="ghost" as="a" href="#" onClick={(e) => { e.preventDefault(); onNavigate({ id: 'services' }); }}>Learn more</Button>}>
              [FOUNDERS TO WRITE: 1–2 sentence description.]
            </Card>
          ))}
        </div>
      </Section>
      <CTABand
        tone="image"
        image={PHOTOS.sprayPortrait}
        title="[Partnership Headline]"
        body="[FOUNDERS TO WRITE: one sentence pitch for brand partnerships.]"
        action={<Button onClick={() => onNavigate({ id: 'partners' })}>Brand partnerships</Button>}
      />
      <SiteFooter />
    </>
  );
}
Object.assign(window, { HomeScreen });
