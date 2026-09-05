"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL_COUNT = 10;

function isFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export function CursorTrail() {
  const pointsRef = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 })),
  );
  const mouseRef = useRef({ x: 0, y: 0 });
  const dotsRef = useRef<Array<HTMLSpanElement | null>>([]);
  const visibleRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const rippleIdRef = useRef(0);
  const [enabled, setEnabled] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;

    setEnabled(true);

    const tick = () => {
      const mouse = mouseRef.current;
      const points = pointsRef.current;
      const visible = visibleRef.current;

      points[0].x += (mouse.x - points[0].x) * 0.45;
      points[0].y += (mouse.y - points[0].y) * 0.45;

      for (let i = 1; i < TRAIL_COUNT; i++) {
        const lag = 0.22 - i * 0.01;
        points[i].x += (points[i - 1].x - points[i].x) * lag;
        points[i].y += (points[i - 1].y - points[i].y) * lag;
      }

      dotsRef.current.forEach((dot, index) => {
        if (!dot) return;
        const point = points[index];
        dot.style.opacity = visible ? String(1 - index * 0.08) : "0";
        dot.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };

      if (!visibleRef.current) {
        visibleRef.current = true;
        pointsRef.current.forEach((point) => {
          point.x = event.clientX;
          point.y = event.clientY;
        });
      }
    };

    const hide = () => {
      visibleRef.current = false;
    };

    const onClick = (event: MouseEvent) => {
      const id = rippleIdRef.current++;
      const ripple = { id, x: event.clientX, y: event.clientY };
      setRipples((current) => [...current, ripple]);
      window.setTimeout(() => {
        setRipples((current) => current.filter((item) => item.id !== id));
      }, 700);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", hide);
    window.addEventListener("click", onClick);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("click", onClick);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-9999 hidden md:block">
      {Array.from({ length: TRAIL_COUNT }, (_, index) => (
        <span
          key={index}
          ref={(node) => {
            dotsRef.current[index] = node;
          }}
          className="absolute top-0 left-0 rounded-full bg-[#ccff71]"
          style={{
            width: `${18 - index * 1.4}px`,
            height: `${18 - index * 1.4}px`,
            opacity: 0,
            filter: "blur(0.4px)",
            boxShadow: "0 0 12px rgba(204, 255, 113, 0.35)",
          }}
        />
      ))}

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="cursor-click-ripple absolute rounded-full border border-[#ccff71]"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </div>
  );
}
