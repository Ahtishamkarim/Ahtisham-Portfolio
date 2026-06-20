export type ContactServiceOption = {
  value: string;
  label: string;
};

export type ContactSectionData = {
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  services: ContactServiceOption[];
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
  };
};
