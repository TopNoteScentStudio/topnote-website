function PartnershipsScreen({ onNavigate }) {
  const steps = [
    ['01', 'Guests smell', 'Featured scents are presented at a guided discovery table.'],
    ['02', 'Scan the code', 'A QR code on the table opens the event page.'],
    ['03', 'Review & save', 'Products, notes and discount codes, all in one place.'],
    ['04', 'Purchase', 'Tracked outbound links to your store.'],
  ];
  return (
    <>
      <PageHeader title="Brand Partnerships" subtitle="[FOUNDERS: one-line pitch]" image={PHOTOS.bottleHeldDim} />
      <Section tone="cream">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', alignItems: 'start' }}>
          <SectionHeader tone="onCream" eyebrow="Why partner" title="[Value Prop Headline]" />
          <p style={{ margin: 0, fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--deep)' }}>
            [FOUNDERS TO WRITE: 2–3 short paragraphs on why brands should partner with you.]
          </p>
        </div>
      </Section>
      <Section>
        <SectionHeader eyebrow="The flow" title="How it works" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
          {steps.map(([i, t, b]) => (
            <div key={i} style={{ borderTop: '2px solid var(--amber)', paddingTop: 'var(--space-md)', display: 'grid', gap: 'var(--space-sm)' }}>
              <Eyebrow tone="amber">{i}</Eyebrow>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 118', fontWeight: 400, fontSize: '1.375rem', color: 'var(--cream)' }}>{t}</h3>
              <p style={{ margin: 0, color: 'var(--mauve)', fontSize: 'var(--fs-body)' }}>{b}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-2xl)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)' }}>
          {['[Metric 1]', '[Metric 2]', '[Metric 3]'].map((t) => (
            <Card key={t} title={t}>[FOUNDERS TO WRITE: what data do you share with partners?]</Card>
          ))}
        </div>
      </Section>
      <CTABand title="[CTA Headline]" action={<Button variant="secondary" tone="onAmber" onClick={() => onNavigate({ id: 'contact' })}>Contact us</Button>} />
      <SiteFooter />
    </>
  );
}
Object.assign(window, { PartnershipsScreen });
