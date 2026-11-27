import { useEffect } from 'react';

// 3D effects are only enabled for mouse users who haven't asked for reduced
// motion. Touch devices and reduced-motion users get the static layout.
const TILT_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';
const TILT_SELECTOR = '[data-tilt], .glass-card-dark';

/**
 * Mouse-follow 3D tilt + light glare for every card on the page.
 *
 * One delegated pointermove listener serves all cards, so no component needs
 * its own handlers. It writes CSS variables (--rx, --ry, --gx, --gy) at most
 * once per animation frame; the actual transform lives in index.css.
 * A card can set data-tilt-max="14" to tilt more than the default 8 degrees.
 */
export function useCardTilt() {
  useEffect(() => {
    if (!window.matchMedia(TILT_QUERY).matches) return undefined;

    let current = null;
    let frame = 0;

    const reset = (el) => {
      el.classList.remove('is-tilting');
      ['--rx', '--ry', '--gx', '--gy'].forEach((p) => el.style.removeProperty(p));
    };

    const onMove = (e) => {
      const el = e.target instanceof Element ? e.target.closest(TILT_SELECTOR) : null;
      if (el !== current) {
        cancelAnimationFrame(frame);
        if (current) reset(current);
        current = el;
      }
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const max = Number(el.dataset.tiltMax) || 8;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.classList.add('is-tilting');
        el.style.setProperty('--rx', `${((0.5 - py) * max).toFixed(2)}deg`);
        el.style.setProperty('--ry', `${((px - 0.5) * max).toFixed(2)}deg`);
        el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
        el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      if (current) reset(current);
      current = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      if (current) reset(current);
    };
  }, []);
}

/**
 * Sections swing up into place in 3D the first time they scroll into view.
 * Skipped entirely for reduced-motion users, so content is never hidden.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!('IntersectionObserver' in window)) return undefined;

    const targets = Array.from(document.querySelectorAll('main section > *'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    targets.forEach((el) => {
      el.classList.add('reveal-3d');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      targets.forEach((el) => el.classList.remove('reveal-3d', 'is-visible'));
    };
  }, []);
}
