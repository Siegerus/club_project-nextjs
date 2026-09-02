import { PropsWithChildren, ButtonHTMLAttributes } from "react";

import { cn } from "@/shared/lib";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    type?: "button" | "submit" | "reset";
    variant?: "no-bg";
  }
>;

const styles = {
  base: cn(
    "z-10 flex items-center justify-center w-full max-w-[297px] 3xl:max-w-[250px]",
    "mx-auto pt-[18px] pb-[20px] px-0 md:pt-[20px] md:pb-[22px] md:px-[50px] xl:py-[28px] xl:px-[40px] 2xl:py-[30px] 2xl:px-0",
    "rounded-full text-base text-black-primary md:text-lg 2xl:text-xl leading-[130%] bg-white border-0 duration-1000 cursor-pointer",
    "p-[10px] px-[12px] pb-[12px] md:pt-[20px] md:pb-[22px] md:px-[50px] xl:pt-[20px] xl:pb-[22px] xl:px-[50px] 2xl:pt-[20px] 2xl:pb-[22px] 2xl:px-[50px]",
    "text-sm md:text-xl text-black-primary font-semibold",
  ),
  noBg: "pt-[18px] pb-[20px] 3xl:pt-[28px] 3xl:pb-[30px] 3xl:px-0 bg-transparent text-white border-[1.5px] border-white",
};

const Button = ({
  children,
  type = "button",
  className,
  variant,
}: ButtonProps) => {
  const buttonClass = cn(
    styles.base,
    variant === "no-bg" && styles.noBg,
    className,
  );

  return (
    <button className={buttonClass} type={type}>
      {children}
    </button>
  );
};

export default Button;
