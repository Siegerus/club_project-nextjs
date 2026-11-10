import { cn } from "@/shared/lib";

type PageSkeletonProps = {
  wrapperClass?: string;
  children?: React.ReactNode;
};

const PageSkeleton = ({ wrapperClass, children }: PageSkeletonProps) => {
  return (
    <section
      className={cn(
        "min-h-[680px] md:min-h-[860px] lg:min-h-[1060px]",
        wrapperClass,
      )}
    >
      {children}
    </section>
  );
};

export default PageSkeleton;
