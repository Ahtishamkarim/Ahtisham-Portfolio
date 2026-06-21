import type { FeaturedProjectsSectionData } from "@/types/featured-projects";
import baqidigital from "@/assets/projects/baqi.png";
import zhenghe from "@/assets/projects/zhenghe.svg";
import strangerus from "@/assets/projects/strangerus.png";

const projectImage =
  "https://framerusercontent.com/images/qrxY8NagVO40NBrdhFEGgFR3PYY.jpg";

export const featuredProjectsSectionData: FeaturedProjectsSectionData = {
  heading: "FEATURED PROJECTS",
  description:
    "A selection of recent work showcasing clean design, solid engineering, and real-world impact.",
  projects: [
    {
      id: "project-1",
      title: "Baqi Digital",
      description:
        "Headless e-commerce platform with real-time inventory, checkout flows, and admin analytics.",
      image: baqidigital.src,
      imageAlt: "Baqi Digital dashboard preview",
      tags: ["Next.js", "TypeScript", "Stripe"],
      link: "https://baqidigital.com",
    },
    {
      id: "project-2",
      title: "Zhenghe",
      description:
        "Patient portal for appointments, records, and telehealth with role-based access control.",
      image: zhenghe.src,
      imageAlt: "Zhenghe application preview",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "https://zh.com.sg",
    },
    {
      id: "project-3",
      title: "Strangerus",
      description:
        "Sales pipeline tool with automated follow-ups, team dashboards, and reporting exports.",
      image: strangerus.src,
      imageAlt: "Strangerus interface preview",
      tags: ["Next.js", "Prisma", "Tailwind"],
      link: "https://strangerus.com",
    },
    {
      id: "project-4",
      title: "Streamline SaaS",
      description:
        "Multi-tenant SaaS dashboard with billing, onboarding, and usage-based subscription tiers.",
      image: baqidigital.src,
      imageAlt: "Streamline SaaS product preview",
      tags: ["React", "GraphQL", "AWS"],
      link: "https://baqidigital.com",
    },
    {
      id: "project-5",
      title: "Zhenghe",
      description:
        "Property listing experience with map search, saved favorites, and agent lead capture.",
      image: zhenghe.src,
      imageAlt: "Zhenghe website preview",
      tags: ["Next.js", "Mapbox", "MongoDB"],
      link: "https://zh.com.sg",
    },
    {
      id: "project-6",
      title: "FinTrack Pro",
      description:
        "Personal finance app with budgeting, recurring expense tracking, and visual insights.",
      image: strangerus.src,
      imageAlt: "FinTrack Pro mobile and web preview",
      tags: ["React Native", "Firebase", "Chart.js"],
      link: "https://strangerus.com",
    },
    {
      id: "project-7",
      title: "Baqi Digital",
      description:
        "Learning management system with course modules, quizzes, progress tracking, and certificates.",
      image: baqidigital.src,
      imageAlt: "Baqi Digital platform preview",
      tags: ["Next.js", "Supabase", "MDX"],
      link: "https://baqidigital.com",
    },
    {
      id: "project-8",
      title: "Strangerus",
      description:
        "Internal tooling for deployment health, incident alerts, and service uptime monitoring.",
      image: strangerus.src,
      imageAlt: "Strangerus dashboard preview",
      tags: ["TypeScript", "Docker", "Grafana"],
      link: "https://strangerus.com",
    },
  ],
};
