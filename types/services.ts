export type ServiceItem = {
  id: number;
  title: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export type ServicesSectionData = {
  heading: string;
  description: string;
  services: ServiceItem[];
  primaryImage: string;
  primaryImageAlt: string;
};
