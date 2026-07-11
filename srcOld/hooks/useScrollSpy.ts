"use client";
import { useEffect, useState } from "react";
import type { Section } from "../utils/data.portfolio";

export function useScrollSpy(containerRef: React.RefObject<HTMLElement | null>) {
  const [active, setActive] = useState<Section>("about");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handler = () => {
      const sections = ["about", "experience", "projects"] as Section[];
      let current: Section = "about";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 120 <= container.scrollTop) current = id;
      }
      setActive(current);
    };

    container.addEventListener("scroll", handler, { passive: true });
    return () => container.removeEventListener("scroll", handler);
  }, [containerRef]);

  const scrollTo = (section: Section) => {
    const container = containerRef.current;
    const el = document.getElementById(section);
    if (!el || !container) return;
    container.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  };

  return { active, scrollTo };
}
