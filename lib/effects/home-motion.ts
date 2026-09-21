// @ts-nocheck
import { createEffectScope } from "./scope";

/** Homepage: autoplay hero film + sticky journey chapter scrub. */
export function initHomeMotion() {
  const hero = document.querySelector(".hero");
  const journey = document.querySelector(".journey");
  if (!hero || !journey) return;
  if (hero.parentElement?.classList.contains("hero-track")) return;

  const video = hero.querySelector("video");
  if (!video) return;

  const scope = createEffectScope();
  const { signal } = scope;
  const button =
    hero.querySelector(".hero-film-control") || document.createElement("button");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");

  // Keep layout tracks for sticky journey scrubbing (not for video scrub).
  const heroTrack = document.createElement("div");
  heroTrack.className = "hero-track";
  hero.before(heroTrack);
  heroTrack.append(hero);

  const journeyTrack = document.createElement("div");
  journeyTrack.className = "journey-track";
  journey.before(journeyTrack);
  journeyTrack.append(journey);

  scope.onDispose(() => {
    if (heroTrack.contains(hero)) {
      heroTrack.before(hero);
      heroTrack.remove();
    }
    if (journeyTrack.contains(journey)) {
      journeyTrack.before(journey);
      journeyTrack.remove();
    }
  });

  let pending = false,
    manualChapter = -1,
    lastChapter = -1,
    raf = 0;

  const carousel = document.querySelector(".showroom");
  const indicator = document.querySelector(".carousel-progress");
  function syncCarousel() {
    if (!indicator || !carousel) return;
    indicator.style.setProperty(
      "--carousel-progress",
      35 +
        (65 * carousel.scrollLeft) /
          Math.max(1, carousel.scrollWidth - carousel.clientWidth) +
        "%",
    );
  }
  if (carousel)
    carousel.addEventListener("scroll", syncCarousel, { passive: true, signal });

  const paused = () =>
    reduce.matches || document.documentElement.classList.contains("motion-paused");

  function resetHeroBlur() {
    hero.style.setProperty("--hero-blur", "0px");
    hero.style.setProperty("--hero-blur-scale", "0");
    hero.style.setProperty("--hero-copy-opacity", "1");
    hero.style.setProperty("--hero-copy-shift", "0px");
  }

  function updateHeroBlur(h) {
    if (paused() || reduce.matches) {
      resetHeroBlur();
      return;
    }
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > h) {
      resetHeroBlur();
      return;
    }
    // 0 while in view, then rises as the hero leaves upward
    const progress = Math.min(
      1,
      Math.max(0, -rect.top / Math.max(rect.height * 0.72, 1)),
    );
    const eased = progress * progress * (3 - 2 * progress);
    hero.style.setProperty("--hero-blur", `${(eased * 22).toFixed(2)}px`);
    hero.style.setProperty("--hero-blur-scale", (eased * 0.045).toFixed(4));
    hero.style.setProperty(
      "--hero-copy-opacity",
      String(Math.max(0, 1 - eased * 1.35)),
    );
    hero.style.setProperty(
      "--hero-copy-shift",
      `${(eased * -28).toFixed(1)}px`,
    );
  }

  function update() {
    pending = false;
    const h = innerHeight;
    updateHeroBlur(h);
    const recordTrack = document.querySelector(".record-scene-track");
    const recordScene = document.querySelector(".record-scene");
    if (recordTrack && recordScene) {
      if (paused() || reduce.matches) {
        recordScene.style.clipPath = "none";
        recordScene.style.setProperty("--record-copy", "1");
      } else {
        const r = recordTrack.getBoundingClientRect();
        const range = Math.max(1, recordTrack.offsetHeight - h);
        const stickyP = Math.min(1, Math.max(0, -r.top / range));
        // Viewport-relative scrub for the image open
        const scrub = Math.min(
          1,
          Math.max(0, (h * 0.65 - r.top) / (h * 0.95)),
        );
        // Start aligned to homepage wrap margins (~86% / 7% sides), then full bleed
        const side = innerWidth <= 700 ? 6 : 7;
        const insetY = (innerWidth <= 700 ? 4 : 5) * (1 - scrub);
        const insetX = side * (1 - scrub);
        // Text fades up after the frame has opened, then further scroll exits
        const copy = Math.min(1, Math.max(0, (stickyP - 0.4) / 0.28));
        recordScene.style.clipPath = `inset(${insetY.toFixed(2)}% ${insetX.toFixed(2)}%)`;
        recordScene.style.setProperty("--record-copy", copy.toFixed(3));
      }
    }
    if (paused()) return;
    const desktop = innerWidth > 1000;
    const jr = journeyTrack.getBoundingClientRect();
    if (desktop && jr.top < 0 && jr.bottom > innerHeight) {
      const next = Math.min(
        2,
        Math.floor(
          Math.max(0, -jr.top / (journeyTrack.offsetHeight - innerHeight)) * 3,
        ),
      );
      if (next !== lastChapter) {
        lastChapter = next;
        manualChapter = -1;
      }
      if (manualChapter !== next && typeof window.showChapter === "function") {
        window.showChapter(next);
      }
    }
  }

  function request() {
    if (!pending) {
      pending = true;
      raf = requestAnimationFrame(update);
    }
  }

  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  function ensureSrc() {
    if (!video.getAttribute("src") && video.dataset.src) {
      video.src = video.dataset.src;
      video.load();
    }
  }

  function playFilm() {
    ensureSrc();
    video
      .play()
      .then(() => {
        hero.classList.add("is-ready");
        button.textContent = "Pause film";
      })
      .catch(() => {
        button.textContent = "Play film";
      });
  }

  function pauseFilm() {
    video.pause();
    button.textContent = "Play film";
  }

  video.addEventListener(
    "loadeddata",
    () => {
      hero.classList.add("is-ready");
    },
    { signal },
  );
  video.addEventListener(
    "error",
    () => {
      hero.classList.remove("is-ready");
      button.textContent = "Film unavailable";
    },
    { signal },
  );

  ensureSrc();
  if (!reduce.matches && !navigator.connection?.saveData) {
    playFilm();
  } else {
    button.textContent = "Play film";
  }

  button.addEventListener(
    "click",
    () => {
      if (video.paused) playFilm();
      else pauseFilm();
    },
    { signal },
  );

  journey.querySelectorAll("button").forEach((b) =>
    b.addEventListener(
      "click",
      () => {
        manualChapter = lastChapter;
      },
      { signal },
    ),
  );
  document.querySelector(".motion-toggle")?.addEventListener(
    "click",
    () => {
      if (paused()) pauseFilm();
      else playFilm();
      request();
    },
    { signal },
  );
  reduce.addEventListener(
    "change",
    () => {
      if (reduce.matches) {
        pauseFilm();
        hero.classList.remove("is-ready");
      } else {
        playFilm();
      }
      request();
    },
    { signal },
  );
  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) video.pause();
      else if (!reduce.matches) playFilm();
    },
    { signal },
  );
  addEventListener("scroll", request, { passive: true, signal });
  addEventListener("resize", request, { signal });
  request();

  scope.onDispose(() => cancelAnimationFrame(raf));
  return scope.dispose;
}
