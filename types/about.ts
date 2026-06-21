export type AboutStat = {
  value: string;
  label: string;
};

export type AboutContact = {
  label: string;
  value: string;
  href: string;
};

export type AboutSocialIcon = "linkedin" | "github" | "twitter" | "instagram";

export type AboutSocial = {
  icon: AboutSocialIcon;
  label: string;
  href: string;
};

export type AboutSectionData = {
  heading: string;
  description: string;
  stats: AboutStat[];
  contacts: AboutContact[];
  socials: AboutSocial[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};
