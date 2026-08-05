# Handoff: Top Note Scent Studio — Marketing page + Brand Partnerships page

## Overview

**Top Note Scent Studio** runs experiential scent discovery: curated, in-person fragrance moments at
events, in partnership with fragrance brands. Tagline: *Experiential scent discovery*.

This bundle contains two pages:

1. **Marketing page** (`MarketingPage.dc.html`) — the public homepage. Nav, full-bleed video hero,
   cream intro, three service cards, an amber CTA band showing partner logos, footer.
2. **Brand Partnerships page** (`BrandPartnerships.dc.html`) — the **unlisted QR destination**.
   The guest flow it serves: a guest smells featured scents at a discovery table → scans a QR code →
   reviews all partner discount codes and products → clicks through to the brand's or retail
   partner's own store to complete the purchase.

⚠️ **The partnerships page is not part of the public site.** It must be `noindex, nofollow`,
excluded from the sitemap, and **not linked from the marketing page's nav**. In this bundle the
marketing page's "Brand Partnerships" nav item is intentionally inert.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing intended look
and behavior, not production code to copy directly. The task is to **recreate these designs in the
target codebase's existing environment** (React, Vue, Astro, etc.) using its established patterns and
libraries. If no environment exists yet, the brand brief suggests **Astro or plain static HTML on
Vercel/Netlify**, Google Fonts via `<link>`, Formspree or Netlify Forms for contact.

The `.dc.html` files use a prototyping runtime (`support.js`, `<x-import>`, `<sc-for>`, `<sc-if>`).
**Ignore that runtime.** Port the markup, styles, and logic. `<sc-for list as>` is a `.map()`;
`<sc-if value>` is a conditional; `<x-import component-from-global-scope="…NavBar">` is the design
system's `NavBar` component (source in `design_system/components/`).

## Fidelity

**High-fidelity.** Colors, typography, spacing, and interactions are final and derive from the bound
Top Note design system (bundled under `design_system/`). Recreate accurately.

All **copy is intentional placeholder**. Bracketed strings — `[FOUNDERS TO WRITE: …]`,
`[Partner Brand 01]`, `[Product Name 1]`, `[Partnership Headline]` — must remain visible as
placeholders until the founders supply real words. **Never invent marketing copy for this brand.**
Real copy, when it arrives, follows the voice rules in `design_system/readme.md`.

---

## Screens / Views

### 1. Marketing page — route `/`

**Purpose:** introduce the studio, list services, invite brand partnerships.

**Layout:** single column, sections stacked full-width on `#1A1512`. Content max-width 1200px, prose
measure 640px. Section padding 96px vertical / 32px horizontal desktop, 64px vertical mobile.

**Components, top to bottom:**

1. **NavBar** — sticky, 64px desktop / 56px mobile, background `#1A1512`. Wordmark left, links right.
   Items: Home *(active)*, Services, Brand Partnerships, About Us, Contact Us. Links DM Sans 14px
   medium uppercase, letter-spacing .05em, `#E8DCC8`; active item gets a 2px amber underline; hover
   cream → amber over 140ms. Mobile: hamburger = three 1px cream rules, opens a full-screen deep
   overlay, links in Anybody Regular 28px, slides down 240ms.
