// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '_ds/top-note-scent-studio-design-system-5e25829e-479a-4ca4-b138-816ca52fd308';

  // The DC runtime may evaluate this helmet script more than once (mount + re-render).
  // Without a guard each pass appends another bundle <script>, and two copies race to
  // define the namespace — the loser can clobber the winner with an older evaluation.
  if (window.__tnDsBase) return;
  window.__tnDsBase = true;

  // One stable cache-buster per page load: fresh after a recompile, but re-entry
  // reuses the same URL and hits cache instead of re-downloading and re-evaluating.
  const v = (window.__tnDsV = window.__tnDsV || Date.now());

  // styles.css is nothing but @import lines reaching every token sheet — load it alone.
  for (const p of ['styles.css']) {
    if (document.querySelector('link[data-tn-ds="' + p + '"]')) continue;
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p + '?v=' + v;
    l.setAttribute('data-tn-ds', p);
    document.head.appendChild(l);
  }

  if (document.querySelector('script[data-tn-ds-bundle]')) return;
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js?v=' + v;
  s.setAttribute('data-tn-ds-bundle', '');
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();
