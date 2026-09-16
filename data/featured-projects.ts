import type { FeaturedProjectsSectionData } from "@/types/featured-projects";
import baqidigital from "@/assets/projects/baqi.png";
import zhenghe from "@/assets/projects/zhenghe.svg";
import strangerus from "@/assets/projects/strangerus.png";
import citeready from "@/assets/projects/citeready.png";
import medplum from "@/assets/projects/medplum.png";
import homestead from "@/assets/projects/homestead.png";
import grandrapidcarservice from "@/assets/projects/grandrapidcarservice.png";
import myeasyjunkremoval from "@/assets/projects/myeasyjunkremoval.png";

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
      title: "CiteReady",
      description:
        "AI search visibility audit that scores how engines crawl, cite, and rank a site — then ships prioritized fixes.",
      image: citeready.src,
      imageAlt: "CiteReady AI search visibility audit preview",
      tags: ["Next.js", "TypeScript", "AI Search"],
      link: "https://tryciteready.com/",
    },
    {
      id: "project-5",
      title: "Medplum",
      description:
        "Open source developer platform for building and running modern healthcare apps on FHIR-native infrastructure.",
      image: medplum.src,
      imageAlt: "Medplum healthcare platform preview",
      tags: ["React", "TypeScript", "FHIR"],
      link: "https://www.medplum.com/",
    },
    {
      id: "project-6",
      title: "Homestead Entertainment",
      description:
        "Independent film distribution site for movies, TV, and digital content with catalog, trailers, and submissions.",
      image: homestead.src,
      imageAlt: "Homestead Entertainment website preview",
      tags: ["WordPress", "PHP", "JavaScript"],
      link: "https://homesteadentertainment.com/",
    },
    {
      id: "project-7",
      title: "Grand Rapid Car Service",
      description:
        "Luxury black car and airport transportation site with online booking, fleet details, and service coverage.",
      image: grandrapidcarservice.src,
      imageAlt: "Grand Rapid Car Service website preview",
      tags: ["WordPress", "PHP", "JavaScript"],
      link: "https://grandrapidcarservice.com/",
    },
    {
      id: "project-8",
      title: "My Easy Junk Removal",
      description:
        "Nationwide junk removal marketplace where homeowners and businesses get instant quotes from verified local haulers.",
      image: myeasyjunkremoval.src,
      imageAlt: "My Easy Junk Removal website preview",
      tags: ["Next.js", "TypeScript", "Marketplace"],
      link: "https://myeasyjunkremoval.com/",
    },
  ],
};
