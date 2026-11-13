"use client";

import { ChangeEvent, SubmitEvent, useState } from "react";

import { AppRoute, cn } from "@/shared/lib";
import { Input } from "@/shared/ui";
import { Button } from "@/shared/ui";
import { Checkbox } from "@/shared/ui";

import { joinFormButtonText, joinFormCheckboxInfo } from "../lib";

import { joinInputsConfig, initialFormValues } from "../model";
import type { JoinFormValues } from "../model";

const styles = {
  form: "flex flex-col items-center w-full",
  input: cn(
    "min-w-full mt-[20px] mb-[25px] md:mb-[20px] px-[30px] mx-auto",
    "rounded-2xl bg-main-input placeholder:text-sm md:placeholder:text-base",
  ),

  button: cn(
    "w-full max-w-auto py-[20px] md:py-[21px]",
    "text-base md:text-xl leading-main tracking-base",
  ),
  checkbox: cn(
    "relative min-w-[16px] min-h-[16px] md:min-w-[21px] md:min-h-[20px] mr-[8px]",
    "before:absolute before:w-[12px] before:h-[9px]",
    "before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
    "rounded-[4px] border-[1.5px] border-white bg-transparent custom-checkbox",
  ),
  checkboxWrapper: "mt-[30px] md:mt-[20px]",
  checkboxInfo: cn(
    "text-sm md:text-xl leading-small text-center",
    "text-white-70",
  ),
};

const JoinForm = () => {
  const [formValues, setFormValues] =
    useState<JoinFormValues>(initialFormValues);

  const handleInputChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [target.name]: target.value });
  };
  const handleCheckboxChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [target.name]: target.checked });
  };

  const handleFormSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} id="join-form" onSubmit={handleFormSubmit}>
      <Input
        inputClass={styles.input}
        placeholder={joinInputsConfig.placeholder}
        type={joinInputsConfig.type}
        id={joinInputsConfig.name}
        aria-label={joinInputsConfig.ariaLabel}
        autoComplete={joinInputsConfig.autoComplete}
        value={formValues[joinInputsConfig.name]}
        onChange={handleInputChange}
      />
      <Button className={styles.button} type="submit" variant="no-bg">
        {joinFormButtonText}
      </Button>
      <Checkbox
        checkBoxClass={styles.checkbox}
        wrapperClass={styles.checkboxWrapper}
        variant="white"
        id="join-form-agreement"
        value={formValues["join-form-agreement"]}
        onChange={handleCheckboxChange}
      >
        <a href={AppRoute.Rules} className={styles.checkboxInfo}>
          {joinFormCheckboxInfo}
        </a>
      </Checkbox>
    </form>
  );
};

export default JoinForm;
