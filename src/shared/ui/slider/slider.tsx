"use client";

import { motion } from "framer-motion";
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
    "flex flex-col gap-[10px] lg:gap-[4px]",
    "xl:items-center xl:gap-0",
    "p-[7px] lg:p-[15px] xl:p-0 xl:pb-[15px] 2xl:p-0",
    "rounded-[14px] lg:rounded-small",
    "border-[3px] border-additional bg-main-bg-tertiary lg:bg-main-bg-secondary",
  ),
  imageDesktop: cn(
    "relative hidden shrink-0 overflow-hidden",
    "xl:block xl:w-[132px] xl:h-[165px] 2xl:w-[240px] 2xl:h-auto 2xl:min-h-[280px] 2xl:max-h-[300px] xl:rounded-small",
  ),
  photoImage: "object-cover",
  content:
    "w-full max-w-[290px] lg:max-w-[unset] xl:max-w-[400px] 2xl:max-w-[385px] 3xl:max-w-[500px] xl:p-[15px] 2xl:px-[19px] 2xl:pt-[19px] 2xl:pb-[70px] xl:flex-none xl:items-center",
  header:
    "flex items-center xl:items-start justify-between gap-[10px] xl:w-full",
  body: "flex items-end justify-between lg:flex-col 2xl:items-center",
  reviewer: cn(
    "flex items-start lg:items-center xl:min-w-[unset] lg:justify-start gap-[10px]",
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
    "max-w-[230px] lg:max-w-[unset] mt-[10px]",
    "text-sm lg:text-lg xl:text-lg 3xl:text-xl",
    "font-medium leading-main tracking-none text-white",
  ),
  arrows: cn(
    "z-10 absolute lg:relative 2xl:absolute bottom-[7px] lg:bottom-0 right-0 2xl:right-1/4",
    "inline-flex lg:self-end items-center",
    "lg:w-[77px] h-[50px] lg:h-[44px] xl:h-[44px]",
    "lg:mr-[100px] xl:mr-[135px] 2xl:mr-[29px] 3xl:mr-0 lg:mt-[14px] xl:mt-[0] 2xl:m-0 2xl:mb-[15px]",
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
  // safeIndex защита от выхода индекса за границы массива при обновлении данных с бэка
  const safeIndex = currentIndex >= sliderItems.length ? 0 : currentIndex;

  const renderSlides = () => {
    return (
      <>
        {sliderItems.map((slide, i) => {
          const keyValue = `${slide.id}-${i}`;
          return (
            i === safeIndex && (
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
                    aria-hidden
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
                          sizes="(min-width: 1024px) 100px, 40px"
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
                  </div>
                </div>
              </motion.div>
            )
          );
        })}
      </>
    );
  };

  const renderEmpty = (
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

  const renderContent = (status: keyof typeof LoadingStatus) => {
    switch (status) {
      case LoadingStatus.Loading:
        return renderEmpty(UserMessage.LoadingProgress);
      case LoadingStatus.Failed:
        return renderError(UserMessage.LoadingError);
      case LoadingStatus.Success:
        if (sliderItems.length <= 0) return renderEmpty(UserMessage.EmptyData);
        return renderSlides();
      default:
        return renderEmpty(UserMessage.EmptyData);
    }
  };

  return (
    <article className={cn(styles.card, sliderCardClass)}>
      <div className={cn(styles.inner, sliderInnerClass)}>
        {renderContent(status)}
        <div className={styles.arrows}>
          <button
            onClick={() => handleArrowClick(-1)}
            type="button"
            className={styles.arrowButton}
            disabled={sliderItems.length <= 1}
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
            disabled={sliderItems.length <= 1}
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
    </article>
  );
};

export default Slider;
