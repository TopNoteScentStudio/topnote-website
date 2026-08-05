/* @ds-bundle: {"format":4,"namespace":"TopNoteScentStudioDesignSystem_5e2582","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"DiscountCode","sourcePath":"components/events/DiscountCode.jsx"},{"name":"ProductCard","sourcePath":"components/events/ProductCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CTABand","sourcePath":"components/marketing/CTABand.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"ServiceBlock","sourcePath":"components/marketing/ServiceBlock.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"7767ee5a70ed","components/core/Button.jsx":"36ca26c83d91","components/core/Card.jsx":"e5fdd0cd27e5","components/core/Divider.jsx":"6b314b190a8c","components/core/Eyebrow.jsx":"a6267caecf4f","components/core/SectionHeader.jsx":"776d371adc81","components/events/DiscountCode.jsx":"3dad9fed0eb9","components/events/ProductCard.jsx":"ea2bd60e22eb","components/forms/Input.jsx":"d55d364fc2b1","components/forms/Textarea.jsx":"7e0a19b69c9b","components/marketing/CTABand.jsx":"c7fcb360eb6c","components/marketing/Hero.jsx":"49852ef8c277","components/marketing/ServiceBlock.jsx":"f150eea1db1c","components/navigation/Footer.jsx":"ee0fd43ee3d9","components/navigation/NavBar.jsx":"74aa8e547ef4","ui_kits/event-page/EventPage.jsx":"c557d451e06c","ui_kits/website/AboutScreen.jsx":"302df804547a","ui_kits/website/App.jsx":"479055a8c242","ui_kits/website/ContactScreen.jsx":"2d88d0c64da3","ui_kits/website/HomeScreen.jsx":"f08208611733","ui_kits/website/MobileHome.jsx":"28a848c93447","ui_kits/website/PartnershipsScreen.jsx":"bce6f43d59ed","ui_kits/website/ServicesScreen.jsx":"b0f6ace3cb05","ui_kits/website/Shared.jsx":"f7b1bfaffa54"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TopNoteScentStudioDesignSystem_5e2582 = window.TopNoteScentStudioDesignSystem_5e2582 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Type-set stand-in for the Top Note wordmark. The supplied logo file
   (assets/logo-topnote-dark.jpg) is a low-res raster with a white background —
   replace this with the SVG export when the founders supply it. */
