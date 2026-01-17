const fromRoot = (specifier) => new URL(`./${specifier}`, import.meta.url).href;

export const resolve = (specifier, context, nextResolve) => {
  if (specifier.startsWith("@/")) {
    const resolved = fromRoot(specifier.slice(2));
    return nextResolve(resolved, context);
  }

  return nextResolve(specifier, context);
};
