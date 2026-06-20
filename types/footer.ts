export type FooterSocial = {
  label: string;
  href: string;
};

export type FooterContact = {
  label: string;
  value: string;
  href: string;
};

export type FooterData = {
  name: string;
  role: string;
  availability: string;
  headline: string;
  contacts: FooterContact[];
  socials: FooterSocial[];
  copyright: string;
  backToTopLabel: string;
  ctaLabel: string;
  ctaHref: string;
};
