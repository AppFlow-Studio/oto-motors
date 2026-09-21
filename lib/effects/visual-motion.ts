// @ts-nocheck
import { createEffectScope } from "./scope";

export function initVisualMotion() {
  const scope = createEffectScope();
  const { signal } = scope;
  try {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const targets = document.querySelectorAll(
      ".detail-composition figure,.detail-heading,.detail-caption,.process-scene>div,.model-experience-heading",
    );
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visual-visible");
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    targets.forEach((el, i) => {
      el.classList.add("visual-reveal");
      el.style.setProperty("--reveal-delay", `${Math.min((i % 4) * 85, 255)}ms`);
      reveal.observe(el);
    });
    document.querySelectorAll(".model-experience").forEach((section) => {
      const stage = section.querySelector(".model-stage");
      if (!stage) return;
      const panels = [...stage.children],
        count = section.querySelector(".model-count"),
        prev = section.querySelector("[data-model-prev]"),
        next = section.querySelector("[data-model-next]"),
        toggle = section.querySelector(".model-autoplay") || document.createElement("button");
      let index = 0,
        playing = false,
        visible = false,
        timer;
      stage.removeAttribute("tabindex");
      stage.setAttribute("aria-label", "Vehicle and specification gallery");
      function show(n) {
        index = (n + panels.length) % panels.length;
        panels.forEach((panel, i) => {
          panel.classList.toggle("is-current", i === index);
          panel.inert = i !== index;
          panel.setAttribute("aria-hidden", String(i !== index));
        });
        if (count) count.textContent = `0${index + 1} / 02`;
        section.querySelectorAll(".model-dots button").forEach((dot, i) =>
          dot.setAttribute("aria-pressed", String(i === index)),
        );
      }
      function schedule() {
        clearInterval(timer);
        if (playing && visible && !document.hidden && !reduced.matches)
          timer = setInterval(() => {
            if (!section.contains(document.activeElement)) show(index + 1);
          }, 7000);
      }
      if (prev) prev.onclick = () => {
        show(index - 1);
        schedule();
      };
      if (next) next.onclick = () => {
        show(index + 1);
        schedule();
      };
      const dots = document.createElement("div");
      dots.className = "model-dots";
      panels.forEach((panel, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", i === 0 ? "Show the vehicle" : "Show the details");
        dot.onclick = () => {
          show(i);
          schedule();
        };
        dots.append(dot);
      });
      const controls = section.querySelector(".model-controls");
      if (controls) controls.prepend(dots);
      toggle.textContent = playing ? "Pause" : "Play";
      toggle.onclick = () => {
        playing = !playing;
        toggle.textContent = playing ? "Pause" : "Play";
        toggle.setAttribute(
          "aria-label",
          playing ? "Pause image transitions" : "Play image transitions",
        );
        schedule();
      };
      new IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting;
          schedule();
        },
        { threshold: 0.25 },
      ).observe(section);
      document.addEventListener("visibilitychange", schedule);
      reduced.addEventListener("change", () => {
        playing = false;
        toggle.textContent = playing ? "Pause" : "Play";
        schedule();
      });
      show(0);
    });
    let ticking = false;
    function update() {
      ticking = false;
      if (reduced.matches) return;
      document.querySelectorAll(".detail-composition").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < innerHeight) {
          const p = Math.max(-1, Math.min(1, (innerHeight / 2 - rect.top) / innerHeight));
          el.style.setProperty("--detail-shift", `${p * 45}px`);
        }
      });
    }
    addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true, signal },
    );
    update();

    const scenes = [...document.querySelectorAll(".marque-scene")],
      sceneDots = [...document.querySelectorAll(".marque-dots button")];
    function select(n) {
      scenes.forEach((scene, i) => {
        scene.classList.toggle("is-current", i === n);
        scene.inert = i !== n;
        scene.setAttribute("aria-hidden", String(i !== n));
        if (sceneDots[i]) sceneDots[i].setAttribute("aria-pressed", String(i === n));
      });
    }
    sceneDots.forEach((dot, i) =>
      dot.addEventListener("click", () => select(i), { signal }),
    );
    if (scenes.length) select(0);
    document.querySelectorAll(".page-hero-film").forEach((video) => {
      const control =
        video.parentElement.querySelector(".page-film-control") ||
        document.createElement("button");
      video.muted = true;
      function play() {
        video
          .play()
          .then(() => (control.textContent = "Pause film"))
          .catch(() => (control.textContent = "Play film"));
      }
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        video.pause();
        control.textContent = "Play film";
      } else play();
      control.addEventListener(
        "click",
        () => {
          if (video.paused) play();
          else {
            video.pause();
            control.textContent = "Play film";
          }
        },
        { signal },
      );
    });
    scope.onDispose(() => reveal.disconnect());
    return scope.dispose;
  } catch (e) {
    console.error("[oto] initVisualMotion", e);
    return scope.dispose;
  }
}
