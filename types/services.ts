export type ServiceItem = {
  id: number;
  title: string;
  points: string[];
};

export type ServicesSectionData = {
  heading: string;
  description: string;
  services: ServiceItem[];
  primaryImage: string;
  primaryImageAlt: string;
};
