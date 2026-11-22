import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";
import { Button } from "../button";

type SliderSkeletonProps = PropsWithChildren<{
  wrapperClass?: string;
  buttonClass?: string;
  reload?: () => void;
}>;

const styles = {
  wrapper:
    "flex mx-auto items-center justify-center min-h-[210px] lg:min-h-[310px] text-center text-sm md:text-base text-white-70",
  button:
    "max-w-[200px] xl:max-w-[270px] mt-[15px] p-[10px] md:p-[10px] lg:p-[10px] xl:p-[10px] 2xl:p-[15px] 3xl:p-[15px] text-sm md:text-base lg:text-base 2xl:text-lg   cursor-pointer",
};

const SlideSkeleton = ({
  wrapperClass,
  buttonClass,
  children,
  reload,
}: SliderSkeletonProps) => {
  return (
    <article className={cn(wrapperClass, styles.wrapper)}>
      <div>
        {children}
        {reload && (
          <Button
            className={cn(buttonClass, styles.button)}
            variant="no-bg"
            onClick={reload}
          >
            <span>Попробовать ещё раз</span>
          </Button>
        )}
      </div>
    </article>
  );
};

export default SlideSkeleton;
