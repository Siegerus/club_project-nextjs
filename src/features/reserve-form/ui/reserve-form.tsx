"use client";
import { ChangeEvent, useState } from "react";

import type { EventItem } from "@/entities/event";
import { cn } from "@/shared/lib";
import { Input } from "@/shared/ui";
import type { ReserveTabId } from "../lib";
import {
  reserveInputsConfig,
  ReserveInputName,
  getRadiosConfig,
  initialFormValues,
  ReserveFormValues,
} from "../model";

type ReserveFormProps = {
  id: ReserveTabId;
  activeEvent: EventItem;
};

const styles = {
  form: "flex flex-col items-center w-full",
  input: cn(
    "min-w-full mt-[16px] mb-[10px] md:mb-[20px] px-[30px] mx-auto",
    "rounded-2xl border-2 border-additional placeholder:text-sm md:placeholder:text-base leading-one",
  ),
  radiosList: "w-full",
  radiosListItem:
    "flex items-center justify-between mt-[16px] tracking-base leading-main font-semibold text-base text-white ",

  radio: "custom-radio sr-only",
  radioLabel: "flex items-center justify-between w-full custom-radio-label",
  radioInfo: "block ml-[20px]",
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

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    console.log(formValues);
  };

  const radios =
    id === "couple"
      ? getRadiosConfig(activeEvent, true)
      : getRadiosConfig(activeEvent);
  return (
    <>
      <form id={`reserve-${id}-form`} className={styles.form}>
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
              onChange={(e) => handleInputChange(e)}
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
                  checked={
                    radio.value === formValues[radio.name as ReserveInputName]
                  }
                  onChange={(e) => handleRadioChange(e)}
                />
                <label className={styles.radioLabel} htmlFor={radio.id}>
                  <span className={styles.radioInfo}>{radio.label}</span>
                  <span className="block">{radio.value}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
};

export default ReserveForm;
