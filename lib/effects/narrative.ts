// @ts-nocheck
import { createEffectScope } from './scope';

export function initNarrative() {
  const scope = createEffectScope();
  const { signal } = scope;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (x) => Math.min(1, Math.max(0, x));

  const observers = [];
  let raf = 0;
  const rise = [...document.querySelectorAll('.narrative [data-rise]')];

  function revealRise(el) {
    el.classList.remove('n-pending');
  }

  function riseInView(el, h = innerHeight) {
    const r = el.getBoundingClientRect();
    return r.top < h * 0.92 && r.bottom > h * 0.08;
  }

  if (!reduced.matches) {
    rise.forEach((el) => {
      // Only hide content that starts below the fold — never leave visible copy at 0 opacity.
      if (!riseInView(el)) el.classList.add('n-pending');
    });

    if ('IntersectionObserver' in window) {
      const reveal = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.boundingClientRect.bottom < innerHeight * 0.15) {
              revealRise(entry.target);
              reveal.unobserve(entry.target);
            }
          }),
        { threshold: 0.01, rootMargin: '0px 0px -6% 0px' },
      );
      observers.push(reveal);
      rise.forEach((el) => {
        if (el.classList.contains('n-pending')) reveal.observe(el);
      });
    }
  }

  const movies = [...document.querySelectorAll('.narrative video')];
  movies.forEach((video) => {
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    const show = () => video.classList.add('is-playing');
    const hide = () => video.classList.remove('is-playing');
    video.addEventListener('playing', show);
    video.addEventListener('error', hide);
    if (reduced.matches) {
      video.pause();
      return;
    }
    const tryPlay = () => {
      if (video.readyState < 2) {
        try {
          video.load();
        } catch {
          /* ignore */
        }
      }
      video
        .play()
        .then(show)
        .catch(() => {
          // Keep poster visible; retry once media can play
          const onReady = () => {
            video.play().then(show).catch(() => {});
            video.removeEventListener('canplay', onReady);
          };
          video.addEventListener('canplay', onReady);
        });
    };
    // Hero films should start immediately; IO still pauses when scrolled away.
    const rect = video.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < innerHeight) tryPlay();

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting && document.visibilityState === 'visible') tryPlay();
          else video.pause();
        }),
      { threshold: 0.08 },
    );
    observers.push(observer);
    observer.observe(video);
  });

  const expands = [...document.querySelectorAll('[data-expand]')];
  const drift = [...document.querySelectorAll('[data-drift]')];
  const heroes = [...document.querySelectorAll('.n-hero')];

  function prepareHeroTitle(hero) {
    const title = hero.querySelector('.n-hero-copy h1');
    if (!title || title.dataset.split === '1') return;
    const text = title.textContent;
    title.textContent = '';
    title.setAttribute('aria-label', text);
    const chars = [...text];
    chars.forEach((ch, i) => {
      const span = document.createElement('span');
      span.className = 'n-char';
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      span.setAttribute('aria-hidden', 'true');
      // Stagger so the rise still feels like a soft wave, but lands on a straight line
      span.style.setProperty('--delay', `${160 + i * 32}ms`);
      title.appendChild(span);
    });
    title.dataset.split = '1';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => hero.classList.add('is-titled'));
    });
  }

  heroes.forEach(prepareHeroTitle);
  let ticking = false;

  function updateHero(hero, h) {
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > h) {
      hero.style.setProperty('--hero-blur', '0px');
      hero.style.setProperty('--hero-blur-scale', '0');
      hero.style.setProperty('--hero-copy-opacity', '1');
      hero.style.setProperty('--hero-copy-shift', '0px');
      return;
    }
    // 0 while pinned in view, then rises as the hero leaves upward
    const progress = clamp(-rect.top / Math.max(rect.height * 0.72, 1));
    const eased = progress * progress * (3 - 2 * progress);
    const blur = eased * 22;
    hero.style.setProperty('--hero-blur', `${blur.toFixed(2)}px`);
    hero.style.setProperty('--hero-blur-scale', (eased * 0.045).toFixed(4));
    hero.style.setProperty('--hero-copy-opacity', String(Math.max(0, 1 - eased * 1.35)));
    hero.style.setProperty('--hero-copy-shift', `${(eased * -28).toFixed(1)}px`);
  }

  function update() {
    ticking = false;
    if (reduced.matches) return;
    const h = innerHeight;

    // Fallback when IntersectionObserver misses (overflow:clip ancestors, etc.)
    rise.forEach((el) => {
      if (!el.classList.contains('n-pending')) return;
      const r = el.getBoundingClientRect();
      if (riseInView(el, h) || r.bottom < h * 0.15) revealRise(el);
    });

    heroes.forEach((hero) => updateHero(hero, h));

    expands.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const r = parent.getBoundingClientRect();
      // Viewport-relative scrub so the inset open feels continuous
      if (r.bottom < 0 || r.top > h) return;
      const p = clamp((h * 0.65 - r.top) / (h * 0.95));
      el.style.clipPath = `inset(${(8 * (1 - p)).toFixed(2)}% ${(10 * (1 - p)).toFixed(2)}%)`;
      el.style.setProperty('--expand-copy', p.toFixed(3));
    });

    drift.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > h) return;
      // -1 when entering from below → +1 when leaving above
      const raw = (h - r.top) / Math.max(h + r.height, 1);
      const centered = clamp(raw) * 2 - 1;
      const amount = Number(el.dataset.drift);
      if (!Number.isFinite(amount)) return;
      el.style.setProperty('--drift', `${(centered * amount).toFixed(1)}px`);
    });
  }

  function request() {
    if (!ticking) {
      ticking = true;
      raf = requestAnimationFrame(update);
    }
  }

  addEventListener('scroll', request, { passive: true, signal });
  addEventListener('resize', request, { signal });
  request();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) movies.forEach((v) => v.pause());
    else if (!reduced.matches)
      movies.forEach((v) => {
        const r = v.getBoundingClientRect();
        if (r.bottom > 0 && r.top < innerHeight) v.play().catch(() => {});
      });
  }, { signal });

  reduced.addEventListener('change', () => {
    rise.forEach((el) => el.classList.remove('n-pending'));
    if (reduced.matches) {
      movies.forEach((v) => {
        v.pause();
        v.classList.remove('is-playing');
      });
      heroes.forEach((hero) => {
        hero.style.setProperty('--hero-blur', '0px');
        hero.style.setProperty('--hero-blur-scale', '0');
        hero.style.setProperty('--hero-copy-opacity', '1');
        hero.style.setProperty('--hero-copy-shift', '0px');
      });
    }
    request();
  }, { signal });

  scope.onDispose(() => {
    cancelAnimationFrame(raf);
    observers.forEach((o) => o.disconnect());
  });
  return scope.dispose;
}

