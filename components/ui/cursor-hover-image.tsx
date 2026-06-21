"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import Image from "next/image";

type CursorHoverImageItem = {
  image: string;
  imageAlt?: string;
};

type SlideDirection = "down" | "up";

type SlideState = {
  outgoing: CursorHoverImageItem;
  incoming: CursorHoverImageItem;
  incomingKey: string | number;
  direction: SlideDirection;
};

type CursorHoverImageOptions<T extends CursorHoverImageItem> = {
  width?: number;
  height?: number;
  offset?: number;
  rotation?: number;
  smoothness?: number;
  imageTransitionDuration?: number;
  getItemKey?: (item: T) => string | number;
};

type CursorHoverImagePreviewProps = {
  item: CursorHoverImageItem | null;
  itemKey: string | number | null;
  width: number;
  height: number;
  rotation: number;
  transitionDuration: number;
  followerRef: React.RefObject<HTMLDivElement | null>;
};

const SLIDE_EASING = "cubic-bezier(0.33, 1, 0.68, 1)";

function compareItemKeys(a: string | number, b: string | number) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }

  return String(a).localeCompare(String(b));
}

function PreviewImage({
  item,
  width,
  height,
}: {
  item: CursorHoverImageItem;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={item.image}
      alt={item.imageAlt ?? ""}
      width={width}
      height={height}
      className="h-full w-full object-cover"
      sizes={`${width}px`}
      draggable={false}
    />
  );
}

function setLayerTransform(element: HTMLDivElement | null, yPercent: number) {
  if (!element) return;
  element.style.transform = `translate3d(0, ${yPercent}%, 0)`;
}

