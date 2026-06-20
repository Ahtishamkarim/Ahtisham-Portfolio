import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

import { footerData } from "@/data/footer";
import { AVATAR_URL } from "@/lib/constants";

export function Footer() {
  const {
    name,
    role,
    availability,
    headline,
    contacts,
    socials,
    copyright,
    backToTopLabel,
    ctaLabel,
    ctaHref,
  } = footerData;

  const primaryEmail = contacts[0];

  return (
    <footer className="relative overflow-hidden bg-[#0f0f0f] font-antonio">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ccff71]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(204,255,113,0.08),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#ccff71]">
              {availability}
            </p>
            <h2 className="mt-5 text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] text-white">
              {headline}
            </h2>
          </div>

          {primaryEmail && (
            <a
              href={primaryEmail.href}
              className="group inline-flex max-w-xl items-start gap-3 font-sans text-[clamp(1.1rem,2.2vw,1.75rem)] leading-snug text-white/75 transition hover:text-[#ccff71]"
            >
              <span className="break-all">{primaryEmail.value}</span>
              <ArrowUpRight
                className="mt-1 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          )}
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="overflow-hidden rounded-full border border-white/20">
                <Image
                  src={AVATAR_URL}
                  alt={name}
                  width={52}
                  height={52}
                  className="h-[52px] w-[52px] object-cover"
                />
              </div>
              <div>
                <p className="text-[20px] leading-tight text-white">{name}</p>
                <p className="font-sans text-sm text-white/55">{role}</p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" aria-hidden />

            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 font-sans text-sm text-white/80 transition hover:border-[#ccff71] hover:bg-[#ccff71]/10 hover:text-[#ccff71]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <Link
            href={ctaHref}
            className="inline-flex w-fit items-center justify-center rounded-full border border-[#8da659] px-8 py-3 font-antonio text-[22px] leading-none text-[#ccff71] transition hover:border-[#ccff71] hover:bg-[#ccff71] hover:text-black md:text-[24px]"
          >
            {ctaLabel}
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-sm text-white/45">{copyright}</p>

          <a
            href="#"
            className="inline-flex items-center gap-2 font-sans text-sm text-white/65 transition hover:text-[#ccff71]"
          >
            {backToTopLabel}
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:border-[#ccff71] hover:text-[#ccff71]">
              <ArrowUp className="h-4 w-4" aria-hidden />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
