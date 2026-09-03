import Link from "next/link";
import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";

type LinkButtonProps = PropsWithChildren<{
  path: string;
  label?: string;
  className?: string;
  isExternal?: boolean;
  variant?: "footer" | "no-bg";
}>;

const styles = {
  base: cn(
    "z-10 relative flex items-center justify-center w-full max-w-[297px] 3xl:max-w-[250px]",
    "mx-auto pt-[18px] pb-[20px] px-0 md:pt-[20px] md:pb-[22px] md:px-[50px] xl:py-[28px] xl:px-[40px] 2xl:py-[30px] 2xl:px-0",
    "rounded-full text-base text-black-primary md:text-lg 2xl:text-xl leading-[130%] bg-white border-0 duration-300 cursor-pointer",
    "p-[10px] px-[12px] pb-[12px] md:pt-[20px] md:pb-[22px] md:px-[50px] xl:pt-[20px] xl:pb-[22px] xl:px-[50px] 2xl:pt-[20px] 2xl:pb-[22px] 2xl:px-[50px]",
    "text-sm md:text-xl text-black-primary font-semibold",
  ),
  footer:
    "max-w-[159px] md:max-w-[292px] 3xl:max-w-[292px] m-0 button-hover_full",
  noBg: "pt-[18px] pb-[20px] 3xl:pt-[28px] 3xl:pb-[30px] 3xl:px-0 bg-transparent text-white border-[1.5px] border-white",
};

const LinkButton = ({
  children,
  path,
  label,
  className,
  isExternal = false,
  variant,
}: LinkButtonProps) => {
  const buttonClass = cn(
    styles.base,
    variant === "footer" && styles.footer,
    variant === "no-bg" && styles.noBg,
    className,
  );

  return isExternal ? (
    <a
      className={buttonClass}
      href={path}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link className={buttonClass} href={path} aria-label={label}>
      {children}
    </Link>
  );
};

export default LinkButton;
