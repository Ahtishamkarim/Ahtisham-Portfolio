import type { FeaturedProjectsSectionData } from "@/types/featured-projects";

const projectImage =
  "https://framerusercontent.com/images/qrxY8NagVO40NBrdhFEGgFR3PYY.jpg";

export const featuredProjectsSectionData: FeaturedProjectsSectionData = {
  heading: "FEATURED PROJECTS",
  description:
    "A selection of recent work showcasing clean design, solid engineering, and real-world impact.",
  projects: [
    {
      id: "project-1",
      title: "Nova Commerce",
      description:
        "Headless e-commerce platform with real-time inventory, checkout flows, and admin analytics.",
      image: projectImage,
      imageAlt: "Nova Commerce dashboard preview",
      tags: ["Next.js", "TypeScript", "Stripe"],
      link: "https://example.com/nova-commerce",
    },
    {
      id: "project-2",
      title: "Pulse Health",
      description:
        "Patient portal for appointments, records, and telehealth with role-based access control.",
      image: projectImage,
      imageAlt: "Pulse Health application preview",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "https://example.com/pulse-health",
    },
    {
      id: "project-3",
      title: "Atlas CRM",
      description:
        "Sales pipeline tool with automated follow-ups, team dashboards, and reporting exports.",
      image: projectImage,
      imageAlt: "Atlas CRM interface preview",
      tags: ["Next.js", "Prisma", "Tailwind"],
      link: "https://example.com/atlas-crm",
    },
    {
      id: "project-4",
      title: "Streamline SaaS",
      description:
        "Multi-tenant SaaS dashboard with billing, onboarding, and usage-based subscription tiers.",
      image: projectImage,
      imageAlt: "Streamline SaaS product preview",
      tags: ["React", "GraphQL", "AWS"],
      link: "https://example.com/streamline-saas",
    },
    {
      id: "project-5",
      title: "Urban Estates",
      description:
        "Property listing experience with map search, saved favorites, and agent lead capture.",
      image: projectImage,
      imageAlt: "Urban Estates website preview",
      tags: ["Next.js", "Mapbox", "MongoDB"],
      link: "https://example.com/urban-estates",
    },
    {
      id: "project-6",
      title: "FinTrack Pro",
      description:
        "Personal finance app with budgeting, recurring expense tracking, and visual insights.",
      image: projectImage,
      imageAlt: "FinTrack Pro mobile and web preview",
      tags: ["React Native", "Firebase", "Chart.js"],
      link: "https://example.com/fintrack-pro",
    },
    {
      id: "project-7",
      title: "LearnHub LMS",
      description:
        "Learning management system with course modules, quizzes, progress tracking, and certificates.",
      image: projectImage,
      imageAlt: "LearnHub LMS platform preview",
      tags: ["Next.js", "Supabase", "MDX"],
      link: "https://example.com/learnhub",
    },
    {
      id: "project-8",
      title: "DevOps Monitor",
      description:
        "Internal tooling for deployment health, incident alerts, and service uptime monitoring.",
      image: projectImage,
      imageAlt: "DevOps Monitor dashboard preview",
      tags: ["TypeScript", "Docker", "Grafana"],
      link: "https://example.com/devops-monitor",
    },
  ],
};
