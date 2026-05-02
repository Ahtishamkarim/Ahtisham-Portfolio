import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({ href, children, className = "" }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex rounded-full border border-[#8da659] px-8 py-2 font-antonio text-[26px] leading-none text-[#ccff71] transition hover:border-[#ccff71] hover:bg-[#ccff71] hover:text-black ${className}`}
    >
      {children}
    </Link>
  );
}
