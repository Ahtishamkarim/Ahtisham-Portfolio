import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projectCardSizing } from "@/config/project-card";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  tags: string[];
  link: string;
  /** Scroll view: image + title only. Grid view: full card. */
  compact?: boolean;
  /** Optional pixel offset — positive y moves the card down. */
  offset?: { x: number; y: number };
};

export function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  tags,
  link,
  compact = false,
  offset,
}: ProjectCardProps) {
  const cardWidth = projectCardSizing.width;
  const translateX = offset?.x ?? 0;
  const translateY = offset?.y ?? 0;

  return (
    <article
      className="group shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#1f1f1f] shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:border-[#ccff71]/40"
      style={{
        width: cardWidth,
        transform:
          translateX || translateY
            ? `translate(${translateX}px, ${translateY}px)`
            : undefined,
      }}
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col"
      >
        <div
          className={`relative overflow-hidden bg-[#2a2a2a] ${
            compact ? "aspect-[16/9]" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className="object-cover group-hover:scale-[1.04] motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out"
            sizes={`(max-width: 768px) 90vw, ${cardWidth}px`}
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-80" />
        </div>

        <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-5 md:p-6"}`}>
          <div className="flex items-start justify-between gap-3">
            <h3
              className={`font-antonio leading-tight text-white ${
                compact ? "text-[20px] md:text-[22px]" : "text-[26px] md:text-[28px]"
              }`}
            >
              {title}
            </h3>
            <ArrowUpRight
              className="mt-1 h-5 w-5 shrink-0 text-white/50 transition-colors duration-300 group-hover:text-[#ccff71]"
              aria-hidden
            />
          </div>

          {!compact && (
            <p className="mt-3 line-clamp-2 font-sans text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              {description}
            </p>
          )}

          {!compact && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-sans text-xs font-medium tracking-wide text-white/85"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </article>
  );
}
