# Top Note Scent Studio — Design System

**Top Note Scent Studio** runs experiential scent discovery: curated, in-person fragrance moments at events. They partner with fragrance brands so guests can smell, explore, and buy through a guided experience — a discovery table, a QR code, an unlisted event page with products and codes, and a tracked click-through to the brand's store. The brand sits between luxury fragrance and accessible, tactile discovery.

**Tagline:** Experiential scent discovery
**Voice:** Warm, confident, sensory. Never clinical or corporate.
**Feel:** A dimly lit, beautifully curated fragrance bar — dark walls, amber lighting, warm and intimate. Not a Squarespace template: sharp corners, warm darks, gold accents, no pastel softness.

## Sources

Everything here derives from two uploaded files plus a written brand brief supplied in the kickoff message:

- `uploads/IMG_7195.jpg` → `assets/logo-topnote-dark.jpg` — the Top Note wordmark, a raster on white.
- `uploads/pallette.png` → `assets/palette-amber-dusk.png` — the "Amber Dusk" palette swatch sheet.
- The brand brief (colors, type, spacing, component and page specs) pasted into the kickoff message, plus a follow-up build brief.
- Referenced for aesthetic direction only, not read as code: `https://fonts.mojomox.com/collections/wide-extended-fonts` (wide/extended type direction), `https://ladder.io/` (oversized type on dark, full-bleed hero), `https://www.serendipiteenyc.com/` (fragrance-editorial warmth), and a Canva deck (`https://www.canva.com/design/DAGqGOgwNCE/78fYAgIinn8deKPRtv1fEQ/view`).

**There is no codebase and no Figma file.** The component inventory below is exactly what the brief specifies — nothing invented beyond the two intentional additions noted at the end.

---

## Content fundamentals

**All copy on the site is placeholder by design.** The founders write the words. Every mock in this system shows bracketed filler — `[FOUNDERS TO WRITE: …]`, `[Service Name 1]`, `[Partnership Headline]` — deliberately visible so nobody mistakes it for final copy. Never quietly invent marketing copy for this brand.

When real copy arrives it should follow these rules:

**Person.** Second person for the reader, first person plural for the studio. "Bring scent to your event." "We build the table around your range." Never "the customer" or "users".

**Casing.** Sentence case in body copy. ALL CAPS is structural, not emphatic — hero headline, section titles, nav items, button labels, eyebrows. Never all-caps a sentence.

**Length.** Short. The intro section is 2–3 sentences inside a 640px measure. A service description is one paragraph. A card is one or two lines. Whitespace does the persuading.

**Sensory, not technical.** Write about what a guest experiences — smell, explore, discover — rather than fragrance chemistry or marketing funnels. Avoid "solutions", "leverage", "seamless", "elevate". (Curation is a real service here; use the word only when you mean it.)

**Numbers.** Sections and services take two-digit indices — `01`, `02`, `03` — set as mauve eyebrows.

**Emoji: never.** Not in copy, not in UI, not on event pages.

**Punctuation.** The wordmark carries a period ("TOP NOTE."); headlines do not. Em dashes are fine; exclamation marks are not.

---

## Visual foundations

**Palette — "Amber Dusk".** Five colors, no more. `deep` #1A1512 is the dominant surface (nav, hero overlays, footer, most sections) — **dark is the default, not a toggle.** `cream` #E8DCC8 is body text on deep and the sparingly-used light section. `amber` #C89B5C is the single accent — CTAs, active nav underline, card top rules, the loud CTA band. `terracotta` #8B4A3C is secondary: dividers, washes, error strokes. `mauve` #A67C6D is deliberately understated — captions, borders, metadata, disabled — and is **never** an action color. Amber text on cream is banned (contrast). Alpha derivations are tokenized, not eyeballed.

