"use client";

import { ChangeEvent, SubmitEvent, useState } from "react";

import { AppRoute, cn } from "@/shared/lib";
import { Input } from "@/shared/ui";
import { Button } from "@/shared/ui";
import { Checkbox } from "@/shared/ui";

import { joinFormButtonText, joinFormCheckboxInfo } from "../lib";

import { inputsConfig, initialFormValues, JoinFormFeedBack } from "../model";

const styles = {
  form: "flex flex-col items-center w-full",
  input: cn(
    "min-w-full mt-[20px] mb-[25px] md:mb-[20px] px-[30px] mx-auto rounded-2xl bg-main-input",
    "placeholder:text-sm md:placeholder:text-base",
  ),

  button:
    "w-full max-w-auto py-[20px] md:py-[21px] text-base md:text-xl leading-main tracking-base",
  checkbox:
    "min-w-[16px] min-h-[16px] md:min-w-[21px] md:min-h-[20px] mr-[8px] bg-transparent custom-checkbox",
  checkboxWrapper: "mt-[30px] md:mt-[20px]",
  checkboxInfo: "text-sm md:text-xl leading-small text-center text-white-70 ",
};

const JoinForm = () => {
  const [formValues, setFormValues] =
    useState<JoinFormFeedBack>(initialFormValues);

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
        placeholder={inputsConfig.placeholder}
        type={inputsConfig.type}
        id={inputsConfig.name}
        aria-label={inputsConfig.ariaLabel}
        autoComplete={inputsConfig.autoComplete}
        value={formValues[inputsConfig.name]}
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
