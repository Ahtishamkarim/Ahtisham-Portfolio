import type { TestimonialsSectionData } from "@/types/testimonials";

export const testimonialsSectionData: TestimonialsSectionData = {
  heading: "CLIENT TESTIMONIALS",
  description:
    "Real feedback from founders, product teams, and business owners I've worked with on web products and digital experiences.",
  highlights: [
    {
      id: "highlight-satisfaction",
      topText:
        "I've worked with 20+ happy clients.",
      value: "98%",
      label: "Satisfaction Rate",
      backgroundColor: "#ffffff",
    },
    {
      id: "highlight-growth",
      topText:
        "My work has helped clients grow their revenue by 200%",
      value: "200%",
      label: "Growth",
      backgroundColor: "#ccff71",
    },
  ],
  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "Ahtisham delivered a polished Next.js platform ahead of schedule. Communication was clear, the code quality was excellent, and every revision was handled quickly.",
      name: "Sarah Mitchell",
      role: "Founder",
      company: "Nova Commerce",
    },
    {
      id: "testimonial-2",
      quote:
        "He understood our product vision immediately and translated it into a fast, scalable frontend. Our users noticed the performance improvements right away.",
      name: "James Porter",
      role: "Product Manager",
      company: "Pulse Health",
    },
    {
      id: "testimonial-4",
      quote:
        "From planning to deployment, the process felt smooth and professional. He proactively suggested improvements that saved us time and reduced future tech debt.",
      name: "David Chen",
      role: "CTO",
      company: "Streamline SaaS",
    },
    {
      id: "testimonial-5",
      quote:
        "Great eye for UI and strong engineering fundamentals. The property platform looks premium, loads fast, and is simple for our team to extend.",
      name: "Amira Khan",
      role: "Marketing Director",
      company: "Urban Estates",
    },
  ],
};
