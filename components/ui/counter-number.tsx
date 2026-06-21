"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ElementType,
} from "react";

type ParsedCounterValue = {
  target: number;
  suffix: string;
  isNumeric: boolean;
};

type CounterNumberProps = {
  value: string;
  duration?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
};

function parseCounterValue(value: string): ParsedCounterValue {
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    return { target: 0, suffix: value, isNumeric: false };
  }

  return {
    target: Number.parseInt(match[1], 10),
    suffix: match[2],
    isNumeric: true,
  };
}

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

export function CounterNumber({
  value,
  duration = 1800,
  className = "",
  as: Component = "span",
  threshold = 0.35,
}: CounterNumberProps) {
  const parsed = useMemo(() => parseCounterValue(value), [value]);
  const elementRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [displayValue, setDisplayValue] = useState(
    parsed.isNumeric ? `0${parsed.suffix}` : value,
  );

  useEffect(() => {
    if (!parsed.isNumeric) {
      setDisplayValue(value);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const initialValue = `0${parsed.suffix}`;

    const cancelAnimation = () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const resetCounter = () => {
      cancelAnimation();
      setDisplayValue(initialValue);
    };

    const startAnimation = () => {
      cancelAnimation();
      setDisplayValue(initialValue);

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentCount = Math.round(easedProgress * parsed.target);

        setDisplayValue(`${currentCount}${parsed.suffix}`);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          animationFrameRef.current = null;
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          startAnimation();
          return;
        }

        resetCounter();
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimation();
    };
  }, [duration, parsed, threshold, value]);

  return (
    <Component ref={elementRef} className={className}>
      {displayValue}
    </Component>
  );
}
