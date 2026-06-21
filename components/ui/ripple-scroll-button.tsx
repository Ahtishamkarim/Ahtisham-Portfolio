"use client";

import { ChevronDown } from "lucide-react";
import { smoothScrollToSection } from "@/lib/smooth-scroll";

type RippleScrollButtonProps = {
  targetId?: string;
  ariaLabel?: string;
  className?: string;
};

export function RippleScrollButton({
  targetId = "services-section",
  ariaLabel = "Scroll to next section",
  className = "",
}: RippleScrollButtonProps) {
  const handleClick = () => {
    smoothScrollToSection(targetId);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#ccff71] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0f0f0f] ${className}`}
    >
      {/* Soft background glow */}
      <span
        className="absolute inset-2 rounded-full bg-[#ccff71]/15 blur-xl transition-all duration-500 group-hover:bg-[#ccff71]/30 group-hover:blur-2xl"
        aria-hidden
      />

      {/* Ripple rings */}
      <span
        className="absolute inset-1 rounded-full border border-[#ccff71]/50 animate-ping [animation-duration:2.8s]"
        aria-hidden
      />
      <span
        className="absolute inset-1 rounded-full border border-[#ccff71]/35 animate-ping [animation-delay:0.7s] [animation-duration:2.8s]"
        aria-hidden
      />
      <span
        className="absolute inset-1 rounded-full border border-[#ccff71]/25 animate-ping [animation-delay:1.4s] [animation-duration:2.8s]"
        aria-hidden
      />

      {/* Main button */}
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#ccff71]/80 bg-[#ccff71]/5 text-[#ccff71] shadow-[inset_0_0_18px_rgba(204,255,113,0.08),0_0_28px_rgba(204,255,113,0.18)] backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#ccff71] group-hover:bg-[#ccff71] group-hover:text-[#111111] group-hover:shadow-[0_0_38px_rgba(204,255,113,0.35)]">
        {/* Shine effect */}
        <span
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden
        />

        <ChevronDown
          className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
          aria-hidden
        />
      </span>
    </button>
  );
}