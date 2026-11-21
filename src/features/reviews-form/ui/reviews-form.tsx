"use client";

import { ChangeEvent, useState } from "react";

import { useEvents } from "@/entities/event";
import { cn } from "@/shared/lib";
import { Button, Input } from "@/shared/ui";
import { submitButtonText, disclaimerText } from "../lib";
import {
  reviewsInputsConfig,
  initialFormValues,
  type ReviewsFormValues,
} from "../model";
import ReviewsRating from "./reviews-rating";
import ReviewsSelect from "./reviews-select";

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
    "rounded-[20px] bg-main-bg p-[10px]",
    "lg:rounded-[40px] lg:p-[40px]",
  ),
  form: "flex w-full flex-col",
  input: cn(fieldClass, "mb-[10px] lg:py-[18px]"),
  textarea: cn(
    fieldClass,
    "min-h-[104px] md:min-h-[88px] lg:min-h-[102px] md:pt-[20px] mb-[10px]",
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

const { textInputs, ratingRadios } = reviewsInputsConfig;

const ReviewsForm = () => {
  const [formValues, setFormValues] =
    useState<ReviewsFormValues>(initialFormValues);

  const { events } = useEvents();

  const options = events.length > 0 ? events : [];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <ReviewsSelect
          value={formValues["reviews-form-event"]}
          options={options}
          onChange={handleInputChange}
          fieldClass={fieldClass}
        />
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          );
        })}
        <ReviewsRating
          radios={ratingRadios}
          selectedValue={formValues["reviews-form-rating"]}
          onChange={handleInputChange}
        />
        <Button className={styles.button}>
          <span>{submitButtonText}</span>
        </Button>
        <p className={styles.disclaimer}>{disclaimerText}</p>
      </form>
    </div>
  );
};

export default ReviewsForm;
