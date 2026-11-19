import Image from "next/image";

import { cn } from "@/shared/lib";

type SliderProps = {
  sliderCardClass?: string;
  sliderInnerClass?: string;
};

const styles = {
  card: cn(
    "rotate-[7deg]",
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
  photoDesktop: cn(
    "relative hidden shrink-0 overflow-hidden",
    "xl:block xl:w-[132px] xl:h-[165px] 2xl:w-[240px] 2xl:h-[278px] xl:rounded-small",
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
  avatar: cn(
    "relative h-[40px] w-[40px] lg:h-[112px] lg:w-[100px] shrink-0 overflow-hidden rounded-[8px] lg:rounded-small",
    "xl:hidden",
  ),
  info: "flex flex-col",
  name: cn(
    "text-sm lg:text-[1.375em] xl:text-[1.75em] 3xl:text-[2em] font-semibold",
    "tracking-none lg:tracking-base text-white leading-small lg:leading-[0.8]",
  ),
  event: cn(
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
    "lg:mr-[88px] xl:mr-[126px] 2xl:mr-[29px] lg:mt-[14px] ",
    "rounded-smallest lg:bg-main-bg",
    "[&>button:first-child>img]:-mr-[10px] [&>button:last-child>img]:-ml-[10px]",
  ),
  arrowButton: cn(
    "flex cursor-pointer items-center justify-center",
    "h-4 w-4 xl:h-[18px] xl:w-[18px] py-[22px] lg:py-[22px] px-[19px]",
  ),
  arrowIcon: "h-[12px] w-[12px] min-h-[12px] min-w-[12px]",
};
const review = {
  name: "Владимир М.",
  event: "Black party",
  text: "Очень понравилось. Свет, декорации, актеры. Всё прошло очень хорошо, замечательные организаторы. Все организационные моменты быстро решили, отличный сервис",
  image: "/images/avatar.png",
};

const stars = [1, 2, 3, 4, 5];

const Slider = ({ sliderCardClass, sliderInnerClass }: SliderProps) => {
  return (
    <article className={cn(styles.card, sliderCardClass)}>
      <div className={cn(styles.inner, sliderInnerClass)}>
        <div className="flex">
          <div className={styles.photoDesktop}>
            <Image
              className={styles.photoImage}
              src={review.image}
              alt={review.name}
              fill
              sizes="240px"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.reviewer}>
                <div className={styles.avatar}>
                  <Image
                    className={styles.photoImage}
                    src={review.image}
                    alt={review.name}
                    fill
                    sizes="40px"
                  />
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.event}>{review.event}</span>
                </div>
              </div>
              <div className={styles.stars}>
                {stars.map((star) => (
                  <Image
                    key={star}
                    className={styles.star}
                    src="/icons/yellow-star.svg"
                    alt=""
                    width={25}
                    height={24}
                    aria-hidden
                  />
                ))}
              </div>
            </div>

            <div className={styles.body}>
              <p className={styles.text}>{review.text}</p>
              <div className={styles.arrows}>
                <button
                  type="button"
                  className={styles.arrowButton}
                  aria-label="Предыдущий отзыв"
                >
                  <Image
                    className={styles.arrowIcon}
                    src="/icons/reviews_arrow-left.svg"
                    alt=""
                    width={11}
                    height={12}
                    aria-hidden
                  />
                </button>
                <button
                  type="button"
                  className={styles.arrowButton}
                  aria-label="Следующий отзыв"
                >
                  <Image
                    className={styles.arrowIcon}
                    src="/icons/reviews_arrow-right.svg"
                    alt=""
                    width={11}
                    height={12}
                    aria-hidden
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Slider;
