import cn from "@/lib/utils";

type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  className: string;
};

const Heading = ({ title, className, level }: HeadingProps) => {
  const TitleTag = level;

  const headingClassName = cn("", className);

  return <TitleTag className={headingClassName}>{title}</TitleTag>;
};

export default Heading;
