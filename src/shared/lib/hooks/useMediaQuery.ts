"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    queueMicrotask(() => setMatches(media.matches));

    const handleWindowResize = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    media.addEventListener("change", handleWindowResize);

    return () => {
      media.removeEventListener("change", handleWindowResize);
    };
  }, [query]);

  return matches;
};
