/**
 * Tailwind CSS v4 default min-width breakpoints.
 * Uses rem so media queries stay in sync with Tailwind (`sm:` = 40rem, etc.).
 * @see https://tailwindcss.com/docs/responsive-design
 */
export const tailwindBreakpointQueries = {
  "2xl": "(min-width: 96rem)",
  xl: "(min-width: 80rem)",
  lg: "(min-width: 64rem)",
  md: "(min-width: 48rem)",
  sm: "(min-width: 40rem)",
} as const;

export type TailwindBreakpoint = keyof typeof tailwindBreakpointQueries | "base";

type MatchMediaFn = (query: string) => Pick<MediaQueryList, "matches">;

export function getTailwindBreakpoint(
  matchMediaFn: MatchMediaFn = window.matchMedia.bind(window),
): TailwindBreakpoint {
  if (matchMediaFn(tailwindBreakpointQueries["2xl"]).matches) return "2xl";
  if (matchMediaFn(tailwindBreakpointQueries.xl).matches) return "xl";
  if (matchMediaFn(tailwindBreakpointQueries.lg).matches) return "lg";
  if (matchMediaFn(tailwindBreakpointQueries.md).matches) return "md";
  if (matchMediaFn(tailwindBreakpointQueries.sm).matches) return "sm";
  return "base";
}

/** `true` when viewport is `md:` and up (pinned featured projects, etc.). */
export function isMdScreen(
  matchMediaFn: MatchMediaFn = window.matchMedia.bind(window),
) {
  return matchMediaFn(tailwindBreakpointQueries.md).matches;
}