2. **Hero** — full-bleed, `height: 78vh`, `overflow: hidden`.
   - **Media:** `assets/photography/motion-03.mp4`, `autoPlay muted loop playsInline`,
     `object-fit: cover`, `object-position: center 64%`, `filter: saturate(.85)`,
     `playbackRate = 0.45`, and **trimmed to start at 40% of duration** — seek to `duration * 0.4`
     on `loadedmetadata` and snap back to that point whenever the native loop restarts at 0. No
     `image-shift`/upscale on video: the clips are low-res and any extra scale softens them.
   - **Fallback is required.** MP4 autoplay stalls in some embedded browsers. Ship a poster/still
     layer behind the video: `assets/photography/reaching-dim.jpg`, `background-size: cover`,
     `filter: saturate(.85)`.
   - **Overlay:** `rgba(26,21,18,0.7)` full-bleed above the media. Keep hero overlays **0.62–0.72** —
     below ~0.6 cream type loses contrast against the backlit window in this photoshoot.
   - **Content**, centered, 24px gap: `h1` in Anybody, `font-variation-settings: "wdth" 135`,
     weight 700, uppercase, letter-spacing .02em, `#E8DCC8`, on two block lines — "Top Note" /
     "Scent Studio". Subline DM Sans uppercase, letter-spacing .14em, `#A67C6D`: "Experiential scent
     discovery". Mobile hero type drops to 36–44px.
   - **Scroll hint:** a thin mauve vertical rule at the bottom, pulsing on a ~2.4s loop. Not an arrow.
3. **Intro** — full-width `#E8DCC8` band, 96px/32px padding. One centered paragraph, max-width 640px,
   1.25rem / 1.6, `#1A1512`. Copy: `[FOUNDERS TO WRITE: 2–3 sentences about what Top Note does. Warm,
   inviting tone.]`
4. **Services** — `#1A1512`, 96px/32px. SectionHeader (eyebrow `[Eyebrow]`, title "Services",
   subtitle `[FOUNDERS TO WRITE: one line on the offering.]`), then a 3-column grid, 32px gap, 64px
   below the header. Each **Card**: no fill (section shows through), 2px amber top rule, mauve
   two-digit eyebrow (`01`/`02`/`03`), Anybody title `[Service Name 1..3]`, one placeholder
   paragraph, and a ghost "Learn more" link (cream → amber on hover). Stacks to one column on mobile.
5. **CTABand (amber)** — `#C89B5C` band. Title `[Partnership Headline]`, body
   `[One sentence of filler copy.]`, then the **partner logo wall** (replaces what used to be a
   button): a centered stack, 24px gap, max-width 1000px —
   - Label: DM Sans 13px medium uppercase, letter-spacing .14em, `#1A1512` at 70% opacity —
     "Brands we've worked with".
   - Logos: wrapping flex row, 16px gap, centered. Each placeholder is a **180 × 76px** box,
     `1px solid rgba(26,21,18,.35)`, 0 radius, contents centered: Anybody `wdth` 120, weight 700,
     uppercase, letter-spacing .04em, 13px, `#1A1512` at 75% opacity, 12px horizontal padding.
     Six placeholders: `[Partner logo 01]` … `[Partner logo 06]`.
   - **When real logos arrive:** swap each box's text for an `<img>` at the same 180 × 76 footprint,
     `object-fit: contain`, no radius, no border if the mark has its own containment. Keep the
     wrapping row — it degrades to 2-up on mobile without a carousel. A carousel is a fallback only
     if the partner count exceeds ~10.
6. **Footer** — `#1A1512`. Tagline `[FOUNDERS TO WRITE: one-line tagline.]`, the nav links, contact
   links (`[FOUNDERS: email]`, Instagram), legal line "© 2026 Top Note Scent Studio. All rights
   reserved." Links cream → amber on hover.

### 2. Brand Partnerships page — route `/events/[event-slug]`

**Purpose:** the QR destination. Guest reviews every partner code and product, then leaves for the
brand's store.

**Head requirements:** `<meta name="robots" content="noindex, nofollow">`, excluded from sitemap and
nav. One page per event at `/events/[event-slug]`.

**Layout:** single column on `#1A1512`, `min-height: 100vh`. Content max-width 1200px. Designed
mobile-first — most traffic arrives on a phone from a QR scan.

**Components, top to bottom:**

