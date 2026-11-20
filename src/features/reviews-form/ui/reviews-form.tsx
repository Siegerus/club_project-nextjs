import Image from "next/image";

import { cn } from "@/shared/lib";
import { Button, Input } from "@/shared/ui";

const fieldClass = cn(
  "w-full rounded-[16px] border-2 border-additional",
  "py-[18px] md:py-[18px] lg:py-[19px] px-[30px] ",
  "text-sm lg:text-base leading-main tracking-base text-white",
  "placeholder:text-white-40 md:placeholder:text-base",
  "md:text-base",
);

const styles = {
  wrapper: cn(
    "flex flex-col w-full max-w-[320px] lg:max-w-[477px] xl:max-w-[552px] 2xl:max-w-[650px] 3xl:max-w-[760px] mt-[25px] md:mt-0",
    "rounded-[20px] bg-main-bg p-[10px] backdrop-blur-[12px]",
    "lg:rounded-[40px] lg:p-[40px]",
  ),
  form: "flex w-full flex-col",
  selectField: cn(
    fieldClass,
    "flex items-center justify-between gap-[10px] mb-[10px] py-[15px] md:py-[19px] cursor-pointer",
  ),
  selectPlaceholder:
    "mx-auto text-base text-center text-select-text tracking-base",
  input: cn(fieldClass, "mb-[10px] lg:py-[18px]"),
  textarea: cn(
    fieldClass,
    "min-h-[104px] md:min-h-[88px] lg:min-h-[102px] md:pt-[20px] mb-[10px]",
  ),
  ratingRow: "flex items-center justify-between gap-[10px]",
  ratingLabel:
    "max-w-[92px] lg:max-w-none text-sm font-semibold leading-main tracking-none text-white lg:text-xl lg:font-medium",
  stars:
    "flex items-center gap-[13px] lg:gap-[3px] xl:gap-[7px] 2xl:gap-[6px] 3xl:gap-[10px] cursor-pointer",
  star: "h-[22px] w-[22px] lg:h-[26px] lg:w-[26px] 2xl:h-[26px] 2xl:w-[26px] ",
  button: cn(
    "w-full md:max-w-none 3xl:max-w-none",
    "py-[15px] px-[10px] md:px-[30px] md:py-[15px] lg:px-[50px] lg:py-[20px] lg:pb-[22px] mt-[10px]",
    "text-sm font-semibold leading-main tracking-base text-black",
    "md:text-sm lg:text-xl",
  ),
  disclaimer:
    "mt-[5px] lg:mt-[10px] text-center text-sm font-medium leading-main tracking-none text-white-70 lg:text-lg 2xl:text-xl",
};

const starItems = [1, 2, 3, 4, 5];

const ReviewsForm = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <button type="button" className={styles.selectField}>
          <span className={styles.selectPlaceholder}>Выберите мероприятие</span>
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
        <Button className={styles.button}>
          <span>Отправить отзыв</span>
        </Button>
        <p className={styles.disclaimer}>
          Я&nbsp;ознакомлен(а) с&nbsp;политикой, офертой,
          и&nbsp;даю&nbsp;согласие на&nbsp;обработку персональных данных
        </p>
      </form>
    </div>
  );
};

export default ReviewsForm;
