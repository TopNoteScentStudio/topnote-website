The one button. Amber fill for the single primary action on a section; outline for the alternative; ghost for inline "read more" links.

```jsx
<Button variant="primary" as="a" href="/partnerships">Partner with us</Button>
<Button variant="secondary">View services</Button>
<Button variant="ghost">Learn more</Button>
```

Ghost is dark-surface only (cream text, amber underline). Never use `mauve` for an action. Corners stay at 0px.

On an amber CTA band or a cream section, pass `tone`:

```jsx
<CTABand title="…"><Button variant="secondary" tone="onAmber">Brand partnerships</Button></CTABand>
```

`tone="onAmber"` / `tone="onCream"` restate the accent as `deep` — amber-on-amber and amber-on-cream are both illegal. Do this rather than overriding `style` per instance.
