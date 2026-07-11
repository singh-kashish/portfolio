import { useEffect } from "react";

export function usePageGlow() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--glow-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--glow-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
}

export function useCardGlow(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [ref]);
}
