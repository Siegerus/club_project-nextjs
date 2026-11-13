"use client";

import { cn } from "@/shared/lib";
import { Input } from "@/shared/ui";
import type { ReserveTabId } from "../lib";
import { reserveInputsConfig, ReserveInputName } from "../model";

type ReserveFormProps = {
  id: ReserveTabId;
};

const styles = {
  form: "flex flex-col items-center w-full",
  input: cn(
    "min-w-full mt-[16px] mb-[10px] md:mb-[20px] px-[30px] mx-auto",
    "rounded-2xl border-2 border-additional placeholder:text-sm md:placeholder:text-base leading-one",
  ),
};

const ReserveForm = ({ id }: ReserveFormProps) => {
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
            />
          );
        })}
      </form>
    </>
  );
};

export default ReserveForm;
