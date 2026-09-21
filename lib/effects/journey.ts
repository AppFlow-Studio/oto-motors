// @ts-nocheck
import { createEffectScope } from "./scope";

export function initJourney() {
  const panels = [...document.querySelectorAll(".journey-slide")];
  const tabs = [...document.querySelectorAll(".journey-tabs button")];
  if (!panels.length) return;

  const scope = createEffectScope();
  const { signal } = scope;
  let chapter = 0;

  function showChapter(index, focus = false) {
    chapter = (index + panels.length) % panels.length;
    panels.forEach((p, i) => {
      p.hidden = i !== chapter;
      p.classList.toggle("active", i === chapter);
      if (i !== chapter) p.querySelectorAll("video").forEach((v) => v.pause());
    });
    tabs.forEach((t, i) => {
      t.setAttribute("aria-selected", String(i === chapter));
      t.tabIndex = i === chapter ? 0 : -1;
    });
    const count = document.querySelector(".journey-count");
    if (count) count.textContent = String(chapter + 1).padStart(2, "0") + " / 03";
    if (focus && tabs[chapter]) tabs[chapter].focus();
  }

  window.showChapter = showChapter;
  scope.onDispose(() => {
    if (window.showChapter === showChapter) delete window.showChapter;
  });

  tabs.forEach((t, i) => {
    t.addEventListener("click", () => showChapter(i), { signal });
    t.addEventListener(
      "keydown",
      (e) => {
        if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
          e.preventDefault();
          showChapter(
            e.key === "Home"
              ? 0
              : e.key === "End"
                ? 2
                : chapter + (e.key === "ArrowRight" ? 1 : -1),
            true,
          );
        }
      },
      { signal },
    );
  });

  document.querySelectorAll("[data-chapter-step]").forEach((b) =>
    b.addEventListener(
      "click",
      () => showChapter(chapter + Number(b.dataset.chapterStep)),
      { signal },
    ),
  );

  let touchX = 0,
    touchY = 0;
  const journey = document.querySelector(".journey");
  if (journey) {
    journey.addEventListener(
      "touchstart",
      (e) => {
        touchX = e.changedTouches[0].clientX;
        touchY = e.changedTouches[0].clientY;
      },
      { passive: true, signal },
    );
    journey.addEventListener(
      "touchend",
      (e) => {
        const dx = e.changedTouches[0].clientX - touchX,
          dy = e.changedTouches[0].clientY - touchY;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy))
          showChapter(chapter + (dx < 0 ? 1 : -1));
      },
      { passive: true, signal },
    );
  }

  const selectedCar = new URLSearchParams(location.search).get("car");
  const carInput = document.querySelector("#car-input");
  if (selectedCar && carInput) carInput.value = selectedCar.slice(0, 300);

  showChapter(0);
  return scope.dispose;
}