1. **NavBar** — same as above, `active: "partners"`.
2. **Hero** — `height: 62vh`, image `assets/photography/reaching-dim.jpg`,
   `object-position: center`, no shift, overlay `rgba(26,21,18,0.7)`, centered.
   Headline on two lines: "Brand" / "Partnerships" (Anybody `wdth` 135, 700, uppercase).
   Subline: "Scan. Save your code. Shop the brand."
   Note: the hero is width-locked by `cover`; because this frame is portrait it is already at the
   minimum scale that covers a 62vh band. Don't try to shrink the image content further — change the
   crop anchor or use a landscape frame instead.
3. **Discount codes section** — `#1A1512`, padding `96px 32px 64px`.
   SectionHeader: eyebrow "Partner offers", title "Discount codes", subtitle "Every partner code from
   the table, in one place. Tap a code to copy it."
   Grid `repeat(auto-fit, minmax(260px, 1fr))`, 32px gap, 56px below the header. One card per partner
   brand: `1px solid rgba(166,124,109,.4)`, 24px padding, 0 radius, 20px gap, content top-aligned —
   - Eyebrow: DM Sans 13px uppercase, letter-spacing .14em, `#A67C6D` — "Partner brand".
   - Name: Anybody `wdth` 120, 700, uppercase, letter-spacing .02em, 1.25rem, `#E8DCC8`.
   - Note: DM Sans 15px / 1.6, `#A67C6D`, `text-wrap: pretty`.
   - **DiscountCode** component: the code in monospace-feel display type with a copy affordance and a
     label ("15% off"). Clicking copies to clipboard and fires the page-level toast.
   Three placeholder brands: `[Partner Brand 01]` / `TOPNOTE15` / "15% off";
   `[Partner Brand 02]` / `TABLE20` / "20% off"; `[Partner Brand 03]` / `SETOF5` / "Discovery set".
4. **Products section** — `#1A1512`, padding `32px 32px 96px`.
   SectionHeader: eyebrow "The scents you smelled", title "Products", subtitle "Pick a bottle to
   finish the purchase on the brand's own store."
   - **Brand filter row** — wrapping flex, 12px gap, 40px below the header. Chips: DM Sans 14px 500
     uppercase, letter-spacing .05em, `10px 18px` padding, **0 radius**, 1px border, 140ms
     color/background transition on `cubic-bezier(.4,0,.2,1)`.
     *Inactive:* transparent bg, `#E8DCC8` text, `rgba(166,124,109,.4)` border.
     *Active:* `#C89B5C` bg, `#1A1512` text, `#C89B5C` border.
     Chips: "All brands" (default active), then one per brand.
   - **Brand groups** — vertical grid, **80px** between groups, 56px below the filters. Each group:
     - Header row: `border-top: 2px solid #C89B5C`, 24px top padding, space-between, baseline-aligned,
       wraps with `16px 32px` gap. Left: brand name in Anybody `wdth` **130**, 700, uppercase, 2rem,
       line-height 1.1, `#E8DCC8`. Right: retailer line, DM Sans 13px uppercase, letter-spacing .14em,
       `#A67C6D` — "Ships from [Brand Store]" / "Ships from [Retail Partner]".
     - Product grid: `repeat(auto-fill, minmax(250px, 1fr))`, 32px gap, of **ProductCard**s.
   - **ProductCard** (design system, `components/events/ProductCard.jsx`): square placeholder image at
     0 radius, brand line, product name, the brand's discount code (copyable, reuses `DiscountCode`),
     and a primary CTA "Shop at [Partner Brand NN]" that opens the outbound link.
   - Eight placeholder products across the three brands, images drawn from
     `assets/photography/` (`liberty-bottle.jpg`, `bottle-held-light.jpg`, `reaching-window.jpg`,
     `bottle-held-dim.jpg`, `spray-portrait.jpg`, `reaching-dim.jpg`, `first-scent.jpg`).
     **Replace these with real product shots supplied by each brand.**
5. **CTABand (amber)** — title `[Partnership Headline]`, body `[FOUNDERS TO WRITE: one line inviting
   brands to put their range on the table.]`, one secondary button (`tone: onAmber`) "Become a
   partner" → the contact page.
