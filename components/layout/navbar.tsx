"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/data/navigation";
import { AVATAR_URL, CONTACT_ROUTE } from "@/lib/constants";
import { handleSmoothSectionNavClick } from "@/lib/smooth-scroll";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full px-3 pt-5 md:px-8">
      <nav className="mx-auto flex w-full max-w-lg items-center rounded-[28px] bg-black p-2">
        <div className="overflow-hidden rounded-full border border-white/80">
          <Image
            src={AVATAR_URL}
            alt="Portfolio Creator Avatar"
            width={40}
            height={40}
            className="h-10 w-10 object-cover"
            priority
          />
        </div>

        <ul className="flex flex-1 justify-center items-center gap-5 px-1 leading-[24px] font-light">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(event) =>
                  handleSmoothSectionNavClick(event, item.href, pathname)
                }
                className={`group relative py-3 transition duration-300 ${
                  pathname === item.href ? "text-white" : "text-white"
                }`}
              >
                <span className="relative block overflow-hidden">
                  <span className="block transition-transform duration-[1125ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-6">
                    {item.label}
                  </span>
                  <span className="absolute left-0 top-6 block text-[#ccff71] transition-all duration-[1125ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                    {item.label}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={CONTACT_ROUTE}
          onClick={(event) =>
            handleSmoothSectionNavClick(event, CONTACT_ROUTE, pathname)
          }
          className="rounded-full bg-white px-8 py-2 font-light text-black transition-colors duration-300 hover:bg-[#ccff71]"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
