"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { HeroHandCircle } from "@/components/ui/hero-hand-circle";

type HeroImageBoxProps = {
  src: string;
  alt: string;
  backSrc: string;
  backAlt?: string;
  className?: string;
  stopAtId?: string;
  stopAnchor?: "start" | "center";
  stopOffset?: number;
};

export function HeroImageBox({
  src,
  alt,
  backSrc,
  backAlt = "Back image",
  className,
  stopAtId = "about-section",
  stopAnchor = "center",
  stopOffset = 0,
}: HeroImageBoxProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const handCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const box = boxRef.current;
    const handCircle = handCircleRef.current;
    if (!wrapper || !box) return;

    let frame = 0;
    let endScroll = window.innerHeight * 2;

    const measureEndScroll = () => {
      const stopEl = stopAtId ? document.getElementById(stopAtId) : null;
      if (stopEl) {
        const vh = window.innerHeight;
        const sectionTop =
          stopEl.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = stopEl.offsetHeight;

        if (stopAnchor === "center") {
          endScroll = sectionTop + sectionHeight / 2 - vh / 2;
        } else {
          endScroll = sectionTop;
        }

        endScroll += stopOffset;
        endScroll = Math.max(endScroll, vh);
      }
    };

    const update = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      if (scrollY > endScroll + vh * 1.5) {
        wrapper.style.visibility = "hidden";
        return;
      }

      wrapper.style.visibility = "visible";

      const journeyProgress = Math.min(Math.max(scrollY / endScroll, 0), 1);
      const progress = journeyProgress * 2;

      let rotation = 0;

      if (progress <= 1) {
        rotation = progress * 180;
      } else if (progress <= 2) {
        rotation = 180 + (progress - 1) * 180;
      } else {
        rotation = 360;
      }

      const moveProgress = Math.min(scrollY / vh, 1);
      const x = moveProgress * 24;
      const y = moveProgress * 6;

      let tilt = 0;

      if (progress <= 1) {
        tilt = progress * -6;
      } else if (progress <= 2) {
        const p = progress - 1;
        tilt = -6 + p * 12;
      } else {
        tilt = 6;
      }

      const pinOffsetY = scrollY > endScroll ? -(scrollY - endScroll) : 0;

      wrapper.style.transform =
        pinOffsetY !== 0 ? `translate3d(0, ${pinOffsetY}px, 0)` : "";

      box.style.transform = `translate3d(${x}vw, ${y}vh, 0) rotateY(${rotation}deg) rotateZ(${tilt}deg)`;

      if (handCircle) {
        const handFadeDistance = vh * 0.65;
        const handProgress = Math.min(scrollY / handFadeDistance, 1);
        const handOpacity = Math.max(0, 1 - handProgress);
        const handScale = Math.max(0, 1 - handProgress);

        handCircle.style.opacity = handOpacity.toFixed(3);
        handCircle.style.transform = `translateZ(48px) scale(${handScale.toFixed(3)})`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      measureEndScroll();
      update();
    };

    measureEndScroll();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [stopAtId, stopAnchor, stopOffset]);

  return (
    <div
      ref={wrapperRef}
      className={`pointer-events-none fixed inset-0 z-[30] flex items-center justify-center overflow-hidden hidden lg:flex ${
        className ?? ""
      }`}
      style={{ perspective: "1200px", willChange: "transform" }}
    >
      <div
        ref={boxRef}
        className="relative h-[476px] w-[340px] rounded-2xl"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 720px) 100vw, 33vw"
          />
        </div>

        <div
          className="absolute inset-0 overflow-hidden rounded-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Image
            src={backSrc}
            alt={backAlt}
            fill
            className="object-cover"
            sizes="(max-width: 720px) 100vw, 33vw"
          />
        </div>

        <div
          ref={handCircleRef}
          className="absolute -bottom-12 -left-14 z-10 origin-center"
          style={{
            backfaceVisibility: "visible",
            transformStyle: "preserve-3d",
          }}
        >
          <HeroHandCircle />
        </div>
      </div>
    </div>
  );
}
