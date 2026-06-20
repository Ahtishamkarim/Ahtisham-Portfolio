/**
 * Project card sizing
 * -------------------
 * `width` — card width in pixels (increase = bigger, decrease = smaller)
 * `gap`   — space between the two cards in a scroll pair
 */
export const projectCardSizing = {
  width: 520,
  gap: 200,
} as const;

/** Width of the two-card row in the pinned featured section. */
export const projectCardPairWidth =
  projectCardSizing.width * 2 + projectCardSizing.gap;

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
  slot: ProjectCardSlot | 0 | 1
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
    x: pairConfig.pair.x + slotOffset.x,
    y: pairConfig.pair.y + slotOffset.y,
  };
}
