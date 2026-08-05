const { Wordmark, Button, Card, SectionHeader, Eyebrow, Divider, NavBar, Footer, Hero, CTABand, ServiceBlock, Input, Textarea } = window.TopNoteScentStudioDesignSystem_5e2582;

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'partners', label: 'Brand Partnerships' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact Us' },
];

/* Founder photoshoot. Warm, backlit, high-key — shot against shoji-style window light. */
const P = '../../assets/photography/';
const PHOTOS = {
  firstScent: P + 'first-scent.jpg',        // profile, bottle to nose — the signature frame
  sprayPortrait: P + 'spray-portrait.jpg',  // eyes closed, mid-spray
  bottleHeldLight: P + 'bottle-held-light.jpg',
  bottleHeldDim: P + 'bottle-held-dim.jpg',
  reachingWindow: P + 'reaching-window.jpg',
  reachingDim: P + 'reaching-dim.jpg',
  liberty: P + 'liberty-bottle.jpg',
  motion1: P + 'motion-01.mp4',
  motion2: P + 'motion-02.mp4',
};

function Photo({ ratio = '3 / 2', src, position = 'center', style }) {
  return (
    <div style={{ aspectRatio: ratio, backgroundImage: 'url(' + src + ')', backgroundSize: 'cover', backgroundPosition: position, filter: 'saturate(.9)', ...style }} />
  );
}

function Section({ tone = 'deep', children, style }) {
  return (
    <section style={{ background: tone === 'cream' ? 'var(--cream)' : 'var(--deep)', padding: 'var(--space-2xl) var(--space-lg)', ...style }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function PageHeader({ title, subtitle, image }) {
  return (
    <Hero height="42vh" lines={[title]} subline={subtitle} image={image} overlay={0.68} />
  );
}

function SiteFooter() {
  return (
    <Footer
      tagline="Experiential scent discovery — curated, in-person fragrance moments."
      links={NAV.slice(1)}
      contact={[{ label: 'hello@topnote.studio' }, { label: 'Instagram' }, { label: 'Book a call' }]}
      legal="© 2026 Top Note Scent Studio. All rights reserved."
    />
  );
}

Object.assign(window, { NAV, PHOTOS, Photo, Section, PageHeader, SiteFooter, Wordmark, Button, Card, SectionHeader, Eyebrow, Divider, NavBar, Footer, Hero, CTABand, ServiceBlock, Input, Textarea });
