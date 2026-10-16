"use client";

import { ChangeEvent, SubmitEvent, useState } from "react";

import { cn, AppRoute } from "@/shared/lib";
import { Checkbox, Input } from "@/shared/ui";
import { Button } from "@/shared/ui";
import { Select } from "@/shared/ui";
import {
  submitButtonText,
  seletIconPath,
  registrationCheckboxInfo,
} from "../lib";
import {
  inputsConfig,
  radiosConfig,
  initialFormValues,
  type RegistrationFormFeedBack,
} from "../model";

const styles = {
  inputWrapper: "relative",
  inputLabelClass:
    "z-5 block absolute -top-[8px] left-[17px] px-[6px] text-sm leading-main tracking-base text-additional bg-main-label rounded-smallest",
  input:
    "w-full mb-[24px] md:mb-[20px] py-[16px] md:py-[18px] px-[30px] border-2 border-additional rounded-smallest placeholder:text-base md:placeholder:text-base",
  selectWrapper: "relative",
  selectControl:
    "w-full mb-[24px] md:mb-[20px] py-[15px] md:py-[18px] pl-[30px] pr-[23px] border-2 border-additional rounded-smallest",
  selectControlIcon: "w-[20px] h-[20px]",
  selectBody:
    "z-10 absolute top-[67px] left-0 w-full border-2 border-additional rounded-smallest",
  radioClass: "checkbox-white",
  radioLabelClass:
    "block w-full before:absolute before:w-[13px] before:h-[13px] before:top-1/2 before:right-[10px] before:-translate-y-1/2 custom-checkbox text-base tracking-base",

  button: "max-w-[unset] py-[14px] px-[16px] mb-[10px] tracking-base",
  checkboxInfo: "text-sm text-white-70 ",
  checkbox: cn(
    "relative min-w-[16px] min-h-[16px] md:min-w-[21px] md:min-h-[20px] mr-[8px]",
    "before:absolute before:w-[8px] before:h-[6px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
    "rounded-[4px] border-[1.5px] border-white bg-white",
  ),
};

const RegistrationForm = () => {
  const [formValues, setFormValues] =
    useState<RegistrationFormFeedBack>(initialFormValues);

  const handleInputChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormValues({ ...initialFormValues, [target.name]: target.value });
  };

  const handleCheckboxChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormValues({ ...initialFormValues, [target.name]: target.checked });
  };

  const handleFormSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {inputsConfig.map((input, i) => {
        const keyValue = `${input.name}-${i}`;
        return input.isSelect ? (
          <Select
            key={keyValue}
            radios={radiosConfig}
            wrapperClass={styles.selectWrapper}
            controlClass={styles.selectControl}
            controlIconClass={styles.selectControlIcon}
            bodyClass={styles.selectBody}
            radioClass={styles.radioClass}
            labelClass={styles.radioLabelClass}
            controlIconPath={seletIconPath}
          />
        ) : (
          <Input
            inputClass={cn(styles.input, input.mbSmall && "mb-[10px]")}
            labelClass={styles.inputLabelClass}
            wrapperClass={styles.inputWrapper}
            key={keyValue}
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
            label={input.label}
            aria-label={input.ariaLabel}
            autoComplete={input.autoComplete}
            value={formValues[input.name]}
            onChange={handleInputChange}
          />
        );
      })}
      <Button className={styles.button} type="submit">
        <span>{submitButtonText}</span>
      </Button>
      <Checkbox
        checkBoxClass={styles.checkbox}
        id="registration-form-agreement"
        variant="black"
        value={formValues["registration-agreement"]}
        onChange={handleCheckboxChange}
      >
        <a className={styles.checkboxInfo} href={AppRoute.Rules}>
          {registrationCheckboxInfo}
        </a>
      </Checkbox>
    </form>
  );
};

export default RegistrationForm;
