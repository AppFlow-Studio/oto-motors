"use client";

import { useLayoutEffect } from "react";

/** Applies body classes for editorial CSS hooks before paint. */
export function BodyClass({ className }: { className: string }) {
  useLayoutEffect(() => {
    const prev = document.body.className;
    document.body.className = className;
    document.body.dataset.reactChrome = "editorial";
    return () => {
      document.body.className = prev;
      delete document.body.dataset.reactChrome;
    };
  }, [className]);
  return null;
}
