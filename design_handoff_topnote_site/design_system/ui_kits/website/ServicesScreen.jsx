function ServicesScreen({ onNavigate }) {
  const services = [
    { i: '01', t: '[Service Name 1]', img: PHOTOS.bottleHeldLight, b: '[FOUNDERS TO WRITE: one paragraph on what an activation includes — the table, the guided walkthrough, the staff.]' },
    { i: '02', t: '[Service Name 2]', img: PHOTOS.reachingWindow, b: '[FOUNDERS TO WRITE: one paragraph on how you select and sequence the fragrances for a room.]' },
    { i: '03', t: '[Service Name 3]', img: PHOTOS.liberty, b: '[FOUNDERS TO WRITE: one paragraph on partner-led events and product launches.]' },
  ];
  return (
    <>
      <PageHeader title="Services" subtitle="[FOUNDERS: one-line description]" image={PHOTOS.reachingDim} />
      <Section>
        <div style={{ display: 'grid', gap: 'var(--space-2xl)' }}>
          {services.map((s, n) => (
            <ServiceBlock key={s.i} index={s.i} title={s.t} body={s.b} image={s.img} reverse={n % 2 === 1} />
          ))}
        </div>
      </Section>
      <CTABand
        title="Bring scent to your next event"
        body="[FOUNDERS TO WRITE: CTA line.]"
        action={<Button variant="secondary" tone="onAmber" onClick={() => onNavigate({ id: 'contact' })}>Get in touch</Button>}
      />
      <SiteFooter />
    </>
  );
}
Object.assign(window, { ServicesScreen });