6. **Footer** — same as the marketing page.
7. **Copy toast** — fixed, `left: 50%` / `bottom: 32px`, `translateX(-50%)`, `z-index: 60`.
   Background `#1A1512`, `1px solid #C89B5C`, text `#C89B5C` 13px uppercase letter-spacing .14em,
   padding `14px 22px`, 0 radius. Content: `"<CODE> copied"`. Auto-dismisses after **2400ms**.

---

## Interactions & Behavior

**Outbound purchase links (the core flow).** Every product CTA is an outbound link to the brand's or
retail partner's own store — Top Note never takes payment. Each link carries:

```
utm_source=topnote
utm_medium=qr
utm_campaign=<event_slug>
utm_content=<brand>_<product>   // lowercased, non-alphanumerics → "_"
```

In the prototype `href` is a `#`-prefixed stub because the real store URLs aren't known yet; in
production each product needs a real `storeUrl` from the partner. Fire a GA4 `outbound_click` event
on click. Open in a new tab (`target="_blank" rel="noopener"`) so the guest keeps the code page.

**Copy-to-clipboard.** Tapping a discount code (in the codes grid or on a ProductCard) calls
`navigator.clipboard.writeText(code)` — failures swallowed — sets the toast to that code, and clears
any pending dismiss timer before starting a new 2400ms one. Clear the timer on unmount.

**Brand filter.** Selecting a chip filters the product groups to that brand; "All brands" shows all.
Client-side only, no URL state in the prototype — consider `?brand=` for shareability.

**Animation.** Color transitions 140ms `cubic-bezier(.4,0,.2,1)`; menus/reveals 240ms; scroll-in fades
520ms `cubic-bezier(.16,1,.3,1)` entering by fading up 16px. Hero scroll indicator pulses ~2.4s.
No bounce, no spring, no parallax, no hover lift.

**Hover / press / focus.** Primary buttons darken to `#B38A4F`. Secondary/outline buttons fill with
`rgba(200,155,92,.15)`. Ghost links, nav items and footer links shift cream → amber. Press changes
**color only** — nothing scales or lifts. Focus: `2px solid #C89B5C` outline at 3px offset.

**Responsive.** 12-column desktop / 4-column mobile. Section padding 96px → 64px. Hero type 36–44px
on mobile; section titles 28–32px; body never below 16px. All card grids stack to one column. Nav
collapses to the hamburger overlay at the mobile breakpoint.

## State Management

Marketing page: none (hero media choice is a build-time constant).

Partnerships page:

| State | Type | Purpose |
|---|---|---|
| `filter` | `string` (brand id or `'all'`) | which brand's products are shown; default `'all'` |
| `copied` | `string` (code or `''`) | drives the toast; cleared by a 2400ms timer |

**Data.** Both pages are statically rendered from content. The partnerships page needs one record per
event: `{ eventSlug, brands: [{ id, name, note, code, codeLabel, retailerLine, products: [{ name,
image, storeUrl }] }] }`. Source it from a CMS or per-event content file — the shape in the prototype's
logic block is the contract.

## Design Tokens

The full token set ships in `design_system/tokens/` (`colors.css`, `typography.css`, `spacing.css`,
`layout.css`, `motion.css`, `fonts.css`, `base.css`) with `styles.css` as the single entry point.
Highlights:

**Colors — "Amber Dusk", five colors, no more.**

| Token | Hex | Role |
|---|---|---|
| `--deep` | `#1A1512` | dominant surface — nav, hero overlays, most sections, footer |
| `--cream` | `#E8DCC8` | body text on deep; the sparingly-used light section |
| `--amber` | `#C89B5C` | the single accent — CTAs, active nav underline, card top rules, CTA band |
| `--terracotta` | `#8B4A3C` | secondary — dividers, washes, error strokes |
| `--mauve` | `#A67C6D` | understated — captions, borders, metadata, disabled. **Never an action color** |

