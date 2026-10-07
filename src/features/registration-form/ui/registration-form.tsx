"use client";

import { cn } from "@/shared/lib";
import { Input } from "@/shared/ui";
import { inputsConfig } from "../model";

const styles = {
  inputWrapper: "relative",
  labelClass:
    "block  absolute -top-[8px] left-[17px]  px-[6px] text-sm leading-main tracking-base text-additional bg-main-label rounded-smallest",
  input:
    "w-full mb-[24px] md:mb-[20px] py-[16px] md:py-[18px] px-[30px] border-2 border-additional rounded-smallest placeholder:text-base md:placeholder:text-base",
};

const RegistrationForm = () => {
  return (
    <form>
      {inputsConfig.map((input, i) => {
        const keyValue = `${input.name}-${i}`;
        return input.isSelect ? (
          <span key={keyValue}>test-select</span>
        ) : (
          <Input
            inputClass={cn(styles.input, input.mbSmall && "mb-[10px]")}
            labelClass={styles.labelClass}
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
