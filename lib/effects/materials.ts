// @ts-nocheck
import { createEffectScope } from './scope';

export function initMaterials() {
  const scope = createEffectScope();
  const { signal } = scope;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (n) => Math.max(0, Math.min(1, n));
  const drawings = [];
  const DEFAULT_PEN_MS = 8500;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          loadDrawing(e.target);
          observer.unobserve(e.target);
        }
      }),
    { rootMargin: '500px' },
  );

  document.querySelectorAll('[data-line-art]').forEach((el) => {
    if (el.dataset.lineBound === '1') return;
    observer.observe(el);
  });

  async function loadDrawing(el) {
    try {
      const response = await fetch(el.dataset.lineArt, { signal });
      if (!response.ok) return;
      const doc = new DOMParser().parseFromString(await response.text(), 'image/svg+xml');
      const svg = doc.documentElement;
      if (svg.localName !== 'svg') return;
      svg.removeAttribute('id');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      svg.querySelectorAll('script,foreignObject,style').forEach((n) => n.remove());
      const paths = [...svg.querySelectorAll('path,line,polyline,polygon,rect,circle,ellipse')];
      paths.forEach((n) => {
        n.removeAttribute('style');
        n.removeAttribute('fill');
        n.removeAttribute('stroke');
        n.setAttribute('data-pen', '');
        n.setAttribute('pathLength', '1');
      });
      el.replaceChildren(document.importNode(svg, true));
      el.dataset.lineBound = '1';
      if (reduced.matches) {
        request();
        return;
      }
      el.classList.add('pen-ready');
      const duration = Number(el.dataset.penMs) || DEFAULT_PEN_MS;
      drawings.push({
        el,
        paths: [...el.querySelectorAll('[data-pen]')],
        duration: Math.max(4000, duration),
        elapsed: 0,
        last: 0,
        started: false,
        done: false,
      });
      request();
    } catch {
      /* Keep the original image when a local file is opened without a server. */
    }
  }

  let queued = false;
  let raf = 0;

  function updateLocationsParallax(h) {
    const scene = document.querySelector('.locations-scene');
    if (!scene || reduced.matches) return;
    const foreground = scene.querySelector('.locations-foreground');
    if (!foreground) return;
    const rect = scene.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > h) return;
    const progress = clamp((h * 0.82 - rect.top) / (h * 0.55));
    const rise = (1 - progress) * 42;
    foreground.style.setProperty('--locations-rise', `${rise.toFixed(1)}px`);
  }

  function updateMarqueEntrance(h) {
    document.querySelectorAll('.marque-entrance').forEach((section) => {
      if (section.classList.contains('is-in')) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < h * 0.92 && rect.bottom > h * 0.06) {
        section.classList.add('is-in');
      }
    });
  }

  function update() {
    queued = false;
    const h = innerHeight;
    let animating = false;
    const now = performance.now();

    drawings.forEach((study) => {
      const { el, paths, duration } = study;
      const r = (el.querySelector('svg') || el).getBoundingClientRect();
      const inEntrance = el.closest('.marque-entrance');
      const visible = inEntrance
        ? r.top < h * 1.05 && r.bottom > h * 0.02
        : r.top < h * 0.9 && r.bottom > h * 0.08;

      if (!visible) {
        study.elapsed = 0;
        study.started = false;
        study.done = false;
        study.last = 0;
        paths.forEach((path) => {
          path.style.setProperty('--pen-offset', '1');
        });
        return;
      }

      study.started = true;
      if (!study.done) {
        if (study.last) study.elapsed += Math.min(80, now - study.last);
        study.last = now;
        animating = true;
      } else {
        study.last = 0;
      }
      const raw = reduced.matches ? 1 : clamp(study.elapsed / duration);
      // Light ease-in-out; all strokes share the same progress so the car
      // forms as one silhouette instead of body first / tires last.
      const p =
        raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;
      if (raw === 1) study.done = true;
      paths.forEach((path) => {
        path.style.setProperty('--pen-offset', String(1 - p));
      });
    });

    updateLocationsParallax(h);
    updateMarqueEntrance(h);

    if (!reduced.matches) {
      document.querySelectorAll('.marque-spread').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > h) return;
        const p = clamp((h - r.top) / (h + r.height)) - 0.5;
        el.style.setProperty('--material-y', `${p * -45}px`);
        el.querySelectorAll('.mi-card').forEach((c, i) =>
          c.style.setProperty('--card-y', `${p * (i ? 70 : -50)}px`),
        );
      });
    }

    if (animating) request();
  }

  function request() {
    if (!queued) {
      queued = true;
      raf = requestAnimationFrame(update);
    }
  }

  addEventListener('scroll', request, { passive: true, signal });
  addEventListener('resize', request, { signal });
  reduced.addEventListener('change', request, { signal });

  const videos = [...document.querySelectorAll('.silk-layer')];
  const visible = new Set();
  const mediaObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) visible.add(target);
        else visible.delete(target);
        sync(target);
      }),
    { rootMargin: '100px' },
  );

  function sync(v) {
    v.muted = true;
    if (visible.has(v) && !reduced.matches && !document.hidden) v.play().catch(() => {});
    else v.pause();
  }

  videos.forEach((v) => mediaObserver.observe(v));
  document.addEventListener('visibilitychange', () => videos.forEach(sync), { signal });
  reduced.addEventListener('change', () => videos.forEach(sync), { signal });
  request();

  scope.onDispose(() => {
    cancelAnimationFrame(raf);
    observer.disconnect();
    mediaObserver.disconnect();
  });
  return scope.dispose;
}

