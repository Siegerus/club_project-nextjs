"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

import { cn } from "@/shared/lib";
import type { Radio } from "./types";

type SelectProps = {
  wrapperClass?: string;
  controlClass?: string;
  activeControlClass?: string;
  bodyClass?: string;
  radioClass?: string;
  labelClass?: string;
  controlIconPath?: string;
  controlIconClass?: string;
  iconWidth?: number;
  iconHeight?: number;
  radios: Radio[];
  formValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const styles = {
  wrapper: "",
  control:
    "flex justify-between px-[20px] py-[18px] md:py-[22px] text-base text-white-40 leading-[145%] tracking-base text-left",
  activeControl: "outline-[6px] outline-focus-input text-white",
  controlIcon: "duration-base",
  body: "flex flex-col bg-select-bg",
  radio: "sr-only",
  labelWrapper: "relative p-[10px]",
  label: "text-white",
};

const Select = ({
  radios,
  wrapperClass,
  controlClass,
  activeControlClass,
  bodyClass,
  radioClass,
  labelClass,
  controlIconPath,
  controlIconClass,
  iconWidth = 20,
  iconHeight = 20,
  onChange,
  formValue,
}: SelectProps) => {
  const [isBodyVisible, setIsBodyVisible] = useState<boolean>(false);

  const controlIconClassName = cn(styles.controlIcon, controlIconClass);
  const activeControlClassName = cn(styles.activeControl, activeControlClass);
  const controlClassName = cn(
    styles.control,
    isBodyVisible && activeControlClassName,
  );

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsBodyVisible(false);
    if (onChange) onChange(e);
  };

  const handleControlClick = () => {
    setIsBodyVisible((prevState) => !prevState);
  };

  const activeIndex = Math.max(
    0,
    radios.findIndex((radio) => radio.value === formValue),
  );

  const controlText = radios[activeIndex]?.label ?? "";

  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      <button
        className={cn(controlClassName, controlClass)}
        onClick={handleControlClick}
        type="button"
        aria-controls="select-body"
        aria-haspopup="listbox"
        aria-expanded={isBodyVisible}
      >
        <span>{controlText}</span>

        {controlIconPath && (
          <Image
            className={cn(
              controlIconClassName,
              isBodyVisible && "-scale-y-[1]",
            )}
            width={iconWidth}
            height={iconHeight}
            alt=""
            src={controlIconPath}
          />
        )}
      </button>
      <AnimatePresence>
        {isBodyVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(styles.body, bodyClass)}
            id="select-body"
          >
            {radios.map((radio) => {
              return (
                <div className={styles.labelWrapper} key={radio.id}>
                  <input
                    className={cn(styles.radio, radioClass)}
                    type="radio"
                    name={radio.name}
                    id={radio.id}
                    value={radio.value}
                    checked={radio.value === formValue}
                    onChange={handleRadioChange}
                  />

                  <label
                    className={cn(styles.label, labelClass)}
                    htmlFor={radio.id}
                  >
                    {radio.label}
                  </label>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
