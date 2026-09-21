// @ts-nocheck
import { createEffectScope } from "./scope";

export function initApp() {
  const scope = createEffectScope();
  const { signal } = scope;
  try {
    const menu = document.querySelector(".menu-toggle");
    const mobile = document.querySelector("#mobile-nav");
    if (menu && mobile && !document.body.dataset.reactChrome) {
      menu.addEventListener("click", () => {
        const expanded = menu.getAttribute("aria-expanded") === "true";
        menu.setAttribute("aria-expanded", String(!expanded));
        mobile.hidden = expanded;
        menu.textContent = expanded ? "Menu" : "Close";
      });
      mobile.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          mobile.hidden = true;
          menu.setAttribute("aria-expanded", "false");
          menu.textContent = "Menu";
        }),
      );
    }

    const carInput = document.querySelector("#car-input");
    const inquiry = document.querySelector("#inquiry");
    document.querySelectorAll("[data-car]").forEach((b) =>
      b.addEventListener("click", () => {
        if (!carInput || !inquiry) return;
        carInput.value = b.dataset.car;
        inquiry.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        });
        carInput.focus({ preventScroll: true });
      }),
    );
    document.querySelectorAll("[data-office]").forEach((b) =>
      b.addEventListener("click", () => {
        const office = document.querySelector("[name=office]");
        if (!office || !inquiry || !carInput) return;
        office.value = b.dataset.office;
        inquiry.scrollIntoView();
        carInput.focus({ preventScroll: true });
      }),
    );

    const showroom = document.querySelector(".showroom");
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    if (showroom && prev && next) {
      function updateArrows() {
        prev.disabled = showroom.scrollLeft < 5;
        next.disabled =
          showroom.scrollLeft + showroom.clientWidth >= showroom.scrollWidth - 5;
      }
      prev.addEventListener("click", () => {
        const card = showroom.querySelector("article");
        if (!card) return;
        showroom.scrollBy({ left: -(card.clientWidth + 24), behavior: "smooth" });
      });
      next.addEventListener("click", () => {
        const card = showroom.querySelector("article");
        if (!card) return;
        showroom.scrollBy({ left: card.clientWidth + 24, behavior: "smooth" });
      });
      showroom.addEventListener("scroll", updateArrows, { passive: true, signal });
      window.addEventListener("resize", updateArrows, { signal });
      updateArrows();
    }

    const dialog = document.querySelector("#review-dialog");
    const form = document.querySelector("#deal-form");
    let summary = "";
    if (form && dialog) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const details = document.querySelector("#review-details");
        if (!details) return;
        details.replaceChildren();
        summary = "OTO LEASING | INQUIRY\nPrepared locally. Not submitted.\n\n";
        const labels = {
          name: "Name",
          phone: "Phone",
          email: "Email",
          contact: "Contact details",
          car: "Vehicle",
          payment: "Payment",
          office: "Office",
        };
        for (const [key, label] of Object.entries(labels)) {
          if (!data.has(key)) continue;
          const value = String(data.get(key) || "").trim();
          const row = document.createElement("div");
          const dt = document.createElement("dt");
          const dd = document.createElement("dd");
          dt.textContent = label;
          dd.textContent = value;
          row.append(dt, dd);
          details.append(row);
          summary += label + ": " + value + "\n";
        }
        const status = document.querySelector("#download-status");
        if (status) status.textContent = "";
        dialog.showModal();
      });
      document.querySelector("#close-dialog")?.addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (e) => {
        if (e.target === dialog) {
          const r = dialog.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            dialog.close();
        }
      });
      document.querySelector("#download")?.addEventListener("click", () => {
        const url = URL.createObjectURL(new Blob([summary], { type: "text/plain" }));
        const a = document.createElement("a");
        a.href = url;
        a.download = "oto-leasing-inquiry.txt";
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        const status = document.querySelector("#download-status");
        if (status)
          status.textContent =
            "Your inquiry copy has been prepared for download. It has not been sent.";
      });
    }

    // Motion is progressive enhancement. Every section remains visible without JavaScript.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionToggle =
      document.querySelector(".motion-toggle") || document.createElement("button");
    let pauseMotion = reduceMotion.matches || Boolean(navigator.connection?.saveData);
    const managedAnimations = new Set();
    const filmStates = new Map();
    const videos = [...document.querySelectorAll(".film-media video")].filter(
      (v) => !v.hasAttribute("data-scrub"),
    );
    function syncMotionButton() {
      motionToggle.textContent = pauseMotion ? "Resume motion" : "Pause motion";
      motionToggle.setAttribute("aria-pressed", String(pauseMotion));
      document.documentElement.classList.toggle("motion-paused", pauseMotion);
    }
    function animateOnce(element, keyframes, options) {
      if (pauseMotion || !element.animate) return;
      const animation = element.animate(keyframes, options);
      managedAnimations.add(animation);
      animation.finished
        .then(() => managedAnimations.delete(animation))
        .catch(() => managedAnimations.delete(animation));
    }
    const heroImage = document.querySelector(".hero-image");
    let heroDrift;
    if (
      heroImage?.animate &&
      !reduceMotion.matches &&
      !document.querySelector(".arrival-hero")
    ) {
      heroDrift = heroImage.animate(
        [{ transform: "scale(1.025)" }, { transform: "scale(1.075)" }],
        {
          duration: 24000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        },
      );
      managedAnimations.add(heroDrift);
      if (pauseMotion) heroDrift.pause();
    }
    document
      .querySelectorAll(".hero h1 span,.hero-content p,.hero-content .button")
      .forEach((element, i) =>
        animateOnce(
          element,
          [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 1000,
            delay: i * 130,
            easing: "cubic-bezier(.2,.7,.2,1)",
            fill: "backwards",
          },
        ),
      );
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target;
          const isImage = element.dataset.reveal === "image";
          element.classList.remove("is-image-pending", "is-reveal-pending");
          if (isImage)
            animateOnce(
              element,
              [
                { clipPath: "inset(7% 0 7% 0)", opacity: 0.3, transform: "translateY(18px)" },
                { clipPath: "inset(0% 0 0% 0)", opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 1400, easing: "cubic-bezier(.16,1,.3,1)" },
            );
          else
            animateOnce(
              element,
              [
                { opacity: 0, transform: "translateY(28px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 1000, easing: "cubic-bezier(.16,1,.3,1)" },
            );
          revealObserver.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        "[data-reveal],.approach-copy h2,.approach-bottom,.ledger,.record-copy,.inquiry h2,.office-grid article,.closing>a",
      )
      .forEach((element) => {
        if (!pauseMotion && element.getBoundingClientRect().top > window.innerHeight)
          element.classList.add(
            element.dataset.reveal === "image" ? "is-image-pending" : "is-reveal-pending",
          );
        revealObserver.observe(element);
      });
    function ensureVideo(video) {
      if (!video.getAttribute("src")) {
        video.src = video.dataset.src;
        video.load();
      }
    }
    async function playFilm(video, userInitiated = false) {
      const state = filmStates.get(video);
      if (
        !state ||
        state.failed ||
        (!userInitiated && (pauseMotion || state.userPaused || document.hidden))
      )
        return;
      ensureVideo(video);
      try {
        await video.play();
      } catch {
        state.button.textContent = "Play film";
      }
    }
    const filmObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const state = filmStates.get(entry.target);
          state.visible = entry.isIntersecting;
          if (entry.isIntersecting) playFilm(entry.target);
          else entry.target.pause();
        }
      },
      { threshold: 0.18 },
    );
    for (const video of videos) {
      const container = video.closest(".film-media");
      if (!container) continue;
      const button =
        container.querySelector(".film-toggle") || document.createElement("button");
      const state = {
        visible: false,
        userPaused: false,
        failed: false,
        button,
        container,
      };
      filmStates.set(video, state);
      button.addEventListener("click", () => {
        if (video.paused) {
          state.userPaused = false;
          playFilm(video, true);
        } else {
          state.userPaused = true;
          video.pause();
        }
      });
      video.addEventListener("playing", () => {
        container.classList.add("is-ready", "is-playing");
        button.textContent = "Pause film";
        button.setAttribute("aria-label", "Pause " + video.getAttribute("aria-label"));
      });
      video.addEventListener("pause", () => {
        container.classList.remove("is-playing");
        button.textContent = "Play film";
        button.setAttribute("aria-label", "Play " + video.getAttribute("aria-label"));
      });
      video.addEventListener("error", () => {
        state.failed = true;
        container.classList.remove("is-ready", "is-playing");
        button.textContent = "Film unavailable";
        button.disabled = true;
      });
      filmObserver.observe(video);
    }
    function applyMotionState() {
      syncMotionButton();
      for (const a of managedAnimations) {
        if (pauseMotion) a.pause();
        else a.play();
      }
      for (const video of videos) {
        if (pauseMotion) video.pause();
        else if (filmStates.get(video).visible) playFilm(video);
      }
      if (pauseMotion) {
        document
          .querySelectorAll(".is-image-pending,.is-reveal-pending")
          .forEach((e) => e.classList.remove("is-image-pending", "is-reveal-pending"));
        for (const a of [...managedAnimations])
          if (a !== heroDrift) {
            a.cancel();
            managedAnimations.delete(a);
          }
      }
    }
    motionToggle.addEventListener("click", () => {
      pauseMotion = !pauseMotion;
      applyMotionState();
    });
    reduceMotion.addEventListener("change", () => {
      pauseMotion = reduceMotion.matches;
      applyMotionState();
    });
    document.addEventListener("visibilitychange", () => {
      for (const video of videos) {
        if (document.hidden) video.pause();
        else if (filmStates.get(video).visible) playFilm(video);
      }
      if (heroDrift) {
        if (document.hidden || pauseMotion) heroDrift.pause();
        else heroDrift.play();
      }
    }, { signal });
    syncMotionButton();
    scope.onDispose(() => {
      for (const a of managedAnimations) a.cancel();
      for (const video of videos) video.pause();
    });
    return scope.dispose;
  } catch (e) {
    console.error("[oto] initApp", e);
    return scope.dispose;
  }
}
