import Image from "next/image";

import { cn } from "@/shared/lib";

const styles = {
  card: cn(
    "w-full max-w-[320px] md:max-w-[314px] xl:max-w-[781px]",
    "rounded-smallest xl:rounded-small",
    "border-[3px] border-additional bg-additional",
    "p-[7px] xl:p-[21px]",
  ),
  inner: cn(
    "flex flex-col gap-[10px]",
    "xl:flex-row xl:items-center xl:gap-[20px]",
    "rounded-[14px] xl:rounded-small",
    "border-[3px] border-additional bg-main-bg-secondary",
    "p-[10px]",
  ),
  photoDesktop: cn(
    "relative hidden shrink-0 overflow-hidden",
    "xl:block xl:h-[270px] xl:w-[240px] xl:rounded-small",
  ),
  photoImage: "object-cover",
  content: cn(
    "flex min-w-0 flex-1 flex-col gap-[10px]",
    "xl:w-[497px] xl:flex-none xl:items-center xl:p-[20px]",
  ),
  header: cn("flex items-start justify-between gap-[10px]", "xl:w-full"),
  reviewer: cn("flex items-center gap-[10px]", "xl:items-start xl:gap-0"),
  avatar: cn(
    "relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-[8px]",
    "xl:hidden",
  ),
  info: "flex flex-col gap-[2px]",
  name: cn(
    "text-sm font-semibold tracking-base text-white",
    "xl:text-[2rem] xl:leading-small",
  ),
  event: cn(
    "text-sm font-medium tracking-base text-white-70",
    "xl:text-xl xl:leading-main",
  ),
  stars: "flex shrink-0 items-center gap-[2px]",
  star: "h-4 w-4 xl:h-[30px] xl:w-[30px]",
  text: cn(
    "text-sm font-medium leading-main tracking-base text-white",
    "xl:text-xl",
  ),
  arrows: cn(
    "inline-flex items-center gap-[4px]",
    "rounded-smallest bg-main-bg",
    "p-[6px] px-[10px]",
    "xl:p-[10px] xl:px-[14px]",
  ),
  arrowButton: cn(
    "flex cursor-pointer items-center justify-center",
    "h-4 w-4 xl:h-[18px] xl:w-[18px]",
  ),
  arrowIcon: "h-[11px] w-[12px] xl:h-[15px] xl:w-[16px]",
};

const review = {
  name: "Владимир М.",
  event: "Black party",
  text: "Очень понравилось. Свет, декорации, актеры. Всё прошло очень хорошо, замечательные организаторы. Все организационные моменты быстро решили, отличный сервис",
  image: "/images/avatar.png",
};

const stars = [1, 2, 3, 4, 5];

const Slider = () => {
  return (
    <article className={styles.card}>
      <div className={styles.inner}>
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
    </article>
  );
};

export default Slider;
