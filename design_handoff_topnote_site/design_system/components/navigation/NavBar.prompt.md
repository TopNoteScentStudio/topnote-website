Site-wide top navigation — 64px, deep background, always the first element on a page.

```jsx
<NavBar active="services" items={NAV} onNavigate={go} />
```

Default is the **MENU dropdown** on the right: a text label plus two hairline rules that tilt open, revealing a right-anchored deep panel with the items in Anybody 24px uppercase. `mode="links"` gives the inline row with an amber underline on the active item. Never link event landing pages from here — those are unlisted.
