import { cn } from "@/shared/lib";

type HamburgerProps = {
  isActive?: boolean;
  className?: string;
};

const Hamburger = ({ isActive = false, className }: HamburgerProps) => {
  const stickClass = cn(styles.stick, isActive && styles.active);

  return (
    <div className={cn(styles.wrapper, className)}>
      <span className={stickClass}></span>
      <span className={stickClass}></span>
      <span className={stickClass}></span>
    </div>
  );
};

export default Hamburger;

const styles = {
  wrapper: "w-[17px] md:hidden",
  stick: "block w-full h-[1.5px] mx-auto mb-[3px] bg-white duration-1200",
  active: "nth-1:-rotate-45 nth-1:translate-y-[3px] nth-1:mb-[-2px] nth-2:hidden nth-3:rotate-45 nth-3:translate-y-[3px] nth-3:mb-[6px]",
};
