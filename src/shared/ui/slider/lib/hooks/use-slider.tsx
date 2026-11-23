"use client";

import { useState, useCallback } from "react";
import type { Slide } from "../../types";

export const useSlider = (slides: Slide[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleArrowClick = useCallback(
    (num: number) => {
      setCurrentIndex((prevState) => {
        if (slides.length === 0) return 0;

        if (prevState + num < 0) return slides.length - 1;
        if (prevState + num > slides.length - 1) return 0;

        return prevState + num;
      });
    },
    [slides.length],
  );

  return { handleArrowClick, currentIndex };
};
