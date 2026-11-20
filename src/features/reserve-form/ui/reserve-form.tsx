"use client";
import { SubmitEvent, ChangeEvent, useState } from "react";

import type { EventItem } from "@/entities/event";
import { cn } from "@/shared/lib";
import { Button, Input } from "@/shared/ui";
import { type ReserveTabId, submitButtonText } from "../lib";
import {
  reserveInputsConfig,
  getRadiosConfig,
  type ReserveFormValues,
  initialFormValues,
} from "../model";

type ReserveFormProps = {
  id: ReserveTabId;
  activeEvent: EventItem;
};

const styles = {
  form: cn("flex flex-col items-center", "w-full"),
  input: cn(
    "min-w-full mt-[16px] mb-[10px] md:mb-0 px-[30px] md:py-[20px] mx-auto",
    "rounded-2xl border-2 border-additional",
    "placeholder:text-sm md:placeholder:text-base leading-one",
  ),
  radiosList: "w-full",
  radiosListItem: cn(
    "flex items-center justify-between",
    "mt-[16px]",
    "tracking-base md:tracking-none leading-main",
    "font-semibold text-base text-white",
  ),
  radio: "sr-only peer",
  radioLabel: cn(
    "flex items-center justify-between w-full",
    "md:text-xl",
    "md:after:w-[28px] md:after:h-[28px] md:before:left-[4px]",
    "custom-radio-label",
    "peer-focus:before:bg-white peer-checked:before:bg-white",
    "peer-focus-visible:outline",
  ),
  radioInfo: "block ml-[30px] md:ml-[38px]",
  button: cn(
    "mt-[50px] md:mt-[40px]",
    "py-[16px] px-[12px] max-w-[652px] 3xl:max-w-[unset]",
    "text-base tracking-base leading-main",
    "button-interactive_fill",
  ),
};

const ReserveForm = ({ id, activeEvent }: ReserveFormProps) => {
  const [formValues, setFormValues] =
    useState<ReserveFormValues>(initialFormValues);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  const radios = getRadiosConfig(activeEvent, id === "couple");

  const selectedRadioPrice =
    radios.find((radio) => radio.value === formValues["reserve-variant"])
      ?.formattedPrice ?? radios[0].formattedPrice;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {reserveInputsConfig.map((input, i) => {
        const keyValue = `${input.id}-${i}`;
        return (
          <Input
            inputClass={styles.input}
            type={input.type}
            key={keyValue}
            id={input.id}
            aria-label={input.label}
            placeholder={input.placeholder}
            value={formValues[input.name]}
            onChange={handleInputChange}
            autoComplete={input.autocomplete}
          />
        );
      })}
      <ul className={styles.radiosList}>
        {radios.map((radio) => {
          return (
            <li className={styles.radiosListItem} key={radio.id}>
              <input
                className={styles.radio}
                type="radio"
                id={radio.id}
                name={radio.name}
                value={radio.value}
                checked={radio.value === formValues[radio.name]}
                onChange={handleInputChange}
              />
              <label className={styles.radioLabel} htmlFor={radio.id}>
                <span className={styles.radioInfo}>{radio.label}</span>
                <span className="block">{radio.formattedPrice}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <Button className={styles.button} type="submit">
        <span>{`${submitButtonText} ${selectedRadioPrice}`}</span>
      </Button>
    </form>
  );
};

export default ReserveForm;
