"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProjectCard } from "@/components/ui/project-card";
import {
  getProjectCardOffset,
  projectCardPairWidth,
  projectCardSizing,
} from "@/config/project-card";
import { featuredProjectsSectionData } from "@/data/featured-projects";
import type { Project } from "@/types/featured-projects";

gsap.registerPlugin(ScrollTrigger);

function chunkProjects(projects: Project[], size: number): Project[][] {
  const chunks: Project[][] = [];
  for (let i = 0; i < projects.length; i += size) {
    chunks.push(projects.slice(i, i + size));
  }
  return chunks;
}

function FeaturedProjectsHeader({ centered = false }: { centered?: boolean }) {
  return (
    <header
      className={
        centered
          ? "mx-auto w-full max-w-3xl min-w-0 px-4 text-center md:px-8"
          : "mx-auto max-w-3xl shrink-0 px-4 pb-6 pt-10 text-center md:px-8 md:pb-8 md:pt-12"
      }
    >
      <h2 className="break-words">{featuredProjectsSectionData.heading}</h2>
      <p className="mt-4">{featuredProjectsSectionData.description}</p>
    </header>
  );
}

function FeaturedProjectsStatic({ className = "" }: { className?: string }) {
  const { projects } = featuredProjectsSectionData;

  return (
    <section
      className={`relative w-full bg-[#141414] py-16 font-antonio sm:py-20 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,113,0.06),transparent_55%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <FeaturedProjectsHeader />
        <ul className="mt-4 flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center lg:gap-8">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                tags={project.tags}
                link={project.link}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function killFeaturedScrollTriggers(section: HTMLElement) {
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger === section || trigger.pin === section) {
      trigger.kill(true);
    }
  });
}

function PinnedFeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const pairs = useMemo(
    () => chunkProjects(featuredProjectsSectionData.projects, 2),
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track || pairs.length === 0) return;

    let ctx: gsap.Context | undefined;
    let frame = 0;

    const pairSlides = track.querySelectorAll<HTMLElement>("[data-pair-slide]");

    const syncSlideHeights = () => {
      const height = pin.offsetHeight;
      pairSlides.forEach((slide) => {
        slide.style.height = `${height}px`;
      });
    };

    const setup = () => {
      killFeaturedScrollTriggers(section);
      syncSlideHeights();

      ctx = gsap.context(() => {
        const stepCount = pairs.length;

        gsap.to(track, {
          y: () => -pin.offsetHeight * stepCount,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () =>
              `+=${pin.offsetHeight * stepCount + window.innerHeight * 0.25}`,
            pin,
            pinReparent: false,
            scrub: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });
      }, section);
    };

    frame = requestAnimationFrame(setup);

    const onRefreshInit = () => syncSlideHeights();
    ScrollTrigger.addEventListener("refreshInit", onRefreshInit);
    window.addEventListener("resize", syncSlideHeights);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", syncSlideHeights);
      ScrollTrigger.removeEventListener("refreshInit", onRefreshInit);
      ctx?.revert();
      killFeaturedScrollTriggers(section);
      gsap.set(track, { clearProps: "transform" });
    };
  }, [pairs.length]);

  return (
    <section
      ref={sectionRef}
      id="featured-projects"
      className="relative w-full max-w-full bg-[#141414] font-antonio"
    >
      <div
        ref={pinRef}
        className="relative h-svh w-full max-w-full overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,113,0.06),transparent_55%)]" />

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 md:px-8">
          <FeaturedProjectsHeader centered />
        </div>

        <div className="absolute inset-0 z-20 overflow-hidden">
          <div
            ref={trackRef}
            className="w-full max-w-full transform-gpu will-change-transform"
          >
            <div data-pair-slide aria-hidden="true" />

            {pairs.map((pair, index) => (
              <div
                key={`pair-${index}`}
                data-pair-slide
                className="flex w-full items-end justify-center px-4 pb-[46vh] md:px-8 md:pb-[44vh]"
              >
                <ul
                  className="flex shrink-0 items-stretch justify-center"
                  style={{
                    width: projectCardPairWidth,
                    gap: projectCardSizing.gap,
                  }}
                >
                  {pair.map((project, cardIndex) => (
                    <li key={project.id} className="pointer-events-auto">
                      <ProjectCard
                        compact
                        offset={getProjectCardOffset(index, cardIndex as 0 | 1)}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        imageAlt={project.imageAlt}
                        tags={project.tags}
                        link={project.link}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getPinnedScrollEnabled() {
  if (typeof window === "undefined") return false;

  return (
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !window.matchMedia("(max-width: 768px)").matches
  );
}

export default function FeaturedProjects() {
  const [usePinnedScroll, setUsePinnedScroll] = useState(false);

  useEffect(() => {
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = window.matchMedia("(max-width: 768px)");

    const update = () => {
      const next = getPinnedScrollEnabled();
      setUsePinnedScroll((current) => {
        if (current === next) return current;

        const section = document.getElementById("featured-projects");
        if (section) {
          killFeaturedScrollTriggers(section);
        }

        return next;
      });
    };

    setUsePinnedScroll(getPinnedScrollEnabled());

    reducedMq.addEventListener("change", update);
    mobileMq.addEventListener("change", update);

    return () => {
      reducedMq.removeEventListener("change", update);
      mobileMq.removeEventListener("change", update);

      const section = document.getElementById("featured-projects");
      if (section) {
        killFeaturedScrollTriggers(section);
      }
    };
  }, []);

  return (
    <>
      <FeaturedProjectsStatic className="md:hidden" />

      <div className="hidden max-w-full overflow-x-clip md:block">
        {usePinnedScroll ? (
          <PinnedFeaturedProjects key="featured-pinned" />
        ) : (
          <FeaturedProjectsStatic key="featured-static" />
        )}
      </div>
    </>
  );
}
