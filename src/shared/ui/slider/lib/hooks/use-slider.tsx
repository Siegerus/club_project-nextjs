"use client";

import { useState, useCallback, useEffect } from "react";
import type { Slide } from "../../types";

export const useSlider = (slides: Slide[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // guard от выхода индекса за границы массива при обновлении данных с бэка
    queueMicrotask(() => setCurrentIndex(0));
  }, [slides.length]);

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
