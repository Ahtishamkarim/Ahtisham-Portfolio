import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const primaryButtonClassName =
  "inline-flex cursor-pointer rounded-full border border-[#8da659] px-8 py-2 font-antonio text-[26px] leading-none text-[#ccff71] transition hover:border-[#ccff71] hover:bg-[#ccff71] hover:text-black disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-[#8da659] disabled:hover:bg-transparent disabled:hover:text-[#ccff71]";

type PrimaryButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  type?: never;
  disabled?: never;
};

type PrimaryButtonSubmitProps = {
  href?: never;
  type?: Extract<ButtonHTMLAttributes<HTMLButtonElement>["type"], "button" | "submit">;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

type PrimaryButtonProps = PrimaryButtonLinkProps | PrimaryButtonSubmitProps;

export function PrimaryButton({
  href,
  type = "button",
  children,
  className = "",
  disabled,
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
    <button type={type} className={classNames} disabled={disabled}>
      {children}
    </button>
  );
}
