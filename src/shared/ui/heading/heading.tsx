import cn from "@/shared/lib/utils";

type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  className?: string;
};

const Heading = ({ title, className, level }: HeadingProps) => {
  const TitleTag = level;

  const headingClassName = cn(
    "title text-[5.5rem] bg-white-gradient-text",
    className,
  );

  return <TitleTag className={headingClassName}>{title}</TitleTag>;
};

export default Heading;
