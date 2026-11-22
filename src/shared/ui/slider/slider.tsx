"use client";

import { motion, scale } from "framer-motion";
import Image from "next/image";

import { cn, LoadingStatus, UserMessage } from "@/shared/lib";
import { arrowsPath, ratingIconPath, useSlider } from "./lib";
import SlideSkeleton from "./slide-skeleton";
import type { Slide } from "./types";

type SliderProps = {
  sliderCardClass?: string;
  sliderInnerClass?: string;
  sliderItems: Slide[];
  status: keyof typeof LoadingStatus;
  reload: () => void;
};

const styles = {
  card: cn(
    "rotate-[7deg] grow",
    "rounded-smallest lg:rounded-small",
    "border-[3px] border-additional bg-additional",
  ),
  inner: cn(
    "-rotate-[7deg]",
    "flex flex-col gap-[10px]",
    "xl:flex-row xl:items-center xl:gap-[20px]",
    "p-[7px] lg:p-[15px] xl:p-0",
    "rounded-[14px] lg:rounded-small",
    "border-[3px] border-additional bg-main-bg-tertiary lg:bg-main-bg-secondary",
  ),
  imageDesktop: cn(
    "relative hidden shrink-0 overflow-hidden",
    "xl:block xl:w-[132px] xl:h-[165px] 2xl:w-[240px] 2xl:h-auto xl:rounded-small",
  ),
  photoImage: "object-cover",
  content:
    "w-full max-w-[290px] lg:max-w-[unset] xl:max-w-[400px] 2xl:max-w-[385px] 3xl:max-w-[500px] xl:p-[15px] 2xl:p-[19px] xl:flex-none xl:items-center",
  header:
    "flex items-center xl:items-start justify-between gap-[10px] xl:w-full",
  body: "flex items-end justify-between lg:flex-col 2xl:items-center",
  reviewer: cn(
    "flex items-end lg:items-center lg:min-w-[260px] xl:min-w-[unset] lg:justify-between gap-[10px]",
    "xl:items-start xl:gap-0",
  ),
  imageMobile: cn(
    "relative h-[40px] w-[40px] lg:h-[112px] lg:w-[100px] shrink-0 overflow-hidden rounded-[8px] lg:rounded-small",
    "xl:hidden",
  ),
  info: "flex flex-col",
  slideTitle: cn(
    "text-sm lg:text-[1.375em] xl:text-[1.75em] 3xl:text-[2em] font-semibold",
    "tracking-none lg:tracking-base text-white leading-small lg:leading-[0.8]",
  ),
  slideDescription: cn(
    "lg:mt-[10px] text-sm lg:text-xl xl:text-lg 3xl:text-xl font-medium",
    "tracking-none lg:tracking-base xl:tracking-none leading-main text-white-70",
  ),
  stars:
    "flex shrink-0 items-center gap-[10px] lg:gap-[4px] xl:gap-[8px] 2xl:gap-[7px] 3xl:gap-[10px]",
  star: "h-[15px] w-[15px] lg:h-[25px] lg:w-[25px]",
  text: cn(
    "max-w-[235px] lg:max-w-[unset] mt-[10px]",
    "text-sm lg:text-lg xl:text-lg 3xl:text-xl",
    "font-medium leading-main tracking-none text-white",
  ),
  arrows: cn(
    "inline-flex items-center",
    "h-[50px] lg:h-[44px] xl:h-[44px]",
    "lg:mr-[102px] xl:mr-[126px] 2xl:mr-[29px] 3xl:mr-0 lg:mt-[14px] ",
    "rounded-smallest lg:bg-main-bg",
    "[&>button:first-child>img]:-mr-[10px] [&>button:last-child>img]:-ml-[10px]",
  ),
  arrowButton: cn(
    "flex cursor-pointer items-center justify-center",
    "h-4 w-4 xl:h-[18px] xl:w-[18px] py-[22px] lg:py-[22px] px-[19px]",
  ),
  arrowIcon: "h-[12px] w-[12px] min-h-[12px] min-w-[12px]",
};

const stars = Array.from({ length: 5 }, (_, i) => i + 1);

const Slider = ({
  sliderCardClass,
  sliderInnerClass,
  sliderItems,
  status,
  reload,
}: SliderProps) => {
  const { currentIndex, handleArrowClick } = useSlider(sliderItems);

  const renderSlides = () => {
    return (
      <>
        {sliderItems.map((slide, i) => {
          const keyValue = `${slide.id}-${i}`;
          return (
            i === currentIndex && (
              <motion.div
                className="flex"
                key={keyValue}
                initial={{ opacity: 0, transform: "scale(50%)" }}
                animate={{ opacity: 1, transform: "scale(100%)" }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.imageDesktop}>
                  <Image
                    className={styles.photoImage}
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="240px"
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.header}>
                    <div className={styles.reviewer}>
                      <div className={styles.imageMobile}>
                        <Image
                          className="object-cover"
                          src={slide.image}
                          alt={slide.title}
                          fill
                          sizes="40px"
                        />
                      </div>
                      <div className={styles.info}>
                        <span className={styles.slideTitle}>{slide.title}</span>
                        <span className={styles.slideDescription}>
                          {slide.description}
                        </span>
                      </div>
                    </div>
                    <div className={styles.stars}>
                      {stars.map((star, i) => {
                        return i >= slide.rating ? (
                          <Image
                            key={star}
                            className={styles.star}
                            src={ratingIconPath.empty}
                            alt=""
                            width={25}
                            height={24}
                            aria-hidden
                          />
                        ) : (
                          <Image
                            key={star}
                            className={styles.star}
                            src={ratingIconPath.fill}
                            alt=""
                            width={25}
                            height={24}
                            aria-hidden
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.body}>
                    <p className={styles.text}>{slide.comment}</p>
                    <div className={styles.arrows}>
                      <button
                        onClick={() => handleArrowClick(-1)}
                        type="button"
                        className={styles.arrowButton}
                        aria-label="Предыдущий слайд"
                      >
                        <Image
                          className={styles.arrowIcon}
                          src={arrowsPath.left}
                          alt=""
                          width={11}
                          height={12}
                          aria-hidden
                        />
                      </button>
                      <button
                        onClick={() => handleArrowClick(1)}
                        type="button"
                        className={styles.arrowButton}
                        aria-label="Следующий слайд"
                      >
                        <Image
                          className={styles.arrowIcon}
                          src={arrowsPath.right}
                          alt=""
                          width={11}
                          height={12}
                          aria-hidden
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          );
        })}
      </>
    );
  };

  const renderLoading = (
    message: (typeof UserMessage)[keyof typeof UserMessage],
  ) => {
    return (
      <SlideSkeleton>
        <p>{message}</p>
      </SlideSkeleton>
    );
  };

  const renderError = (
    message: (typeof UserMessage)[keyof typeof UserMessage],
  ) => {
    return (
      <SlideSkeleton reload={reload}>
        <p>{message}</p>
      </SlideSkeleton>
    );
  };

  const renderSlider = (status: keyof typeof LoadingStatus) => {
    switch (status) {
      case LoadingStatus.Success:
        return renderSlides();
      case LoadingStatus.Loading:
        return renderLoading(UserMessage.LoadingProgress);
      case LoadingStatus.Failed:
        return renderError(UserMessage.LoadingError);
    }
  };

  return (
    <article className={cn(styles.card, sliderCardClass)}>
      <div className={cn(styles.inner, sliderInnerClass)}>
        {renderSlider(status)}
      </div>
    </article>
  );
};

export default Slider;
