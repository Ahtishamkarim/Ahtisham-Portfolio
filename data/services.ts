import type { ServicesSectionData } from "@/types/services";
import frontendImage from "@/assets/frontend.png";
import backendImage from "@/assets/backend.jpg";
import fullStackImage from "@/assets/full-stack.jpg";
import maintenanceImage from "@/assets/maintainance.jpg";

export const servicesSectionData: ServicesSectionData = {
  heading: "WHAT I CAN DO FOR YOU",
  description:
    "I build reliable digital products with clean architecture, strong performance, and maintainable code.",
  services: [
    {
      id: 1,
      title: "FRONTEND DEVELOPMENT",
      points: [
        "Responsive interfaces using React, Next.js, and TypeScript",
        "Reusable component systems with clean state management",
        "Pixel-perfect implementation from Figma/Framer designs",
      ],
      image: frontendImage.src,
      imageAlt: "Frontend development workspace",
    },
    {
      id: 2,
      title: "BACKEND DEVELOPMENT",
      points: [
        "REST API development with secure authentication flows",
        "Database design, query optimization, and schema planning",
        "Server-side logic built for scalability and reliability",
      ],
      image: backendImage.src,
      imageAlt: "Backend development setup",
    },
    {
      id: 3,
      title: "FULL-STACK SOLUTIONS",
      points: [
        "End-to-end web app development from idea to deployment",
        "Integration of frontend, backend, and third-party services",
        "Performance tuning, SEO improvements, and accessibility",
        "CI/CD setup and production-ready deployment workflows",
      ],
      image: fullStackImage.src,
      imageAlt: "Full-stack project preview",
    },
    {
      id: 4,
      title: "MAINTENANCE & SUPPORT",
      points: [
        "Bug fixing and long-term codebase maintenance",
        "Refactoring legacy code for readability and stability",
        "Feature enhancements based on user and business needs",
      ],
      image: maintenanceImage.src,
      imageAlt: "Code maintenance and support",
    },
  ],
  primaryImage: "https://framerusercontent.com/images/qrxY8NagVO40NBrdhFEGgFR3PYY.jpg",
  primaryImageAlt: "Software engineering workstation setup",
};
