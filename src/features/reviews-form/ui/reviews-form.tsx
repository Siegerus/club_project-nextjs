import Image from "next/image";

import { cn } from "@/shared/lib";
import { Button, Input } from "@/shared/ui";

const fieldClass = cn(
  "w-full rounded-[16px] border-2 border-additional",
  "px-[30px] py-[20px]",
  "text-sm leading-main tracking-base text-white",
  "placeholder:text-white-40",
  "md:text-base lg:text-xl",
);

const styles = {
  wrapper: cn(
    "flex w-full flex-col gap-[10px]",
    "rounded-[20px] bg-main-bg p-[10px] backdrop-blur-[12px]",
    "lg:rounded-[40px] lg:p-[40px]",
  ),
  form: "flex w-full flex-col gap-[10px]",
  selectField: cn(
    fieldClass,
    "flex items-center justify-between gap-[10px] text-left",
  ),
  selectPlaceholder: "text-white-40",
  selectIcon: "shrink-0",
  input: fieldClass,
  textarea: cn(fieldClass, "min-h-[120px]"),
  ratingRow: "flex items-center justify-between gap-[10px]",
  ratingLabel:
    "text-sm font-semibold leading-main tracking-base text-white lg:text-xl lg:font-medium",
  stars: "flex items-center gap-[4px] md:gap-[6px]",
  star: "h-[19px] w-[19px] lg:h-[30px] lg:w-[30px]",
  button: cn(
    "w-full max-w-none",
    "px-[10px] py-[10px] md:px-[30px] md:py-[14px] lg:px-[50px] lg:py-[20px] lg:pb-[22px]",
    "text-sm font-semibold leading-main tracking-base text-black",
    "md:text-sm lg:text-xl",
  ),
  disclaimer:
    "text-center text-sm font-medium leading-[1.4] tracking-base text-white-70 lg:text-xl",
  disclaimerLink: "underline decoration-solid underline-offset-2",
};

const starItems = [1, 2, 3, 4, 5];

const ReviewsForm = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <button type="button" className={styles.selectField}>
          <span className={styles.selectPlaceholder}>Выберите мероприятие</span>
          <Image
            className={styles.selectIcon}
            src="/icons/down.svg"
            alt=""
            width={20}
            height={20}
          />
        </button>

        <Input
          inputClass={styles.input}
          id="reviews-name"
          name="reviews-name"
          type="text"
          placeholder="Ваше имя"
          autoComplete="name"
        />

        <Input
          inputClass={styles.textarea}
          id="reviews-message"
          name="reviews-message"
          placeholder="Ваш отзыв"
          isTextArea
          textAreaHeight="120"
        />

        <div className={styles.ratingRow}>
          <span className={styles.ratingLabel}>Рейтинг мероприятия</span>
          <div className={styles.stars}>
            {starItems.map((item) => (
              <Image
                key={item}
                className={styles.star}
                src="/icons/black-star.svg"
                alt=""
                width={30}
                height={30}
              />
            ))}
          </div>
        </div>

        <Button className={styles.button} type="button">
          Отправить отзыв
        </Button>

        <p className={styles.disclaimer}>
          Я ознакомлен(а) с{" "}
          <a className={styles.disclaimerLink} href="#">
            политикой, офертой
          </a>
          , и даю согласие на обработку персональных данных
        </p>
      </form>
    </div>
  );
};

export default ReviewsForm;