**Type.** Two families. **Anybody** (variable, width axis) for display — set at `wdth` 130–135 for heroes and section titles so it reads wide and extended like the wordmark, `wdth` 112–120 for subheads. Bold 700 uppercase with +0.02em tracking for titles; Regular 400 mixed case for subheadings. **DM Sans** for everything else: 16–18px body at 1.6 line-height, 14px medium uppercase +0.05em for nav and buttons, 13px captions, +0.14em eyebrows.

**The wide typography is the signature.** When width and neat fit conflict, choose wider. Extended letter proportions are what make a page read as Top Note rather than as a default.

**Spacing.** A 4 → 128px scale. 96px of vertical air between desktop sections, 64px on mobile. 1200px content max, 640px prose measure, 12-column desktop / 4-column mobile grid.

**Corners: 0px. Everywhere.** Buttons, cards, images, inputs, code blocks. This is the most load-bearing rule in the system — a rounded corner reads as a different brand.

**Borders and depth.** One border: 1px solid mauve (mauve at 40% on dark). One accent rule: 2px amber, used as a card top rule and step marker. **No shadows at all** — no drop, no inner, no hover lift. Depth comes from value contrast: sections alternate deep and cream, and that shift *is* the separator. Cards have no fill of their own; the section shows through.

**Backgrounds and imagery.** Full-bleed photography with a deep overlay at 60–75% is the hero pattern, repeated once for the mid-page partnership CTA with a *different* photo. **Photography is never used raw** — the overlay creates the ambient mood and guarantees text contrast. Imagery is warm: amber and terracotta ambient light, skin and glass, shallow depth of field, slightly desaturated (`saturate(.85)`). No gradients as decoration, no patterns, no textures, no illustration. The only gradient in the system is the placeholder block standing in for photography that hasn't been shot.

**Transparency and blur.** Transparency only as flat overlays over photography and for the 15% amber hover fill. No backdrop blur, no frosted glass.

**Animation.** Restrained. Color transitions 140ms, menus and reveals 240ms, scroll-in fades 520ms. Entrances ease `cubic-bezier(.16,1,.3,1)`; state changes `cubic-bezier(.4,0,.2,1)`. Content enters by fading up 16px. The mobile menu slides down. The hero scroll indicator pulses at ~2.4s. No bounce, no spring, no parallax beyond a soft background offset.

