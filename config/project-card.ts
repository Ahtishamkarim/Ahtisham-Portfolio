import type { TailwindBreakpoint } from "@/lib/breakpoints";

/**
 * Project card sizing
 * -------------------
 * `width`     — card width in pixels (omit on `base` when using `fullWidth`)
 * `gap`       — space between the two cards in a scroll pair
 * `fullWidth` — stretch card to container width (used on `base`)
 *
 * Keys match Tailwind breakpoints (`base`, `sm`, `md`, `lg`, `xl`, `2xl`).
 * Resolved via `getProjectCardSizing()` + `getTailwindBreakpoint()`.
 */
export type ProjectCardSizeConfig = {
  width?: number;
  gap: number;
  fullWidth?: boolean;
};

export const projectCardSizing: Record<TailwindBreakpoint, ProjectCardSizeConfig> = {
  "2xl": { width: 520, gap: 200 },
  xl: { width: 520, gap: 200 },
  lg: { width: 420, gap: 120 },
  md: { width: 340, gap: 30 },
  sm: { gap: 32, fullWidth: true },
  base: { gap: 16, fullWidth: true },
};

export const defaultProjectCardSizing = projectCardSizing["2xl"];

/** @deprecated Use `getProjectCardPairWidth(getProjectCardSizing(...))` */
export const projectCardPairWidth =
  (projectCardSizing["2xl"].width ?? 520) * 2 + projectCardSizing["2xl"].gap;

export function getProjectCardPairWidth(sizing: ProjectCardSizeConfig) {
  return (sizing.width ?? 0) * 2 + sizing.gap;
}

export function getProjectCardSizing(
  breakpoint: TailwindBreakpoint,
): ProjectCardSizeConfig {
  return { ...projectCardSizing[breakpoint] };
}

type CardOffset = { x: number; y: number };

export type ProjectCardPairPosition = {
  /** Moves both cards in this pair together. Positive y = down. */
  pair: CardOffset;
  /** Extra offset for the left card in this pair. */
  left: CardOffset;
  /** Extra offset for the right card in this pair. */
  right: CardOffset;
};

/**
 * Project card position — one entry per scroll pair (in order).
 * Pair 1 = projects 1–2, pair 2 = projects 3–4, etc.
 *
 * All values are pixels. Positive y = down, positive x = right.
 */
export const projectCardPosition: ProjectCardPairPosition[] = [
  {
    pair: { x: 0, y: 0 },
    left: { x: 0, y: 0 },
    right: { x: 0, y: -150 },
  },
  {
    pair: { x: 0, y: 0 },
    left: { x: 0, y: -150 },
    right: { x: 0, y: 0 },
  },
  {
    pair: { x: 0, y: 0 },
    left: { x: 0, y: 0 },
    right: { x: 0, y: -150 },
  },
  {
    pair: { x: 0, y: 0 },
    left: { x: 0, y: -150 },
    right: { x: 0, y: 0 },
  },
];

export type ProjectCardSlot = "left" | "right";

const emptyOffset: CardOffset = { x: 0, y: 0 };

export function getProjectCardOffset(
  pairIndex: number,
  slot: ProjectCardSlot | 0 | 1,
  scale = 1,
) {
  const pairConfig = projectCardPosition[pairIndex] ?? {
    pair: emptyOffset,
    left: emptyOffset,
    right: emptyOffset,
  };
  const slotKey: ProjectCardSlot =
    slot === 0 || slot === "left" ? "left" : "right";
  const slotOffset = pairConfig[slotKey];

  return {
    x: (pairConfig.pair.x + slotOffset.x) * scale,
    y: (pairConfig.pair.y + slotOffset.y) * scale,
  };
}

export function getProjectCardOffsetScale(sizing: ProjectCardSizeConfig) {
  const referenceWidth = sizing.width ?? projectCardSizing.sm.width ?? 360;
  return referenceWidth / projectCardSizing["2xl"].width!;
}
