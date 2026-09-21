// @ts-nocheck
import { createEffectScope } from "./scope";

/** Editorial reveals + build-your-deal inquiry form. */
export function initEditorial() {
  const scope = createEffectScope();
  const { signal } = scope;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");

  if (!reduced.matches && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("editorial-pending");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".service-intro>div,.process-grid article,.option-grid article,.brand-intro,.brand-model,.questions>h2",
      )
      .forEach((el) => {
        el.dataset.editorialReveal = "";
        if (el.getBoundingClientRect().top > innerHeight)
          el.classList.add("editorial-pending");
        io.observe(el);
      });
    scope.onDispose(() => io.disconnect());
  }

  const form = document.querySelector("#inquiry-form");
  if (!form) return scope.dispose;

  const params = new URLSearchParams(location.search);
  const car = document.querySelector("#inquiry-car");
  if (car) car.value = (params.get("car") || "").slice(0, 300);
  const p = params.get("payment");
  const pay = document.querySelector("#inquiry-payment");
  if (pay && ["Lease", "Finance", "Cash", "Not sure yet"].includes(p)) pay.value = p;

  const review = document.querySelector("#inquiry-review");
  const details = document.querySelector("#inquiry-summary");
  let summary = "";

  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      if (!form.reportValidity() || !review || !details) return;
      summary = "OTO MOTORS — INQUIRY\nPrepared locally. Not submitted.\n\n";
      details.replaceChildren();
      const labels = {
        car: "Vehicle",
        payment: "Structure",
        destination: "Delivery",
        timeframe: "Timeframe",
        name: "Name",
        email: "Email",
        phone: "Phone",
        office: "Office",
      };
      for (const [key, value] of new FormData(form)) {
        const row = document.createElement("div");
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dt.textContent = labels[key] || key;
        dd.textContent = String(value);
        row.append(dt, dd);
        details.append(row);
        summary += dt.textContent + ": " + value + "\n";
      }
      const status = document.querySelector("#save-status");
      if (status) status.textContent = "";
      review.showModal();
    },
    { signal },
  );

  document.querySelector(".review-close")?.addEventListener(
    "click",
    () => review?.close(),
    { signal },
  );
  document.querySelector("#save-inquiry")?.addEventListener(
    "click",
    () => {
      const url = URL.createObjectURL(new Blob([summary], { type: "text/plain" }));
      const a = document.createElement("a");
      a.href = url;
      a.download = "oto-inquiry.txt";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      const status = document.querySelector("#save-status");
      if (status)
        status.textContent = "Your copy is ready. This inquiry has not been sent.";
    },
    { signal },
  );

  return scope.dispose;
}
