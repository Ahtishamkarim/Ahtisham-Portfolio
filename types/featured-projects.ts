export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  link: string;
};

export type FeaturedProjectsSectionData = {
  heading: string;
  description: string;
  projects: Project[];
};
