import React from 'react';

export function Hero({ lines = [], subline, image, video, videoRate = 1, videoStart = 0, videoCrossfade = 0, imagePosition = 'center', imageShift = 0, overlay = 0.68, height = '92vh', align = 'center', scrollHint = false, children, style, ...rest }) {
  /* A portrait photo in a wide frame is already width-locked by `cover`, so background-position
     cannot move it sideways. imageShift scales the layer up and slides it instead. */
  const shiftStyle = imageShift ? { transform: 'translateX(' + imageShift + '%) scale(' + (1 + Math.abs(imageShift) / 45) + ')' } : null;
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
    const seek = () => { if (el.duration) el.currentTime = at(); };
    const guard = () => { if (el.duration && el.currentTime < at() - 0.05) el.currentTime = at(); };
    el.addEventListener('loadedmetadata', seek);
    el.addEventListener('timeupdate', guard);
    seek();
    return () => { el.removeEventListener('loadedmetadata', seek); el.removeEventListener('timeupdate', guard); };
  }, [videoStart, video, fading]);

  /* Crossfaded loop: two stacked copies of the same clip. The outgoing copy dips out over
     the last `videoCrossfade` seconds while the incoming one, seeked back to the in-point,
     comes up underneath — so the seam reads as a dissolve instead of a jump cut. */
  React.useEffect(() => {
    const a = aRef.current, b = bRef.current;
    if (!a || !b || !fading) return;
    let raf = 0, active = a, idle = b, armed = false;
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
          const swap = active; active = idle; idle = swap;
          active.style.opacity = '1'; idle.style.opacity = '0';
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
    return () => { cancelAnimationFrame(raf); a.removeEventListener('loadedmetadata', start); };
  }, [video, videoStart, videoCrossfade, fading]);

  const layer = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: imagePosition, filter: 'saturate(0.85)', ...shiftStyle };

  return (
    <section
      style={{
        position: 'relative', minHeight: height, display: 'grid', placeItems: align === 'center' ? 'center' : 'end start',
        padding: 'var(--space-2xl) var(--space-lg)', background: 'var(--deep)', overflow: 'hidden', ...style,
      }}
      {...rest}
    >
      {video ? (
        <>
          <video ref={aRef} src={video} autoPlay muted loop={!fading} playsInline style={layer} />
          {fading ? <video ref={bRef} src={video} muted playsInline style={{ ...layer, opacity: 0 }} /> : null}
        </>
      ) : image ? (
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(' + image + ')', backgroundSize: 'cover', backgroundPosition: imagePosition, filter: 'saturate(0.85)', ...shiftStyle }} />
      ) : null}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,21,18,' + overlay + ')' }} />
      <div style={{ position: 'relative', textAlign: align === 'center' ? 'center' : 'left', display: 'grid', gap: 'var(--space-lg)', justifyItems: align === 'center' ? 'center' : 'start' }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontVariationSettings: '"wdth" 135', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-hero)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--cream)' }}>
          {lines.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
        </h1>
        {subline ? (
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lede)', letterSpacing: 'var(--ls-subline)', textTransform: 'uppercase', color: 'var(--mauve)' }}>{subline}</p>
        ) : null}
        {children}
      </div>
      {scrollHint ? <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', width: 1, height: 48, background: 'var(--mauve)' }} /> : null}
    </section>
  );
}
