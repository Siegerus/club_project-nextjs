import { MouseEvent } from "react";

import { cn } from "@/shared/lib";

type HamburgerProps = {
  isActive?: boolean;
  className?: string;
  onClick?: (e: MouseEvent) => void;
};

const styles = {
  wrapper: "w-[17px] md:hidden",
  stick: "block w-full h-[1.5px] mx-auto mb-[3px] bg-white duration-200",
  active:
    "nth-1:-rotate-45 nth-1:translate-y-[4.5px] nth-2:opacity-0 nth-3:rotate-45 nth-3:translate-y-[-4.5px]",
};

const Hamburger = ({
  isActive = false,
  className,
  onClick,
}: HamburgerProps) => {
  const stickClass = cn(styles.stick, isActive && styles.active);

  return (
    <button className={cn(styles.wrapper, className)} onClick={onClick}>
      <span className={stickClass}></span>
      <span className={stickClass}></span>
      <span className={stickClass}></span>
    </button>
  );
};

export default Hamburger;
