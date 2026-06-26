"use client";

import { useEffect, useState } from "react";

import {
  getProjectCardSizing,
  projectCardSizing,
  type ProjectCardSizeConfig,
} from "@/config/project-card";
import { getTailwindBreakpoint, tailwindBreakpointQueries } from "@/lib/breakpoints";

function resolveProjectCardSizing(): ProjectCardSizeConfig {
  return getProjectCardSizing(getTailwindBreakpoint());
}

export function useProjectCardSizing() {
  // Always match SSR: never read window during the initial render.
  const [sizing, setSizing] = useState<ProjectCardSizeConfig>(
    projectCardSizing.base,
  );

  useEffect(() => {
    const update = () => {
      setSizing(resolveProjectCardSizing());
    };

    update();

    const mediaQueries = Object.values(tailwindBreakpointQueries).map((query) =>
      window.matchMedia(query),
    );

    const onChange = () => update();

    mediaQueries.forEach((mq) => mq.addEventListener("change", onChange));
    window.addEventListener("resize", onChange);

    return () => {
      mediaQueries.forEach((mq) => mq.removeEventListener("change", onChange));
      window.removeEventListener("resize", onChange);
    };
  }, []);

  return sizing;
}