function Wordmark({
  size = 28,
  tone = 'cream',
  as = 'div',
  style,
  ...rest
}) {
  const color = tone === 'deep' ? 'var(--deep)' : tone === 'amber' ? 'var(--amber)' : 'var(--cream)';
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 130',
      fontSize: size,
      lineHeight: 1,
      color,
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.16em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      letterSpacing: '-0.01em'
    }
  }, "TOP"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      letterSpacing: '0.04em'
    }
  }, "NOTE."));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  tone = 'onDeep',
  as = 'button',
  disabled = false,
  children,
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '10px 20px' : size === 'lg' ? '20px 44px' : '16px 32px';
  const fs = size === 'sm' ? 'var(--fs-nav)' : 'var(--fs-ui)';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-sm)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-medium)',
    fontSize: fs,
    letterSpacing: 'var(--ls-nav)',
    textTransform: 'uppercase',
    lineHeight: 'var(--lh-ui)',
    borderRadius: 'var(--radius)',
    border: '1px solid transparent',
    padding: pad,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-color)',
    opacity: disabled ? 0.45 : 1
  };
  const variants = {
    primary: {
      background: 'var(--action-primary-bg)',
      color: 'var(--action-primary-fg)'
    },
    secondary: {
      background: 'transparent',
      borderColor: 'var(--action-secondary-border)',
      color: 'var(--action-secondary-fg)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--cream)',
      padding: '0 0 4px',
      borderBottom: '1px solid var(--amber)'
    }
  };
  /* On an amber fill, amber-on-amber is invisible — restate the accent as deep.
     On cream, amber text fails contrast, so deep is the only legal treatment. */
  const onLight = tone === 'onAmber' || tone === 'onCream';
  const toneOverrides = !onLight ? null : {
    primary: tone === 'onAmber' ? {
      background: 'var(--deep)',
      color: 'var(--cream)'
    } : null,
    secondary: {
      borderColor: 'var(--deep)',
      color: 'var(--deep)'
    },
    ghost: {
      color: 'var(--deep)',
      borderBottom: '1px solid var(--deep)'
    }
  }[variant];
  const hovers = {
    primary: onLight ? {
      background: 'var(--terracotta)'
    } : {
      background: 'var(--action-primary-bg-hover)'
    },
    secondary: onLight ? {
      background: 'rgba(26,21,18,.08)'
    } : {
      background: 'var(--action-secondary-bg-hover)'
    },
    ghost: onLight ? {
      color: 'var(--terracotta)'
    } : {
      color: 'var(--amber)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...toneOverrides,
      ...(hover && !disabled ? hovers[variant] : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = 'onDeep',
  accent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: accent ? 2 : 1,
      margin: 0,
      background: accent ? 'var(--amber)' : tone === 'onCream' ? 'var(--divider-on-cream)' : 'var(--divider-on-deep)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = 'mauve',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      lineHeight: 'var(--lh-ui)',
      color: tone === 'amber' ? 'var(--amber)' : 'var(--mauve)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'onDeep',
  eyebrow,
  title,
  children,
  footer,
  style,
  ...rest
}) {
  const onCream = tone === 'onCream';
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      padding: onCream ? 'var(--space-lg) 0 0' : 'var(--space-lg)',
      borderRadius: 'var(--radius)',
      border: onCream ? 'none' : 'var(--border-hairline-soft)',
      borderTop: onCream ? 'var(--border-accent)' : undefined,
      background: 'transparent',
      color: onCream ? 'var(--deep)' : 'var(--cream)',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 118',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-subhead)',
      lineHeight: 'var(--lh-heading)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: onCream ? 'var(--deep)' : 'var(--cream)'
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-sm)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'onDeep',
  width = 'expanded',
  style,
  ...rest
}) {
  const fg = tone === 'onCream' ? 'var(--deep)' : 'var(--cream)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      textAlign: align,
      justifyItems: align === 'center' ? 'center' : 'start',
      maxWidth: align === 'center' ? 'var(--measure)' : undefined,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: width === 'expanded' ? '"wdth" 130' : '"wdth" 112',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-section)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: fg
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '52ch',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: tone === 'onCream' ? 'var(--terracotta)' : 'var(--mauve)'
    }
  }, subtitle) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/events/DiscountCode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DiscountCode({
  code,
  label = 'Code',
  onCopy,
  style,
  ...rest
}) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
    if (onCopy) onCopy(code);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: copy,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-md)',
      width: '100%',
      padding: '12px 16px',
      background: 'transparent',
      cursor: 'pointer',
      border: '1px solid var(--amber)',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-body)',
      transition: 'var(--transition-color)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--mauve)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.08em',
      color: 'var(--amber)'
    }
  }, copied ? 'Copied' : code));
}
Object.assign(__ds_scope, { DiscountCode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/events/DiscountCode.jsx", error: String((e && e.message) || e) }); }

// components/events/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  brand,
  name,
  image,
  code,
  href,
  ctaLabel = 'Shop now',
  onCopy,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      border: 'var(--border-hairline-soft)',
      padding: 'var(--space-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3 / 4',
      background: 'var(--cream-12)',
      backgroundImage: image ? 'url(' + image + ')' : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 4
    }
  }, brand ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--mauve)'
    }
  }, brand) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 115',
      fontWeight: 'var(--fw-regular)',
      fontSize: '1.25rem',
      lineHeight: 'var(--lh-heading)',
      color: 'var(--cream)'
    }
  }, name)), code ? /*#__PURE__*/React.createElement(__ds_scope.DiscountCode, {
    code: code,
    onCopy: onCopy
  }) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: href,
    variant: "primary",
    size: "sm",
    style: {
      justifyContent: 'center'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/events/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  invalid = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const shell = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-body)',
    lineHeight: 'var(--lh-body)',
    color: 'var(--cream)',
    background: 'transparent',
    border: '1px solid var(--mauve)',
    borderRadius: 'var(--radius)',
    padding: '12px 14px',
    width: '100%',
    outline: 'none',
    transition: 'var(--transition-color)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--fs-caption)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--mauve)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...shell,
      borderColor: invalid ? 'var(--terracotta)' : focus ? 'var(--amber)' : 'var(--mauve)',
      ...style
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: invalid ? 'var(--terracotta)' : 'var(--mauve)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  invalid = false,
  rows = 5,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const shell = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-body)',
    lineHeight: 'var(--lh-body)',
    color: 'var(--cream)',
    background: 'transparent',
    border: '1px solid var(--mauve)',
    borderRadius: 'var(--radius)',
    padding: '12px 14px',
    width: '100%',
    outline: 'none',
    transition: 'var(--transition-color)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--fs-caption)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--mauve)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...shell,
      resize: 'vertical',
      borderColor: invalid ? 'var(--terracotta)' : focus ? 'var(--amber)' : 'var(--mauve)',
      ...style
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: invalid ? 'var(--terracotta)' : 'var(--mauve)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTABand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTABand({
  tone = 'amber',
  title,
  body,
  image,
  action,
  children,
  style,
  ...rest
}) {
  const onAmber = tone === 'amber';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      background: onAmber ? 'var(--amber)' : 'var(--deep)',
      padding: 'var(--space-2xl) var(--space-lg)',
      overflow: 'hidden',
      ...style
    }
  }, rest), !onAmber && image ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--deep-75)'
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--measure)',
      margin: '0 auto',
      textAlign: 'center',
      display: 'grid',
      gap: 'var(--space-lg)',
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 130',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-section)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: onAmber ? 'var(--deep)' : 'var(--cream)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: onAmber ? 'var(--deep)' : 'var(--cream)'
    }
  }, body) : null, action, children));
}
Object.assign(__ds_scope, { CTABand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTABand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Hero({
  lines = [],
  subline,
  image,
  video,
  videoRate = 1,
  videoStart = 0,
  videoCrossfade = 0,
  imagePosition = 'center',
  imageShift = 0,
  overlay = 0.68,
  height = '92vh',
  align = 'center',
  scrollHint = false,
  children,
  style,
  ...rest
}) {
  /* A portrait photo in a wide frame is already width-locked by `cover`, so background-position
     cannot move it sideways. imageShift scales the layer up and slides it instead. */
  const shiftStyle = imageShift ? {
    transform: 'translateX(' + imageShift + '%) scale(' + (1 + Math.abs(imageShift) / 45) + ')'
  } : null;
  const aRef = React.useRef(null);
  const bRef = React.useRef(null);
  const fading = videoCrossfade > 0;
  React.useEffect(() => {
    for (const r of [aRef, bRef]) if (r.current) r.current.playbackRate = videoRate;
  }, [videoRate, video]);

  /* Single-copy playback: trim to a later in-point by seeking there on load and
     snapping back whenever the native loop restarts at 0. */
  React.useEffect(() => {
    const el = aRef.current;
    if (!el || fading || !videoStart) return;
    const at = () => (el.duration || 0) * videoStart;
    const seek = () => {
      if (el.duration) el.currentTime = at();
    };
    const guard = () => {
      if (el.duration && el.currentTime < at() - 0.05) el.currentTime = at();
    };
    el.addEventListener('loadedmetadata', seek);
    el.addEventListener('timeupdate', guard);
    seek();
    return () => {
      el.removeEventListener('loadedmetadata', seek);
      el.removeEventListener('timeupdate', guard);
    };
  }, [videoStart, video, fading]);

  /* Crossfaded loop: two stacked copies of the same clip. The outgoing copy dips out over
     the last `videoCrossfade` seconds while the incoming one, seeked back to the in-point,
     comes up underneath — so the seam reads as a dissolve instead of a jump cut. */
  React.useEffect(() => {
    const a = aRef.current,
      b = bRef.current;
    if (!a || !b || !fading) return;
    let raf = 0,
      active = a,
      idle = b,
      armed = false;
    const t0 = () => (a.duration || 0) * videoStart;
    const end = () => a.duration || 0;
    const start = () => {
      if (!a.duration) return;
      active.currentTime = t0();
      active.style.opacity = '1';
      idle.style.opacity = '0';
      active.play().catch(() => {});
    };
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!a.duration) return;
      const remaining = end() - active.currentTime;
      if (remaining <= videoCrossfade) {
        if (!armed) {
          armed = true;
          idle.currentTime = t0();
          idle.play().catch(() => {});
        }
        const p = Math.max(0, Math.min(1, remaining / videoCrossfade));
        active.style.opacity = String(p);
        idle.style.opacity = String(1 - p);
        if (remaining <= 0.03) {
          active.pause();
          const swap = active;
          active = idle;
          idle = swap;
          active.style.opacity = '1';
          idle.style.opacity = '0';
          armed = false;
        }
      } else if (active.style.opacity !== '1') {
        active.style.opacity = '1';
        idle.style.opacity = '0';
      }
    };
    a.addEventListener('loadedmetadata', start);
    start();
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      a.removeEventListener('loadedmetadata', start);
    };
  }, [video, videoStart, videoCrossfade, fading]);
  const layer = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: imagePosition,
    filter: 'saturate(0.85)',
    ...shiftStyle
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      minHeight: height,
      display: 'grid',
      placeItems: align === 'center' ? 'center' : 'end start',
      padding: 'var(--space-2xl) var(--space-lg)',
      background: 'var(--deep)',
      overflow: 'hidden',
      ...style
    }
  }, rest), video ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("video", {
    ref: aRef,
    src: video,
    autoPlay: true,
    muted: true,
    loop: !fading,
    playsInline: true,
    style: layer
  }), fading ? /*#__PURE__*/React.createElement("video", {
    ref: bRef,
    src: video,
    muted: true,
    playsInline: true,
    style: {
      ...layer,
      opacity: 0
    }
  }) : null) : image ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: imagePosition,
      filter: 'saturate(0.85)',
      ...shiftStyle
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(26,21,18,' + overlay + ')'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: align === 'center' ? 'center' : 'left',
      display: 'grid',
      gap: 'var(--space-lg)',
      justifyItems: align === 'center' ? 'center' : 'start'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 135',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-hero)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--cream)'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, l))), subline ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lede)',
      letterSpacing: 'var(--ls-subline)',
      textTransform: 'uppercase',
      color: 'var(--mauve)'
    }
  }, subline) : null, children), scrollHint ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 1,
      height: 48,
      background: 'var(--mauve)'
    }
  }) : null);
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceBlock({
  index,
  title,
  body,
  image,
  reverse = false,
  tone = 'onDeep',
  action,
  style,
  ...rest
}) {
  const onCream = tone === 'onCream';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-xl)',
      alignItems: 'center',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 2 : 1,
      aspectRatio: '4 / 3',
      background: 'var(--mauve-40)',
      backgroundImage: image ? 'url(' + image + ')' : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 1 : 2,
      display: 'grid',
      gap: 'var(--space-md)',
      color: onCream ? 'var(--deep)' : 'var(--cream)'
    }
  }, index ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, index) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 122',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-subhead)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)'
    }
  }, body), action));
}
Object.assign(__ds_scope, { ServiceBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const A = {
  color: 'var(--cream)',
  textDecoration: 'none',
  fontSize: 'var(--fs-body)',
  transition: 'var(--transition-color)'
};
function Footer({
  tagline,
  links = [],
  contact = [],
  legal,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const link = (l, key) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: l.href || '#',
    onMouseEnter: () => setHover(key),
    onMouseLeave: () => setHover(null),
    style: {
      ...A,
      color: hover === key ? 'var(--amber)' : 'var(--cream)'
    }
  }, l.label);
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--deep)',
      color: 'var(--cream)',
      padding: 'var(--space-xl) var(--space-lg) var(--space-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 22
  }), tagline ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--cream-60)',
      maxWidth: '30ch',
      fontSize: 'var(--fs-body)'
    }
  }, tagline) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Explore"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, links.map((l, i) => link(l, 'n' + i)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, contact.map((l, i) => link(l, 'c' + i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: 'var(--space-xl) auto 0',
      paddingTop: 'var(--space-md)',
      borderTop: '1px solid var(--mauve-40)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--mauve)',
      fontSize: 'var(--fs-caption)'
    }
  }, legal)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LINK = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-nav)',
  fontWeight: 'var(--fw-medium)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--ls-nav)',
  textDecoration: 'none',
  color: 'var(--cream)',
  paddingBottom: 6,
  borderBottom: '2px solid transparent',
  transition: 'var(--transition-color)',
  lineHeight: 'var(--lh-ui)'
};
function NavBar({
  items = [],
  active,
  mode = 'dropdown',
  sticky = true,
  onNavigate,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(null);
  const go = (e, item) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item);
    }
    setOpen(false);
  };
  const bar = {
    display: 'block',
    width: 24,
    height: 1,
    background: 'var(--cream)',
    transition: 'transform var(--dur-base) var(--ease-standard)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 40,
      height: 'var(--nav-h)',
      background: 'var(--deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go(e, items[0]),
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 20
  })), mode === 'links' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-lg)'
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: it.href || '#',
      onClick: e => go(e, it),
      onMouseEnter: () => setHover(it.id),
      onMouseLeave: () => setHover(null),
      style: {
        ...LINK,
        color: on || hover === it.id ? 'var(--amber)' : 'var(--cream)',
        borderBottomColor: on ? 'var(--amber)' : 'transparent'
      }
    }, it.label);
  })) : /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      color: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-nav)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-nav)',
      color: open ? 'var(--amber)' : 'var(--cream)',
      transition: 'var(--transition-color)'
    }
  }, open ? 'Close' : 'Menu'), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...bar,
      transform: open ? 'translateY(3px) rotate(6deg)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...bar,
      transform: open ? 'translateY(-3px) rotate(-6deg)' : 'none'
    }
  })))), mode === 'dropdown' && open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: sticky ? 'fixed' : 'absolute',
      top: 'var(--nav-h)',
      right: 0,
      zIndex: 39,
      minWidth: 320,
      background: 'var(--deep)',
      borderLeft: '1px solid var(--mauve-40)',
      borderBottom: '1px solid var(--mauve-40)',
      padding: 'var(--space-lg)',
      display: 'grid',
      gap: 'var(--space-md)',
      animation: 'none'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: it.href || '#',
    onClick: e => go(e, it),
    onMouseEnter: () => setHover(it.id),
    onMouseLeave: () => setHover(null),
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 122',
      fontWeight: 'var(--fw-regular)',
      fontSize: '1.5rem',
      textDecoration: 'none',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: it.id === active || hover === it.id ? 'var(--amber)' : 'var(--cream)',
      transition: 'var(--transition-color)'
    }
  }, it.label))) : null);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/event-page/EventPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Wordmark,
  Button,
  ProductCard,
  DiscountCode,
  Eyebrow,
  Divider
} = window.TopNoteScentStudioDesignSystem_5e2582;
const P = '../../assets/photography/';
const PRODUCTS = [{
  brand: '[Partner brand]',
  name: '[Product Name 1]',
  code: 'TOPNOTE15',
  image: P + 'liberty-bottle.jpg'
}, {
  brand: '[Partner brand]',
  name: '[Product Name 2]',
  code: 'TOPNOTE15',
  image: P + 'bottle-held-light.jpg'
}, {
  brand: '[Partner brand]',
  name: '[Product Name 3]',
  code: 'SETOF5',
  image: P + 'reaching-window.jpg'
}];
const utm = p => '#?utm_source=topnote&utm_medium=qr&utm_campaign=summer_launch_2026&utm_content=' + p;
function EventPage() {
  const [copied, setCopied] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--deep)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: 'var(--space-lg)',
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 20
  }), /*#__PURE__*/React.createElement(Divider, {
    style: {
      width: 40
    },
    accent: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)',
      justifyItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Tonight at [event name]"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 130',
      fontWeight: 700,
      fontSize: 'clamp(2rem,7vw,3rem)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--cream)'
    }
  }, "[Partner brand]"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '38ch',
      color: 'var(--mauve)',
      fontSize: 'var(--fs-body)'
    }
  }, "The scents you smelled tonight, with your event discount."))), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '0 var(--space-lg) var(--space-2xl)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-lg)'
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.name
  }, p, {
    href: utm(p.name.toLowerCase().replace(/ /g, '_')),
    onCopy: () => setCopied(p.name)
  })))), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--mauve-40)',
      padding: 'var(--space-lg)',
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--mauve)',
      fontSize: 'var(--fs-caption)',
      textDecoration: 'none',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, "Powered by ", /*#__PURE__*/React.createElement(Wordmark, {
    size: 12,
    tone: "amber",
    as: "span"
  })), copied ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber)',
      fontSize: 'var(--fs-caption)'
    }
  }, "Code for ", copied, " copied") : null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(EventPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/event-page/EventPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
function AboutScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "About Us",
    subtitle: "[FOUNDERS: one line]",
    image: PHOTOS.sprayPortrait
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure)',
      margin: '0 auto',
      display: 'grid',
      gap: 'var(--space-md)',
      color: 'var(--deep)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "[FOUNDERS TO WRITE: who you are, why you started Top Note, your connection to fragrance. 2\u20134 paragraphs.]"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--terracotta)'
    }
  }, "[FOUNDERS TO WRITE: paragraph two.]"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "3 / 4",
    src: PHOTOS.firstScent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "4 / 3",
    src: PHOTOS.reachingWindow
  }), /*#__PURE__*/React.createElement(Photo, {
    ratio: "4 / 3",
    src: PHOTOS.liberty
  })), /*#__PURE__*/React.createElement(Photo, {
    ratio: "3 / 4",
    src: PHOTOS.bottleHeldLight
  }))), /*#__PURE__*/React.createElement(SiteFooter, null));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const [page, setPage] = React.useState('home');
  const go = item => {
    setPage(item.id);
    window.scrollTo({
      top: 0
    });
  };
  const screens = {
    home: HomeScreen,
    services: ServicesScreen,
    partners: PartnershipsScreen,
    about: AboutScreen,
    contact: ContactScreen
  };
  const Screen = screens[page];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    items: NAV,
    active: page,
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Screen, {
    onNavigate: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Contact Us",
    subtitle: "[FOUNDERS: one line]",
    image: PHOTOS.reachingDim
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'var(--space-2xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Email"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--cream)',
      textDecoration: 'none',
      fontSize: 'var(--fs-body-lg)'
    }
  }, "[FOUNDERS: email address]")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--cream)',
      textDecoration: 'none',
      fontSize: 'var(--fs-body-lg)'
    }
  }, "[FOUNDERS: @handle]")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Based in"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mauve)',
      fontSize: 'var(--fs-body-lg)'
    }
  }, "[FOUNDERS: city]"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Message",
    rows: 6,
    placeholder: "Tell us about your event"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, sent ? 'Thank you' : 'Send message'))))), /*#__PURE__*/React.createElement(SiteFooter, null));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    lines: ['Top Note', 'Scent Studio'],
    subline: "Experiential scent discovery",
    image: PHOTOS.reachingDim,
    imageShift: 6,
    overlay: 0.6,
    height: "86vh",
    scrollHint: true
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure)',
      margin: '0 auto',
      textAlign: 'center',
      fontSize: 'var(--fs-lede)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--deep)'
    }
  }, "[FOUNDERS TO WRITE: 2\u20133 sentences about what Top Note does. Warm, inviting tone.]")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "[Eyebrow]",
    title: "Services",
    subtitle: "[FOUNDERS TO WRITE: one line on the offering.]"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-xl)'
    }
  }, ['[Service Name 1]', '[Service Name 2]', '[Service Name 3]'].map((t, i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    eyebrow: '0' + (i + 1),
    title: t,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      as: "a",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate({
          id: 'services'
        });
      }
    }, "Learn more")
  }, "[FOUNDERS TO WRITE: 1\u20132 sentence description.]")))), /*#__PURE__*/React.createElement(CTABand, {
    tone: "image",
    image: PHOTOS.sprayPortrait,
    title: "[Partnership Headline]",
    body: "[FOUNDERS TO WRITE: one sentence pitch for brand partnerships.]",
    action: /*#__PURE__*/React.createElement(Button, {
      onClick: () => onNavigate({
        id: 'partners'
      })
    }, "Brand partnerships")
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MobileHome.jsx
try { (() => {
function MobileHome() {
  const [open, setOpen] = React.useState(false);
  const S = {
    padding: 'var(--space-xl) var(--space-md)'
  };
  const bar = {
    display: 'block',
    width: 22,
    height: 1,
    background: 'var(--cream)',
    margin: '5px 0'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      minHeight: 844,
      background: 'var(--deep)',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 56,
      background: 'var(--deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 17
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    onClick: () => setOpen(!open),
    style: {
      background: 'none',
      border: 0,
      padding: 6,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: bar
  }), /*#__PURE__*/React.createElement("span", {
    style: bar
  }), /*#__PURE__*/React.createElement("span", {
    style: bar
  }))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '56px 0 0',
      background: 'var(--deep)',
      zIndex: 39,
      display: 'grid',
      alignContent: 'center',
      justifyItems: 'center',
      gap: 'var(--space-lg)'
    }
  }, NAV.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(false);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 120',
      fontWeight: 400,
      fontSize: 28,
      textDecoration: 'none',
      color: i === 0 ? 'var(--amber)' : 'var(--cream)'
    }
  }, n.label))) : null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 640,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + PHOTOS.sprayPortrait + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'saturate(.9)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(26,21,18,.68)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      display: 'grid',
      gap: 'var(--space-lg)',
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 135',
      fontWeight: 700,
      fontSize: 42,
      lineHeight: 0.95,
      letterSpacing: '.02em',
      textTransform: 'uppercase',
      color: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Top Note"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Scent Studio")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      letterSpacing: 'var(--ls-subline)',
      textTransform: 'uppercase',
      color: 'var(--mauve)'
    }
  }, "Experiential scent discovery")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 28,
      width: 1,
      height: 40,
      background: 'var(--mauve)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...S,
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: 'center',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--deep)'
    }
  }, "[FOUNDERS TO WRITE: 2\u20133 sentences about Top Note's mission.]")), /*#__PURE__*/React.createElement("section", {
    style: S
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "What we do",
    title: "Services"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-lg)'
    }
  }, ['[Service Name 1]', '[Service Name 2]', '[Service Name 3]'].map((t, i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    eyebrow: '0' + (i + 1),
    title: t,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Learn more")
  }, "[Service description \u2014 1\u20132 sentences.]")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      ...S,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + PHOTOS.sprayPortrait + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(26,21,18,.72)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gap: 'var(--space-lg)',
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 130',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.1,
      letterSpacing: '.02em',
      textTransform: 'uppercase',
      color: 'var(--cream)'
    }
  }, "[Partnership Headline]"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--cream)',
      fontSize: 16,
      lineHeight: 1.6
    }
  }, "[One sentence of filler copy.]"), /*#__PURE__*/React.createElement(Button, null, "Brand partnerships"))), /*#__PURE__*/React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(MobileHome, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MobileHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PartnershipsScreen.jsx
try { (() => {
function PartnershipsScreen({
  onNavigate
}) {
  const steps = [['01', 'Guests smell', 'Featured scents are presented at a guided discovery table.'], ['02', 'Scan the code', 'A QR code on the table opens the event page.'], ['03', 'Review & save', 'Products, notes and discount codes, all in one place.'], ['04', 'Purchase', 'Tracked outbound links to your store.']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Brand Partnerships",
    subtitle: "[FOUNDERS: one-line pitch]",
    image: PHOTOS.bottleHeldDim
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "onCream",
    eyebrow: "Why partner",
    title: "[Value Prop Headline]"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--deep)'
    }
  }, "[FOUNDERS TO WRITE: 2\u20133 short paragraphs on why brands should partner with you.]"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "The flow",
    title: "How it works"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-xl)'
    }
  }, steps.map(([i, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '2px solid var(--amber)',
      paddingTop: 'var(--space-md)',
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "amber"
  }, i), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: '"wdth" 118',
      fontWeight: 400,
      fontSize: '1.375rem',
      color: 'var(--cream)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--mauve)',
      fontSize: 'var(--fs-body)'
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2xl)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-lg)'
    }
  }, ['[Metric 1]', '[Metric 2]', '[Metric 3]'].map(t => /*#__PURE__*/React.createElement(Card, {
    key: t,
    title: t
  }, "[FOUNDERS TO WRITE: what data do you share with partners?]")))), /*#__PURE__*/React.createElement(CTABand, {
    title: "[CTA Headline]",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      tone: "onAmber",
      onClick: () => onNavigate({
        id: 'contact'
      })
    }, "Contact us")
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
}
Object.assign(window, {
  PartnershipsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PartnershipsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
function ServicesScreen({
  onNavigate
}) {
  const services = [{
    i: '01',
    t: '[Service Name 1]',
    img: PHOTOS.bottleHeldLight,
    b: '[FOUNDERS TO WRITE: one paragraph on what an activation includes — the table, the guided walkthrough, the staff.]'
  }, {
    i: '02',
    t: '[Service Name 2]',
    img: PHOTOS.reachingWindow,
    b: '[FOUNDERS TO WRITE: one paragraph on how you select and sequence the fragrances for a room.]'
  }, {
    i: '03',
    t: '[Service Name 3]',
    img: PHOTOS.liberty,
    b: '[FOUNDERS TO WRITE: one paragraph on partner-led events and product launches.]'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Services",
    subtitle: "[FOUNDERS: one-line description]",
    image: PHOTOS.reachingDim
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2xl)'
    }
  }, services.map((s, n) => /*#__PURE__*/React.createElement(ServiceBlock, {
    key: s.i,
    index: s.i,
    title: s.t,
    body: s.b,
    image: s.img,
    reverse: n % 2 === 1
  })))), /*#__PURE__*/React.createElement(CTABand, {
    title: "Bring scent to your next event",
    body: "[FOUNDERS TO WRITE: CTA line.]",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      tone: "onAmber",
      onClick: () => onNavigate({
        id: 'contact'
      })
    }, "Get in touch")
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const {
  Wordmark,
  Button,
  Card,
  SectionHeader,
  Eyebrow,
  Divider,
  NavBar,
  Footer,
  Hero,
  CTABand,
  ServiceBlock,
  Input,
  Textarea
} = window.TopNoteScentStudioDesignSystem_5e2582;
const NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'services',
  label: 'Services'
}, {
  id: 'partners',
  label: 'Brand Partnerships'
}, {
  id: 'about',
  label: 'About Us'
}, {
  id: 'contact',
  label: 'Contact Us'
}];

