export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type TestimonialHighlight = {
  id: string;
  topText: string;
  value: string;
  label: string;
  backgroundColor?: string;
};

export type TestimonialsSectionData = {
  heading: string;
  description: string;
  highlights: TestimonialHighlight[];
  testimonials: Testimonial[];
};
