import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";

type HeadingProps = PropsWithChildren<{
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string;
  className?: string;
  gradientType?: "white" | "brown" | "rainbow" | "none";
}>;

const styles = {
  title: "title text-[5.5rem]",
};

const gradientClass = {
  white: "bg-white-gradient-text",
  brown: "bg-brown-gradient-text",
  rainbow: "bg-rainbow-gradient-text",
  none: "",
};

const Heading = ({
  title,
  className,
  level,
  children,
  gradientType = "none",
}: HeadingProps) => {
  const TitleTag = level;

  const titleClass = cn(
    styles.title,
    gradientType && gradientClass[gradientType],
  );

  return (
    <TitleTag className={cn(titleClass, className)}>
      {title ?? children}
    </TitleTag>
  );
};

export default Heading;
