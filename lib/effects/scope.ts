// @ts-nocheck
/** Shared dispose helper — AbortController cancels listeners registered with { signal }. */
export function createEffectScope() {
  const ac = new AbortController();
  const { signal } = ac;
  const cleanups = [];
  return {
    signal,
    onDispose(fn) {
      cleanups.push(fn);
    },
    dispose() {
      ac.abort();
      for (const fn of cleanups.splice(0).reverse()) fn();
    },
  };
}
