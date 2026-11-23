"use client";

import { ReviewsForm } from "@/features/reviews-form";
import { useComments } from "@/entities/event";
import { cn, LoadingStatus } from "@/shared/lib";
import { Slider, Container, Heading } from "@/shared/ui";
import { reviewsTitleText, commentsDataToSlides } from "../lib";

const styles = {
  root: "pt-[66px] pb-[19px] md:pt-[53px] md:pb-[83px] lg:pt-[98px] lg:pb-[69px]",
  wrapper:
    "flex flex-col items-center md:items-start md:flex-row md:justify-between mt-[26px] md:mt-[22px] lg:mt-[47px]",
  title: cn(
    "max-w-[400px] md:max-w-[1000px] mx-auto xl:max-w-[895px] xl:mx-auto",
    "text-3xl md:text-[4.375em] lg:text-[4.625em] xl:text-[5em] 2xl:text-[5.25em] 3xl:text-[5.5em]",
    "text-center tracking-base font-semibold",
    "leading-[0.95] lg:leading-[0.88]",
  ),
  slider: cn(
    "relative",
    "w-full max-w-[310px] md:max-w-[308px] lg:max-w-[469px] xl:max-w-[540px] 2xl:max-w-[635px] 3xl:max-w-[748px]",
    "md:mt-[18px] lg:mt-[36px]",
  ),
  sliderInner:
    "w-full max-w-[310px] md:max-w-[308px] lg:max-w-[469px] xl:max-w-[540px] 2xl:max-w-[635px] 3xl:max-w-[748px]",
};

const EventReviews = () => {
  const { comments, status, reload } = useComments();

  const slides =
    status === LoadingStatus.Success && Array.isArray(comments)
      ? commentsDataToSlides(comments)
      : [];

  return (
    <section className={styles.root}>
      <Heading
        className={styles.title}
        level="h2"
        title={reviewsTitleText}
        gradientType="white"
      />
      <Container>
        <div className={styles.wrapper}>
          <Slider
            sliderCardClass={styles.slider}
            sliderInnerClass={styles.sliderInner}
            sliderItems={slides}
            status={status}
            reload={reload}
          />
          <ReviewsForm />
        </div>
      </Container>
    </section>
  );
};

export default EventReviews;
