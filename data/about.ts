import type { AboutSectionData } from "@/types/about";
import { socialLinks } from "@/data/socials";

export const aboutSectionData: AboutSectionData = {
  heading: "ABOUT ME",
  description:
    "Hi, I'm Ahtisham — a software engineer focused on building impactful digital experiences with clean code and scalable architecture.",
  stats: [
    { value: "3+", label: "Years of Experience" },
    { value: "25+", label: "Completed Projects" },
    { value: "20+", label: "Clients Worldwide" },
  ],
  contacts: [
    { label: "Call Today", value: "+92 341 10888391", href: "tel:+9234110888391" },
    {
      label: "Email",
      value: "ahtisham.karim8391@gmail.com",
      href: "mailto:ahtisham.karim8391@gmail.com",
    },
  ],
  socials: socialLinks,
  ctaLabel: "MY STORY",
  ctaHref: "/about",
  image: "https://framerusercontent.com/images/qrxY8NagVO40NBrdhFEGgFR3PYY.jpg",
  imageAlt: "Portrait of Ahtisham",
};
