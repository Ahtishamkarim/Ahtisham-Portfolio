import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const primaryButtonClassName =
  "inline-flex cursor-pointer rounded-full border border-[#8da659] px-8 py-2 font-antonio text-[26px] leading-none text-[#ccff71] transition hover:border-[#ccff71] hover:bg-[#ccff71] hover:text-black";

type PrimaryButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  type?: never;
};

type PrimaryButtonSubmitProps = {
  href?: never;
  type?: Extract<ButtonHTMLAttributes<HTMLButtonElement>["type"], "button" | "submit">;
  children: ReactNode;
  className?: string;
};

type PrimaryButtonProps = PrimaryButtonLinkProps | PrimaryButtonSubmitProps;

export function PrimaryButton({
  href,
  type = "button",
  children,
  className = "",
}: PrimaryButtonProps) {
  const classNames = `${primaryButtonClassName} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classNames}>
      {children}
    </button>
  );
}
