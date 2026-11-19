import { ReviewsForm } from "@/features/reviews-form";
import { cn } from "@/shared/lib";
import { Slider, Container, Heading } from "@/shared/ui";
import { reviewsTitleText } from "../lib";

const styles = {
  root: "pt-[66px] pb-[19px] md:pt-[53px] md:pb-[83px] md:pt-[98px] md:pb-[69px]",
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
    "w-full max-w-[317px] md:max-w-[299px] lg:max-w-[457px] xl:max-w-[535px] 2xl:max-w-[630px] 3xl:max-w-[752px]",
    // "md:max-h-[145px] lg:max-h-[238px] xl:max-h-[268px]",
    "md:mt-[18px] lg:mt-[36px]",
  ),
  sliderInner:
    "w-full max-w-[317px] md:max-w-[299px] lg:max-w-[457px] xl:max-w-[530px] 2xl:max-w-[630px] 3xl:max-w-[752px]",
};

const EventReviews = () => {
  return (
    <section className={styles.root}>
      <Heading
        className={styles.title}
        level="h1"
        title={reviewsTitleText}
        gradientType="white"
      />
      <Container>
        <div className={styles.wrapper}>
          <Slider
            sliderCardClass={styles.slider}
            sliderInnerClass={styles.sliderInner}
          />
          <ReviewsForm />
        </div>
      </Container>
    </section>
  );
};

export default EventReviews;