**Hover.** Primary buttons darken 10% (#B38A4F). Outline buttons fill with amber at 15%. Ghost links, footer links and nav items shift cream → amber. **Press:** color only — nothing scales, shrinks or lifts. **Focus:** 2px amber outline at 3px offset.

**Fixed elements.** The nav is the only fixed element: 64px desktop, 56px mobile, always deep. Mobile opens a full-screen deep overlay with links stacked in Anybody Regular 28px.

**Mobile.** Hero type drops to 36–44px, section titles to 28–32px, body stays 16px minimum. Card grids stack to one column. Section padding drops to 64px.

---

## Iconography

**There is no icon set, and none was supplied.** The brief specifies none and the reference sites lean on type rather than glyphs. The system deliberately ships without one:

- Navigation, buttons and links are **text only** — no leading or trailing icons.
- The hamburger is three 1px cream rules drawn as plain `<span>` elements in `NavBar`, not an icon.
- Section and step numbering uses **two-digit numerals as eyebrows** (`01`, `02`) instead of icons.
- The scroll indicator is a thin mauve rule, not an arrow glyph.
- **Emoji and decorative unicode are never used.**

If a surface genuinely needs glyphs (footer social links are the likely first case), use **Lucide** at 1.5px stroke via CDN, 20px, `cream` → `amber` on hover — the closest match to the hairline weight already in the system. That is a substitution, not something the brand specified; flag it when introduced.

---

## Assets

| File | What it is |
|---|---|
| `assets/logo-topnote-dark.jpg` | The supplied wordmark. Raster, **white background**, dark type — usable on cream surfaces only. |
| `assets/palette-amber-dusk.png` | The original palette reference sheet. |
| `assets/photography/` | Seven stills and two clips from the founder photoshoot. |

**Photography.** `first-scent.jpg` (profile, bottle to nose) is the signature frame and carries the
homepage hero. `spray-portrait.jpg` (eyes closed, mid-spray) carries the partnerships CTA band.
`bottle-held-light.jpg`, `bottle-held-dim.jpg`, `reaching-window.jpg`, `reaching-dim.jpg` and
`liberty-bottle.jpg` fill service blocks, the About grid and event product cards.
`motion-01.mp4` / `motion-02.mp4` can replace the hero still via `<Hero video={…}>`.

The set is **high-key and backlit** — bright shoji-style window light, warm cast, hands and glass in
silhouette — not the dark-walls-and-amber-lighting look the written brief describes. It still reads as
Top Note under a deep overlay, but the overlay is doing real work: at 0.68 the frame becomes a warm
dusk, and below about 0.6 cream type starts to lose the window. Keep hero overlays at **0.62–0.72**.

⚠️ **The logo needs a real export.** The supplied raster has no transparency, is too small for retina, and cannot be placed on `deep`. Until an SVG (or 2× transparent PNG in both cream and deep) arrives, every surface uses the type-set `<Wordmark>` component — Anybody at `wdth` 130, "TOP" at weight 800, "NOTE." at weight 300. It is a stand-in, not the mark.

⚠️ **No photography yet.** Every image slot in the UI kits is a mauve/terracotta placeholder block labelled "Photoshoot image". Drop the founders' photos in and the overlay rules do the rest.

---

## Index

**Foundations**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `layout.css`, `motion.css`, `fonts.css` (Google Fonts for Anybody + DM Sans), `base.css`.
- `guidelines/` — 12 specimen cards: palette, alpha overlays, text pairings, display type, body type, type scale, spacing scale, section rhythm, corners & borders, interaction states, motion, wordmark.

**Components** (`components/<group>/`)

| Group | Components |
|---|---|
| `brand/` | `Wordmark` |
| `core/` | `Button`, `Card`, `SectionHeader`, `Eyebrow`, `Divider` |
| `navigation/` | `NavBar`, `Footer` |
| `marketing/` | `Hero`, `CTABand`, `ServiceBlock` |
| `events/` | `ProductCard`, `DiscountCode` |
| `forms/` | `Input`, `Textarea` |

Each has a `.jsx`, a `.d.ts` props contract, a `.prompt.md` usage note, and one `@dsCard` HTML per directory.

**UI kits** (`ui_kits/`)
- `website/` — the five-page marketing site, click-through: Home, Services, Brand Partnerships, About Us, Contact Us. Plus `MobileHome.html`, the mobile home page with the hamburger overlay.
- `event-page/` — the unlisted `/events/[slug]` QR destination template.

**Other**
- `SKILL.md` — Agent Skills wrapper so this system can be used from Claude Code.
- `thumbnail.html` — the project tile.

### Intentional additions

Two things not named in the brief:

- **`Wordmark`** — the brief describes "Top Note wordmark" as an asset, but the supplied file can't sit on dark surfaces. A type-set component was the only way to render the mark correctly across both tones. Retire it when the SVG arrives.
- **`Eyebrow`** — the brief specifies "small eyebrow label in mauve (DM Sans 13px uppercase)" on cards and repeats the pattern in headers, cards and steps. It was factored out rather than duplicated.

---

## Technical notes carried from the brief

- **Analytics:** GA4, with outbound clicks fired as an `outbound_click` event. Every outbound link on an event page carries `utm_source=topnote`, `utm_medium=qr`, `utm_campaign=[event_slug]`, `utm_content=[product_name]`.
- **Event pages:** one per event at `/events/[event-slug]`, excluded from sitemap and nav, with `<meta name="robots" content="noindex, nofollow">`.
- **Suggested stack:** Astro or plain static HTML on Vercel/Netlify free tier; Google Fonts via `<link>`; Formspree or Netlify Forms for contact.
