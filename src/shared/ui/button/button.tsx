import { PropsWithChildren, ButtonHTMLAttributes, Ref } from "react";

import { cn } from "@/shared/lib";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    ref?: Ref<HTMLButtonElement>;
    variant?: "no-bg";
  }
>;

const styles = {
  base: cn(
    "relative z-10 flex items-center justify-center w-full",
    "max-w-[297px] 3xl:max-w-[250px]",
    "mx-auto",
    "rounded-full",
    "text-black-secondary 2xl:text-xl leading-[130%]",
    "bg-white border-0 cursor-pointer",
    "p-[10px] px-[12px] pb-[12px]",
    "md:pt-[20px] md:pb-[22px] md:px-[50px]",
    "xl:pt-[20px] xl:pb-[22px] xl:px-[50px]",
    "2xl:pt-[20px] 2xl:pb-[22px] 2xl:px-[50px]",
    "text-sm md:text-xl font-semibold",
    "duration-[400ms]",
  ),
  noBg: cn(
    "pt-[18px] pb-[20px]",
    "3xl:pt-[28px] 3xl:pb-[30px] 3xl:px-0",
    "bg-transparent text-white",
    "border-[1.5px] border-white",
    "duration-base button-interactive_blank",
  ),
};

const Button = ({
  children,
  type = "button",
  className,
  variant,
  ref,
  ...restProps
}: ButtonProps) => {
  const buttonClass = cn(
    styles.base,
    variant === "no-bg" && styles.noBg,
    className,
  );

  return (
    <button {...restProps} className={buttonClass} type={type} ref={ref}>
      {children}
    </button>
  );
};

export default Button;
