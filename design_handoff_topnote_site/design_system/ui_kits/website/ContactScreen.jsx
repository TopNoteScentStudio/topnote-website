function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return (
    <>
      <PageHeader title="Contact Us" subtitle="[FOUNDERS: one line]" image={PHOTOS.reachingDim} />
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'var(--space-2xl)', alignItems: 'start' }}>
          <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
              <Eyebrow>Email</Eyebrow>
              <a href="#" style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: 'var(--fs-body-lg)' }}>[FOUNDERS: email address]</a>
            </div>
            <Divider />
            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
              <Eyebrow>Instagram</Eyebrow>
              <a href="#" style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: 'var(--fs-body-lg)' }}>[FOUNDERS: @handle]</a>
            </div>
            <Divider />
            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
              <Eyebrow>Based in</Eyebrow>
              <span style={{ color: 'var(--mauve)', fontSize: 'var(--fs-body-lg)' }}>[FOUNDERS: city]</span>
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'grid', gap: 'var(--space-md)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
              <Input label="Name" placeholder="Your name" required />
              <Input label="Email" type="email" placeholder="you@company.com" required />
            </div>
            <Textarea label="Message" rows={6} placeholder="Tell us about your event" />
            <div><Button type="submit">{sent ? 'Thank you' : 'Send message'}</Button></div>
          </form>
        </div>
      </Section>
      <SiteFooter />
    </>
  );
}
Object.assign(window, { ContactScreen });
