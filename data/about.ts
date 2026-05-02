import type { AboutSectionData } from "@/types/about";

export const aboutSectionData: AboutSectionData = {
  heading: "ABOUT ME",
  description:
    "Hi, I'm Ahtisham — a software engineer focused on building impactful digital experiences with clean code and scalable architecture.",
  stats: [
    { value: "4+", label: "Years of Experience" },
    { value: "80+", label: "Completed Projects" },
    { value: "25+", label: "Clients Worldwide" },
  ],
  contacts: [
    { label: "Call Today", value: "+92 341 10888391", href: "tel:+9234110888391" },
    {
      label: "Email",
      value: "ahtisham.karim8391@gmail.com",
      href: "mailto:ahtisham.karim83@gmail.com",
    },
  ],
  socials: [
    { label: "X", href: "https://x.com" },
    { label: "IG", href: "https://instagram.com" },
    { label: "BE", href: "https://behance.net" },
    { label: "DB", href: "https://dribbble.com" },
  ],
  ctaLabel: "MY STORY",
  ctaHref: "/about",
  image: "https://framerusercontent.com/images/qrxY8NagVO40NBrdhFEGgFR3PYY.jpg",
  imageAlt: "Portrait of Ahtisham",
};
