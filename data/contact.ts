import type { ContactSectionData } from "@/types/contact";
import { heroData } from "@/data/hero";

export const contactSectionData: ContactSectionData = {
  heading: "LET'S WORK TOGETHER",
  description:
    "Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.",
  image: heroData.image,
  imageAlt: heroData.imageAlt,
  services: [
    { value: "frontend", label: "Frontend Development" },
    { value: "backend", label: "Backend Development" },
    { value: "full-stack", label: "Full-Stack Solutions" },
    { value: "maintenance", label: "Maintenance & Support" },
    { value: "other", label: "Other" },
  ],
  form: {
    nameLabel: "Name",
    namePlaceholder: "John Smith",
    emailLabel: "Email",
    emailPlaceholder: "johnsmith@gmail.com",
    serviceLabel: "Service Needed?",
    servicePlaceholder: "Select...",
    messageLabel: "What Can I Help You...",
    messagePlaceholder: "Hello, I'd like to enquire about...",
    submitLabel: "SUBMIT",
  },
};