/* Founder photoshoot. Warm, backlit, high-key — shot against shoji-style window light. */
const P = '../../assets/photography/';
const PHOTOS = {
  firstScent: P + 'first-scent.jpg',
  // profile, bottle to nose — the signature frame
  sprayPortrait: P + 'spray-portrait.jpg',
  // eyes closed, mid-spray
  bottleHeldLight: P + 'bottle-held-light.jpg',
  bottleHeldDim: P + 'bottle-held-dim.jpg',
  reachingWindow: P + 'reaching-window.jpg',
  reachingDim: P + 'reaching-dim.jpg',
  liberty: P + 'liberty-bottle.jpg',
  motion1: P + 'motion-01.mp4',
  motion2: P + 'motion-02.mp4'
};
function Photo({
  ratio = '3 / 2',
  src,
  position = 'center',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      backgroundImage: 'url(' + src + ')',
      backgroundSize: 'cover',
      backgroundPosition: position,
      filter: 'saturate(.9)',
      ...style
    }
  });
}
function Section({
  tone = 'deep',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone === 'cream' ? 'var(--cream)' : 'var(--deep)',
      padding: 'var(--space-2xl) var(--space-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, children));
}
function PageHeader({
  title,
  subtitle,
  image
}) {
  return /*#__PURE__*/React.createElement(Hero, {
    height: "42vh",
    lines: [title],
    subline: subtitle,
    image: image,
    overlay: 0.68
  });
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement(Footer, {
    tagline: "Experiential scent discovery \u2014 curated, in-person fragrance moments.",
    links: NAV.slice(1),
    contact: [{
      label: 'hello@topnote.studio'
    }, {
      label: 'Instagram'
    }, {
      label: 'Book a call'
    }],
    legal: "\xA9 2026 Top Note Scent Studio. All rights reserved."
  });
}
Object.assign(window, {
  NAV,
  PHOTOS,
  Photo,
  Section,
  PageHeader,
  SiteFooter,
  Wordmark,
  Button,
  Card,
  SectionHeader,
  Eyebrow,
  Divider,
  NavBar,
  Footer,
  Hero,
  CTABand,
  ServiceBlock,
  Input,
  Textarea
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.DiscountCode = __ds_scope.DiscountCode;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CTABand = __ds_scope.CTABand;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.ServiceBlock = __ds_scope.ServiceBlock;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
