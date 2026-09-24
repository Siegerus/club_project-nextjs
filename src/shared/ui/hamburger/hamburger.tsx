import { MouseEvent } from "react";

import { cn } from "@/shared/lib";

type HamburgerProps = {
  isActive?: boolean;
  className?: string;
  onClick?: (e: MouseEvent) => void;
};

const styles = {
  wrapper: "block w-[17.5px] h-[13.5px] md:hidden",
  stick: "block w-full h-[1.5px] mx-auto mb-[3px] bg-white duration-base",
  active:
    "-mb-[1.5px] nth-1:-rotate-45 nth-1:translate-y-[3px] nth-2:hidden nth-3:rotate-45 nth-3:translate-y-[3px]",
};

const Hamburger = ({
  isActive = false,
  className,
  onClick,
}: HamburgerProps) => {
  const stickClass = cn(styles.stick, isActive && styles.active);

  const buttonLabel = isActive ? "Закрыть меню" : "Открыть меню";

  return (
    <button
      className={cn(styles.wrapper, className)}
      onClick={onClick}
      aria-label={buttonLabel}
    >
      <span className={stickClass}></span>
      <span className={stickClass}></span>
      <span className={stickClass}></span>
    </button>
  );
};

export default Hamburger;
