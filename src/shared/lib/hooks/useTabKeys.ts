import { KeyboardEvent, RefObject } from "react";

export const useTabKeys = (
  refs: RefObject<HTMLButtonElement[]>,
  setCallback: (index: number) => void,
) => {
  const handleKesDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let newIndex = index;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        e.preventDefault();
        newIndex = Math.min(index + 1, refs.current.length - 1);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        e.preventDefault();
        newIndex = Math.max(index - 1, 0);
        break;
      case "Home":
        e.preventDefault();
        newIndex = 0;
        break;
      case "End":
        e.preventDefault();
        newIndex = refs.current.length - 1;
        break;
    }

    setCallback(newIndex);
    if (refs?.current.length) refs.current[newIndex].focus();
  };
  return handleKesDown;
};
