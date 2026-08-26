import { cn } from "@/shared/lib";

type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  className?: string;
};

const Heading = ({ title, className, level }: HeadingProps) => {
  const TitleTag = level;

  return <TitleTag className={cn(styles.title, className)}>{title}</TitleTag>;
};

export default Heading;

const styles = {
  title: "title text-[5.5rem] bg-white-gradient-text",
};
