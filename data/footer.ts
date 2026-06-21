import type { FooterData } from "@/types/footer";
import { socialLinks } from "@/data/socials";

export const footerData: FooterData = {
  name: "AHTISHAM KARIM",
  role: "Software Engineer",
  availability: "Available for freelance & collaborations",
  headline: "LET'S BUILD SOMETHING GREAT",
  contacts: [
    {
      label: "Email",
      value: "ahtisham.karim8391@gmail.com",
      href: "mailto:ahtisham.karim8391@gmail.com",
    },
    {
      label: "Phone",
      value: "+92 341 10888391",
      href: "tel:+9234110888391",
    },
  ],
  socials: socialLinks,
  copyright: "© 2026 Ahtisham Karim. All rights reserved.",
  backToTopLabel: "Back to top",
  ctaLabel: "START A PROJECT",
  ctaHref: "/#contact",
};