export function CursorHoverImagePreview({
  item,
  itemKey,
  width,
  height,
  rotation,
  transitionDuration,
  followerRef,
}: CursorHoverImagePreviewProps) {
  const displayedItemRef = useRef<CursorHoverImageItem | null>(null);
  const displayedKeyRef = useRef<string | number | null>(null);
  const outgoingLayerRef = useRef<HTMLDivElement>(null);
  const incomingLayerRef = useRef<HTMLDivElement>(null);
  const completeTimerRef = useRef<number | null>(null);
  const slideRef = useRef<SlideState | null>(null);

  const [displayedItem, setDisplayedItem] = useState<CursorHoverImageItem | null>(null);
  const [slide, setSlide] = useState<SlideState | null>(null);

  slideRef.current = slide;

  const clearCompleteTimer = () => {
    if (completeTimerRef.current !== null) {
      window.clearTimeout(completeTimerRef.current);
      completeTimerRef.current = null;
    }
  };

  const commitIncoming = (incoming: CursorHoverImageItem, incomingKey: string | number) => {
    displayedItemRef.current = incoming;
    displayedKeyRef.current = incomingKey;
    setDisplayedItem(incoming);
    setSlide(null);
  };

  useEffect(() => {
    if (!item || itemKey === null) {
      clearCompleteTimer();
      displayedItemRef.current = null;
      displayedKeyRef.current = null;
      setDisplayedItem(null);
      setSlide(null);
      return;
    }

    const displayedKey = displayedKeyRef.current;
    const currentDisplayedItem = displayedItemRef.current;

    if (displayedKey === null || currentDisplayedItem === null) {
      displayedItemRef.current = item;
      displayedKeyRef.current = itemKey;
      setDisplayedItem(item);
      setSlide(null);
      return;
    }

    if (displayedKey === itemKey) {
      return;
    }

    clearCompleteTimer();

    const activeSlide = slideRef.current;
    if (activeSlide) {
      displayedItemRef.current = activeSlide.incoming;
      displayedKeyRef.current = activeSlide.incomingKey;
    }

    const fromKey = displayedKeyRef.current!;
    const fromItem = displayedItemRef.current!;
    const direction: SlideDirection =
      compareItemKeys(itemKey, fromKey) > 0 ? "down" : "up";

    setSlide({
      outgoing: fromItem,
      incoming: item,
      incomingKey: itemKey,
      direction,
    });
  }, [item, itemKey]);

  useLayoutEffect(() => {
    if (!slide) return;

    const outgoingLayer = outgoingLayerRef.current;
    const incomingLayer = incomingLayerRef.current;
    if (!outgoingLayer || !incomingLayer) return;

    const { direction } = slide;
    const incomingStart = direction === "down" ? 100 : -100;
    const outgoingEnd = direction === "down" ? -100 : 100;

    outgoingLayer.style.transition = "none";
    incomingLayer.style.transition = "none";
    setLayerTransform(outgoingLayer, 0);
    setLayerTransform(incomingLayer, incomingStart);

    void incomingLayer.offsetHeight;

    const transition = `transform ${transitionDuration}ms ${SLIDE_EASING}`;
    outgoingLayer.style.transition = transition;
    incomingLayer.style.transition = transition;
    setLayerTransform(outgoingLayer, outgoingEnd);
    setLayerTransform(incomingLayer, 0);

    clearCompleteTimer();
    completeTimerRef.current = window.setTimeout(() => {
      commitIncoming(slide.incoming, slide.incomingKey);
    }, transitionDuration);

    return () => {
      clearCompleteTimer();
    };
  }, [slide, transitionDuration]);

  useEffect(() => clearCompleteTimer, []);

  const slideTransitionStyle = {
    transitionDuration: `${transitionDuration}ms`,
    transitionTimingFunction: SLIDE_EASING,
    willChange: "transform" as const,
  };

  return (
    <div
      ref={followerRef}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-50 transition-opacity duration-200 ease-out ${
        item ? "opacity-100" : "opacity-0"
      } max-md:hidden`}
      style={{
        width,
        height,
        transform: "translate3d(-9999px, -9999px, 0)",
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-xl"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {slide ? (
          <>
            <div
              ref={outgoingLayerRef}
              className="absolute inset-0"
              style={slideTransitionStyle}
            >
              <PreviewImage item={slide.outgoing} width={width} height={height} />
            </div>
            <div
              ref={incomingLayerRef}
              className="absolute inset-0"
              style={slideTransitionStyle}
            >
              <PreviewImage item={slide.incoming} width={width} height={height} />
            </div>
          </>
        ) : displayedItem ? (
          <PreviewImage item={displayedItem} width={width} height={height} />
        ) : null}
      </div>
    </div>
  );
}

function defaultGetItemKey<T extends CursorHoverImageItem>(item: T) {
  if ("id" in item && item.id != null) {
    return item.id as string | number;
  }

  return item.image;
}

export function useCursorHoverImage<T extends CursorHoverImageItem>({
  width = 220,
  height = 140,
  offset = 20,
  rotation = 8,
  smoothness = 0.08,
  imageTransitionDuration = 600,
  getItemKey = defaultGetItemKey,
}: CursorHoverImageOptions<T> = {}) {
  const [hoveredItem, setHoveredItem] = useState<T | null>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: -9999, y: -9999 });
  const currentRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);
  const isTrackingRef = useRef(false);

  const getTargetPosition = (clientX: number, clientY: number) => ({
    x: clientX + offset,
    y: clientY - height / 3.5,
  });

  const updateTransform = (x: number, y: number) => {
    if (!followerRef.current) return;
    followerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const tick = () => {
    const target = targetRef.current;
    const current = currentRef.current;

    current.x += (target.x - current.x) * smoothness;
    current.y += (target.y - current.y) * smoothness;

    updateTransform(current.x, current.y);
    rafRef.current = requestAnimationFrame(tick);
  };

  const startTracking = () => {
    if (isTrackingRef.current) return;
    isTrackingRef.current = true;
    rafRef.current = requestAnimationFrame(tick);
  };

  const stopTracking = () => {
    isTrackingRef.current = false;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  useEffect(() => stopTracking, []);

  const setTarget = (clientX: number, clientY: number, snap = false) => {
    const position = getTargetPosition(clientX, clientY);
    targetRef.current = position;

    if (snap) {
      currentRef.current = { ...position };
      updateTransform(position.x, position.y);
    }

    startTracking();
  };

  const containerProps = {
    onMouseMove: (event: MouseEvent<HTMLElement>) => {
      setTarget(event.clientX, event.clientY);
    },
    onMouseLeave: () => {
      setHoveredItem(null);
      stopTracking();
    },
  };

  const getItemProps = (item: T) => ({
    onMouseEnter: (event: MouseEvent<HTMLElement>) => {
      setHoveredItem(item);
      setTarget(event.clientX, event.clientY, true);
    },
  });

  const preview: ReactNode = (
    <CursorHoverImagePreview
      item={hoveredItem}
      itemKey={hoveredItem ? getItemKey(hoveredItem) : null}
      width={width}
      height={height}
      rotation={rotation}
      transitionDuration={imageTransitionDuration}
      followerRef={followerRef}
    />
  );

  return { preview, containerProps, getItemProps };
}