Derived: `--deep-75 rgba(26,21,18,.75)`, `--mauve-40 rgba(166,124,109,.4)`,
`--amber-15 rgba(200,155,92,.15)`, `--amber-hover #B38A4F`, `--cream-12 rgba(232,220,200,.12)`.
**Amber text on cream is banned** (contrast).

**Typography.** Two families, Google Fonts:
`Anybody:ital,wdth,wght@0,50..150,100..900` + `DM+Sans:ital,opsz,wght@0,9..40,100..1000`.
- **Anybody** (variable, width axis) for display — `wdth` 130–135 for heroes and section titles,
  `wdth` 112–120 for subheads. Bold 700 uppercase +0.02em for titles; Regular 400 mixed case for
  subheadings. **The wide type is the signature — when width and neat fit conflict, choose wider.**
- **DM Sans** for everything else — 16–18px body at 1.6, 14px medium uppercase +0.05em for nav and
  buttons, 13px captions, +0.14em eyebrows.

**Spacing.** 4 → 128px scale. 96px between desktop sections, 64px mobile. 1200px content max,
640px prose measure.

**Corners: 0px everywhere** — buttons, cards, images, inputs, code blocks. This is the most
load-bearing rule in the system; a rounded corner reads as a different brand.

**Borders & depth.** One border: `1px solid` mauve (mauve at 40% on dark). One accent rule:
`2px solid` amber. **No shadows at all** — depth comes from value contrast between deep and cream
sections. No backdrop blur, no frosted glass, no gradients as decoration.

## Assets

All in `assets/photography/` — seven stills and four clips from the founder photoshoot, the only real
imagery that exists. The set is **high-key and backlit** (bright shoji-style window light, warm cast,
hands and glass in silhouette), so the deep overlay is doing real work.

| File | Used for |
|---|---|
| `motion-03.mp4` | marketing hero (slowed to 0.45×, starts at 40%, `center 64%`) |
| `reaching-dim.jpg` | partnerships hero; marketing hero poster/fallback |
| `first-scent.jpg` | signature still; product placeholder |
| `spray-portrait.jpg` | partnerships CTA band in the design system; product placeholder |
| `bottle-held-light.jpg`, `bottle-held-dim.jpg`, `reaching-window.jpg`, `liberty-bottle.jpg` | service blocks, product placeholders |
| `motion-01.mp4`, `motion-02.mp4`, `motion-04.mp4` | alternate hero clips |

**Still needed from the client:**
- **A real logo export.** The supplied wordmark raster has no transparency, is too small for retina,
  and can't sit on `#1A1512`. Until an SVG (or 2× transparent PNG in cream and deep) arrives, every
  surface uses the type-set `Wordmark` component. It is a stand-in, not the mark.
- **Partner brand logos** — 6 slots on the marketing page, 180 × 76px footprint.
- **Product photography** per partner brand for the ProductCards.
- **Real store URLs** per product, and real discount codes per partner.
- **All body and marketing copy.**

## Files

```
design_handoff_topnote_site/
├── README.md                     ← this file
├── MarketingPage.dc.html         ← homepage design reference
├── BrandPartnerships.dc.html     ← QR destination design reference
├── assets/photography/           ← the founder photoshoot (stills + clips)
└── design_system/
    ├── readme.md                 ← brand voice, visual foundations, content rules
    ├── styles.css                ← single entry point (@import only)
    ├── tokens/                   ← colors, typography, spacing, layout, motion, fonts, base
    ├── guidelines/               ← 12 specimen cards (palette, type scale, motion, states…)
    ├── components/               ← brand, core, navigation, marketing, events, forms
    │                                each with .jsx, .d.ts props contract, .prompt.md usage note
    └── ui_kits/                  ← the five-page website kit + the event-page template
```

**Read `design_system/readme.md` first** — it carries the brand voice, the content rules, and the
non-negotiables (0px corners, no shadows, no emoji, five colors, wide type).
The `.d.ts` files in `design_system/components/` are the authoritative props contracts for every
component the two pages use.
