import Image from "next/image";

import helloHand from "@/assets/hello.png";

type HeroHandCircleProps = {
  className?: string;
};

export function HeroHandCircle({ className = "" }: HeroHandCircleProps) {
  return (
    <div
      className={`flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-[#ccff71] shadow-[0_8px_24px_rgba(204,255,113,0.35)] ${className}`}
      aria-hidden
    >
      <Image
        src={helloHand}
        alt=""
        width={40}
        height={40}
        className="hand-wave h-10 w-10 object-contain"
        sizes="40px"
      />
    </div>
  );
}
