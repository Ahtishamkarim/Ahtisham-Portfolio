"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroImageBoxProps = {
  src: string;
  alt: string;
  backSrc: string;
  backAlt?: string;
  className?: string;
};

export function HeroImageBox({
  src,
  alt,
  backSrc,
  backAlt = "Back image",
  className,
}: HeroImageBoxProps) {
  const [styles, setStyles] = useState({
    rotation: 0,
    x: 0,
    y: 0,
    tilt: 0,
  });

  useEffect(() => {
    let frame: number;

    const update = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const progress = scrollY / vh;

      let rotation = 0;

      if (progress <= 1) {
        rotation = progress * 180;
      } else if (progress <= 2) {
        rotation = 180 + (progress - 1) * 180;
      } else {
        rotation = 360;
      }

      const moveProgress = Math.min(progress, 1);

      const x = moveProgress * 24;
      const y = moveProgress * 6;

      // ✅ Tilt logic (this is the main change)
      let tilt = 0;

      if (progress <= 1) {
        tilt = progress * -6; // left tilt
      } else if (progress <= 2) {
        const p = progress - 1;
        tilt = -6 + p * 12; // -6 → +6
      } else {
        tilt = 6; // right tilt locked
      }

      setStyles({ rotation, x, y, tilt });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[30] flex items-center justify-center ${
        className ?? ""
      }`}
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-[476px] w-[340px] rounded-2xl"
        style={{
          transformStyle: "preserve-3d",
          transform: `
            translate3d(${styles.x}vw, ${styles.y}vh, 0)
            rotateY(${styles.rotation}deg)
            rotateZ(${styles.tilt}deg)
          `,
          transition: "transform 0.08s linear",
        }}
      >
        {/* Front */}
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

        {/* Back */}
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
      </div>
    </div>
  );
}