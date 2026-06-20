export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type FaqSectionData = {
  heading: string;
  description: string;
  items: FaqItem[];
};
