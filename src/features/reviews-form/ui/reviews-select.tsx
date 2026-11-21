"use client";

import { ChangeEvent, useCallback } from "react";

import type { EventItem } from "@/entities/event";
import { cn, LoadingStatus, UserMessage } from "@/shared/lib";
import { selectLabelText, errorButtonText } from "../lib";

type ReviewsSelectProps = {
  value: string;
  options: EventItem[];
  status: keyof typeof LoadingStatus;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  reload: () => void;
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
  errorMessage: "mb-[10px] text-sm lg:text-base text-center text-white-70",
};

const ReviewsSelect = ({
  value,
  options,
  status,
  onChange,
  reload,
  fieldClass,
}: ReviewsSelectProps) => {
  const selectLabel =
    status === LoadingStatus.Loading
      ? UserMessage.LoadingProgress
      : selectLabelText;

  if (status === LoadingStatus.Failed)
    return <ErrorBlock reload={reload} fieldClass={fieldClass} />;

  return (
    <select
      id="reviews-form-event"
      name="reviews-form-event"
      aria-label={selectLabel}
      value={value}
      onChange={onChange}
      className={cn(
        styles.select,
        fieldClass,
        value ? "text-white-70" : "text-select-text",
      )}
    >
      <option className={styles.selectPlaceholder} value="" disabled>
        {selectLabel}
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

const ErrorBlock = ({
  reload,
  fieldClass,
}: Pick<ReviewsSelectProps, "reload" | "fieldClass">) => {
  const handleReloadButtonClick = useCallback(() => reload(), [reload]);

  return (
    <>
      <p className={styles.errorMessage}>{UserMessage.LoadingError}</p>
      <button
        className={cn(styles.select, fieldClass)}
        onClick={handleReloadButtonClick}
        type="button"
      >
        {errorButtonText}
      </button>
    </>
  );
};
