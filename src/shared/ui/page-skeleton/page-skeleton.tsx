import { cn } from "@/shared/lib";

type PageSkeletonProps = {
  wrapperClass?: string;
  children?: React.ReactNode;
  wrapperHeight?: string;
};

const PageSkeleton = ({
  wrapperClass,
  children,
  wrapperHeight = "min-h-[680px] md:min-h-[860px] lg:min-h-[1060px]",
}: PageSkeletonProps) => {
  const wrapperClassName = cn(wrapperClass, wrapperHeight);

  return <section className={wrapperClassName}>{children}</section>;
};

export default PageSkeleton;
