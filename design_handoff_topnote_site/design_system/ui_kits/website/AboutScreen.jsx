function AboutScreen() {
  return (
    <>
      <PageHeader title="About Us" subtitle="[FOUNDERS: one line]" image={PHOTOS.sprayPortrait} />
      <Section tone="cream">
        <div style={{ maxWidth: 'var(--measure)', margin: '0 auto', display: 'grid', gap: 'var(--space-md)', color: 'var(--deep)', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)' }}>
          <p style={{ margin: 0 }}>[FOUNDERS TO WRITE: who you are, why you started Top Note, your connection to fragrance. 2–4 paragraphs.]</p>
          <p style={{ margin: 0, color: 'var(--terracotta)' }}>[FOUNDERS TO WRITE: paragraph two.]</p>
        </div>
      </Section>
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-md)' }}>
          <Photo ratio="3 / 4" src={PHOTOS.firstScent} />
          <div style={{ display: 'grid', gap: 'var(--space-md)' }}><Photo ratio="4 / 3" src={PHOTOS.reachingWindow} /><Photo ratio="4 / 3" src={PHOTOS.liberty} /></div>
          <Photo ratio="3 / 4" src={PHOTOS.bottleHeldLight} />
        </div>
      </Section>
      <SiteFooter />
    </>
  );
}
Object.assign(window, { AboutScreen });
