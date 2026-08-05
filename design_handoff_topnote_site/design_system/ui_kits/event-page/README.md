# UI kit — Event QR landing page

The destination behind a QR code at an activation table. One page per event at `/events/[event-slug]`.

- `<meta name="robots" content="noindex, nofollow">` is set — these pages are unlisted, never in the nav or sitemap.
- No site navigation. Wordmark, partner brand, product grid, "Powered by Top Note" footer.
- Every product CTA carries `utm_source=topnote`, `utm_medium=qr`, `utm_campaign=[event]`, `utm_content=[product]`.
- Tapping a code block copies it to the clipboard.
