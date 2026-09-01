import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";

type HeadingProps = PropsWithChildren<{
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string;
  className?: string;
}>;

const styles = {
  title: "title text-[5.5rem] bg-white-gradient-text",
};

const Heading = ({ title, className, level, children }: HeadingProps) => {
  const TitleTag = level;

  return (
    <TitleTag className={cn(styles.title, className)}>
      {title ?? children}
    </TitleTag>
  );
};

export default Heading;
