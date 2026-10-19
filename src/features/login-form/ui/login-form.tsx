import Link from "next/link";
import { useState, ChangeEvent, SubmitEvent } from "react";

import { AppRoute, cn } from "@/shared/lib";
import { Input, Button, Checkbox } from "@/shared/ui";
import {
  submitButtonText,
  loginCheckboxInfo,
  loginFormDescription,
} from "../lib";
import {
  loginInputsConfig,
  initialFormValues,
  type LoginFormFeedBack,
} from "../model";

const styles = {
  description:
    "mt-[20px] md:mt-[40px] mb-[24px] md:mb-[30px] text-sm md:text-xl text-left text-white leading-main tracking-base md:tracking-none",
  inputWrapper: "relative",
  input:
    "w-full mb-[24px] md:mb-[20px] py-[16px] md:py-[18px] px-[30px] border-2 border-additional rounded-smallest placeholder:text-base md:placeholder:text-xl",
  label:
    "z-5 block absolute -top-[8px] left-[17px] px-[6px] text-sm leading-main tracking-base text-additional bg-main-label rounded-smallest",

  button: "max-w-[unset] py-[14px] px-[16px] mb-[10px] tracking-base",
  checkbox: cn(
    "relative min-w-[16px] min-h-[16px] md:min-w-[21px] md:min-h-[20px] mr-[8px]",
    "before:absolute before:w-[8px] before:h-[6px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
    "rounded-[4px] border-[1.5px] border-white bg-white",
  ),
  checkboxInfo: "text-sm text-white-70",

  forgotten:
    "block mt-[10px] mb-[10px] text-sm leading-main tracking-base cursor-pointer text-white font-semibold",
};

const LoginForm = () => {
  const [formValues, setFormValues] =
    useState<LoginFormFeedBack>(initialFormValues);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [target.name]: target.checked });
  };

  const handleFormSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <p className={styles.description}>{loginFormDescription}</p>
      <form onSubmit={handleFormSubmit}>
        {loginInputsConfig.map((input, i) => {
          const keyValue = `${input.name}-${i}`;
          return (
            <Input
              wrapperClass={styles.inputWrapper}
              inputClass={cn(styles.input, input.mbSmall && "mb-[10px]")}
              key={keyValue}
              id={input.id}
              label={input.label}
              labelClass={styles.label}
              placeholder={input.placeholder}
              onChange={handleInputChange}
            />
          );
        })}

        <Link className={styles.forgotten} href={AppRoute.Home}>
          Забыли пароль?
        </Link>

        <Button className={styles.button} type="submit">
          <span>{submitButtonText}</span>
        </Button>
        <Checkbox
          checkBoxClass={styles.checkbox}
          id="login-agreement"
          variant="black"
          value={formValues["login-agreement"]}
          onChange={handleCheckboxChange}
        >
          <Link className={styles.checkboxInfo} href={AppRoute.Rules}>
            {loginCheckboxInfo}
          </Link>
        </Checkbox>
      </form>
    </>
  );
};

export default LoginForm;
