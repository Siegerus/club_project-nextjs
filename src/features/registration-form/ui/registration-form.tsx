"use client";

import { cn } from "@/shared/lib";
import { Input } from "@/shared/ui";
import { Select } from "@/shared/ui";
import { inputsConfig, radiosConfig } from "../model";

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
    "before:absolute before:w-[13px] before:h-[13px] before:top-1/2 before:right-[10px] before:-translate-y-1/2 custom-checkbox text-base tracking-base",
};

const RegistrationForm = () => {
  return (
    <form>
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
          />
        ) : (
          <Input
            inputClass={cn(styles.input, input.mbSmall && "mb-[10px]")}
            labelClass={styles.inputLabelClass}
            wrapperClass={styles.inputWrapper}
            key={keyValue}
            id={input.name}
            type={input.type}
            placeholder={input.placeholder}
            label={input.label}
            aria-label={input.ariaLabel}
            autoComplete={input.autoComplete}
          />
        );
      })}
    </form>
  );
};

export default RegistrationForm;
