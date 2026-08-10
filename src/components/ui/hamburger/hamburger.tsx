import cn from "@/lib/utils";

type HamburgerProps = {
  isActive?: boolean;
  className?: string;
};

const Hamburger = ({ isActive = false, className }: HamburgerProps) => {
  const wrapperClass = cn("w-[17px] md:hidden", className);

  const sticksClass = cn(
    "block w-full h-[1.5px] mx-auto mb-[3px] bg-white duration-1200",
    isActive &&
      "nth-1:-rotate-45 nth-1:translate-y-[3px] nth-1:mb-[-2px] nth-2:hidden nth-3:rotate-45 nth-3:translate-y-[3px] nth-3:mb-[6px]",
  );
  return (
    <div className={wrapperClass}>
      <span className={sticksClass}></span>
      <span className={sticksClass}></span>
      <span className={sticksClass}></span>
    </div>
  );
};

export default Hamburger;
