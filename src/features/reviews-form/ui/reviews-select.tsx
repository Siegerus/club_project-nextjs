"use client";

import { ChangeEvent } from "react";

import type { EventItem } from "@/entities/event";
import { cn } from "@/shared/lib";
import { selectLabelText } from "../lib";

type ReviewsSelectProps = {
  value: string;
  options: EventItem[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  fieldClass: string;
};

const styles = {
  selectField: cn("max-w-full mx-auto text-center"),
  selectPlaceholder: cn("max-w-full mx-auto text-center text-white"),
  select: cn(
    "min-h-[66px] max-w-full mx-auto mb-[10px] py-[20px] text-center",
    "text-base text-center text-select-text tracking-base",
    "overflow-hidden text-ellipsis whitespace-nowrap",
    "appearance-none [-webkit-appearance:none] [-moz-appearance:none] cursor-pointer input-interactive",
  ),
};

const ReviewsSelect = ({
  value,
  options,
  onChange,
  fieldClass,
}: ReviewsSelectProps) => {
  return (
    <select
      name="reviews-form-event"
      value={value}
      onChange={onChange}
      className={cn(
        styles.select,
        fieldClass,
        value ? "text-white-70" : "text-select-text",
      )}
    >
      <option className={styles.selectPlaceholder} value="" disabled>
        {selectLabelText}
      </option>
      {options.map((option, i) => {
        const keyValue = `${option.id}-${i}`;

        return (
          <option
            key={keyValue}
            value={option.title}
            className={styles.selectField}
          >
            {option.title}
          </option>
        );
      })}
    </select>
  );
};

export default ReviewsSelect;
