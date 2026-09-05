"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Ballpit = dynamic(() => import("@/components/ui/ballpit"), {
  ssr: false,
});

const BALLPIT_COLORS = [
  // 0xccff71,
  // 0xccff71,
  // 0xccff71,
  // 0xffffff,
  // 0x8a8a8a,
  // 0x000000,

  0x8da659,
  0xccff71,
  0x8da659,
  0xffffff,
  0x8a8a8a,
  0x000000,
];

export function BallpitBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      <Ballpit
        className="h-full w-full"
        count={90}
        gravity={0.01}
        friction={0.9975}
        wallBounce={0.95}
        followCursor={false}
        colors={BALLPIT_COLORS}
      />
    </div>
  );
}
