"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
    return savedTheme ?? getSystemTheme();
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const isLight = theme === "light";

  const handleToggle = () => {
    const nextTheme: Theme = isLight ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      aria-pressed={isLight}
      className="relative inline-flex h-6 w-12 items-center rounded-full bg-[#ccff71] p-1 transition-all duration-300 cursor-pointer"
    >
      <span
        className={`h-4 w-4 rounded-full bg-[#2f3139] transition-transform duration-300 ${
          isLight ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
