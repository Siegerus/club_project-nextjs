"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Fragment } from "react/jsx-runtime";

import { useEvents } from "@/entities/event";
import { cn } from "@/shared/lib";
import { Button, Input } from "@/shared/ui";
import {
  ratingLabelText,
  submitButtonText,
  disclaimerText,
  RatingIconPath,
} from "../lib";
import {
  reviewsInputsConfig,
  initialFormValues,
  type ReviewsFormValues,
} from "../model";

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
  selectField: cn("max-w-full mx-auto text-center"),
  selectPlaceholder: cn("max-w-full mx-auto text-center text-white"),
  select: cn(
    fieldClass,
    "min-h-[66px] max-w-full mx-auto mb-[10px] py-[20px] text-center",
    "text-base text-center text-select-text tracking-base",
    "overflow-hidden text-ellipsis whitespace-nowrap",
    "appearance-none [-webkit-appearance:none] [-moz-appearance:none] cursor-pointer input-interactive",
  ),
  input: cn(fieldClass, "mb-[10px] lg:py-[18px]"),
  textarea: cn(
    fieldClass,
    "min-h-[104px] md:min-h-[88px] lg:min-h-[102px] md:pt-[20px] mb-[10px]",
  ),
  ratingRow: "flex items-center justify-between gap-[10px]",
  ratingLabel:
    "max-w-[92px] lg:max-w-none text-sm font-semibold leading-main tracking-none text-white lg:text-xl lg:font-medium",
  stars:
    "flex items-center gap-[13px] lg:gap-[3px] xl:gap-[7px] 2xl:gap-[6px] 3xl:gap-[10px]",
  star: cn(
    "h-[22px] w-[22px] lg:h-[26px] lg:w-[26px] 2xl:h-[26px] 2xl:w-[26px]",
    "hover:scale-120 duration-200 cursor-pointer",
  ),
  button: cn(
    "w-full md:max-w-none 3xl:max-w-none",
    "py-[15px] px-[10px] md:px-[30px] md:py-[15px] lg:px-[50px] lg:py-[20px] lg:pb-[22px] mt-[10px]",
    "text-sm font-semibold leading-main tracking-base text-black",
    "md:text-sm lg:text-xl",
  ),
  disclaimer:
    "mt-[5px] lg:mt-[10px] text-center text-sm font-medium leading-main tracking-none text-white-70 lg:text-lg 2xl:text-xl",
};

const animateStyles = {
  initial: {
    opacity: 0.1,
    boxShadow: "0 0 110px rgba(246, 246, 246, 1)",
  },
  animate: {
    opacity: 1,
    boxShadow: "0 0 10px rgba(246, 246, 246, 0)",
  },
};

const { textInputs, ratingRadios } = reviewsInputsConfig;

const ReviewsForm = () => {
  const [formValues, setFormValues] =
    useState<ReviewsFormValues>(initialFormValues);

  const { events } = useEvents();

  const options = events.length > 0 ? events : [];

  const hadleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <select
          name="reviews-form-event"
          value={formValues["reviews-form-event"]}
          onChange={hadleInputChange}
          className={cn(
            styles.select,
            formValues["reviews-form-event"]
              ? "text-white-70"
              : "text-select-text",
          )}
        >
          <option className={styles.selectPlaceholder} value="" disabled>
            {ratingLabelText}
          </option>
          {options.map((option, i) => {
            const keyValue = `${option.id}-${i}`;
            return (
              <option
                key={keyValue}
                value={option.title}
                className={styles.selectField}
              >
                {option.title}
              </option>
            );
          })}
        </select>
        {textInputs.map((input, i) => {
          const keyValue = `${input}-${i}`;
          return input.isTextArea ? (
            <Input
              inputClass={styles.textarea}
              id={input.id}
              name={input.name}
              placeholder={input.label}
              autoComplete={input.autocomplete}
              key={keyValue}
              onChange={hadleInputChange}
              isTextArea
            />
          ) : (
            <Input
              inputClass={styles.input}
              id={input.id}
              name={input.name}
              placeholder={input.label}
              autoComplete={input.autocomplete}
              key={keyValue}
              onChange={hadleInputChange}
            />
          );
        })}
        <div className={styles.ratingRow}>
          <span className={styles.ratingLabel}>Рейтинг мероприятия</span>
          <div className={styles.stars}>
            {ratingRadios.map((radio, i) => {
              const keyValue = `${radio.id}-${i}`;
              const isFilled =
                Number(formValues[radio.name]) >= Number(radio.value);
              return (
                <Fragment key={keyValue}>
                  <input
                    className={"sr-only"}
                    type="radio"
                    id={radio.id}
                    name={radio.name}
                    value={radio.value}
                    checked={formValues["reviews-form-rating"] === radio.value}
                    onChange={hadleInputChange}
                  />
                  <label htmlFor={radio.id}>
                    {isFilled ? (
                      <motion.div
                        initial={animateStyles.initial}
                        animate={animateStyles.animate}
                        transition={{ duration: 0.5, ease: "linear" }}
                      >
                        <Image
                          className={styles.star}
                          src={RatingIconPath.StarFilled}
                          alt=""
                          width={30}
                          height={30}
                        />
                      </motion.div>
                    ) : (
                      <Image
                        className={styles.star}
                        src={RatingIconPath.Star}
                        alt=""
                        width={30}
                        height={30}
                      />
                    )}
                  </label>
                </Fragment>
              );
            })}
          </div>
        </div>
        <Button className={styles.button}>
          <span>{submitButtonText}</span>
        </Button>
        <p className={styles.disclaimer}>{disclaimerText}</p>
      </form>
    </div>
  );
};

export default ReviewsForm;
