"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/data/navigation";
import { CONTACT_ROUTE } from "@/lib/constants";
import { handleSmoothSectionNavClick } from "@/lib/smooth-scroll";
import impageicon from "@/assets/pic.jpeg";

const MENU_EASE = "ease-[cubic-bezier(0.19,1,0.22,1)]";

function MenuIcon() {
  return (
    <span className="flex flex-col items-center justify-center gap-1.5" aria-hidden>
      <span className="block h-0.5 w-4 rounded-full bg-black" />
      <span className="block h-0.5 w-4 rounded-full bg-black" />
    </span>
  );
}

function CloseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 1L13 13M13 1L1 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleNavClick = (
    event: { preventDefault: () => void },
    href: string,
  ) => {
    handleSmoothSectionNavClick(event, href, pathname);
    setIsOpen(false);
  };

  return (
    <header className="relative z-50 w-full px-3 pt-5 md:hidden">
      {isOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsOpen(false)}
        />
      ) : null}

      {/* Keeps page layout height fixed so the open menu never pushes content down */}
      <div className="mx-auto h-14 w-full max-w-xs" aria-hidden />

      <nav
        className={`fixed inset-x-3 top-5 z-50 mx-auto flex w-[calc(100%-1.5rem)] max-w-xs flex-col overflow-hidden rounded-[28px] bg-black/90 p-2 backdrop-blur-[5px] transition-shadow duration-300 ${MENU_EASE} ${
          isOpen ? "shadow-[0_24px_60px_rgba(0,0,0,0.45)]" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="shrink-0 overflow-hidden rounded-full border border-white/80">
            <Image
              src={impageicon}
              alt="Portfolio Creator Avatar"
              width={40}
              height={40}
              className="h-10 w-10 object-cover"
              priority
            />
          </div>

          <div
            className={`flex min-w-0 flex-1 items-center justify-center gap-3 transition-all duration-300 ${MENU_EASE} ${
              isOpen
                ? "pointer-events-none max-w-0 opacity-0"
                : "max-w-full opacity-100"
            }`}
          >
            <span className="truncate font-light text-white">
              Available for work
            </span>
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-green-500"
              aria-hidden
            />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ccff71] text-black transition-opacity hover:opacity-90"
          >
            <span
              className={`transition-transform duration-300 ${MENU_EASE} ${
                isOpen ? "rotate-90 scale-95" : "rotate-0 scale-100"
              }`}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </span>
          </button>
        </div>

        <div
          className={`grid transition-all duration-500 ${MENU_EASE} ${
            isOpen
              ? "pointer-events-auto visible grid-rows-[1fr] opacity-100"
              : "pointer-events-none invisible grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col items-center gap-10 py-8">
              {NAV_ITEMS.map((item, index) => (
                <li
                  key={item.href}
                  className={`transition-all duration-500 ${MENU_EASE} ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${80 + index * 50}ms` : "0ms",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className="font-light text-white transition-colors hover:text-[#ccff71]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className={`flex justify-center pb-2 transition-all duration-500 ${MENU_EASE} ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen
                  ? `${80 + NAV_ITEMS.length * 50}ms`
                  : "0ms",
              }}
            >
              <Link
                href={CONTACT_ROUTE}
                onClick={(event) => handleNavClick(event, CONTACT_ROUTE)}
                className="rounded-full bg-[#ccff71] px-6 py-1.5 font-light text-black transition-opacity hover:opacity-90"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
