import type { Metadata } from "next";
import { Antonio, Inter } from "next/font/google";
import { CursorTrail } from "@/components/ui/cursor-trail";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ahtisham Karim | Software Engineer",
    template: "%s | Ahtisham Karim",
  },
  description:
    "Portfolio of Ahtisham Karim — a software engineer building scalable web applications, clean interfaces, and impactful digital experiences.",
  keywords: [
    "Ahtisham Karim",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Ahtisham Karim" }],
  creator: "Ahtisham Karim",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ahtisham Karim | Software Engineer",
    description:
      "Software engineer focused on building scalable systems, clean code, and impactful digital experiences.",
    siteName: "Ahtisham Karim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahtisham Karim | Software Engineer",
    description:
      "Software engineer focused on building scalable systems, clean code, and impactful digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${antonio.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} min-h-full flex flex-col`}
        suppressHydrationWarning
      >
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
