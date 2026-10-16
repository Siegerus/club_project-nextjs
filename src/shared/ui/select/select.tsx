"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
};

const styles = {
  wrapper: "",
  control:
    "flex justify-between px-[20px] py-[18px] md:py-[22px] text-base text-white-40 leading-[145%] tracking-base text-left",
  activeControl: "outline-[6px] outline-focus-input text-white",
  controlIcon: "duration-base",
  body: "flex flex-col items-left bg-select-bg",
  radio: "hidden",
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
  controlIconPath = "/icons/down.svg",
  controlIconClass,
  iconWidth = 20,
  iconHeight = 20,
}: SelectProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isBodyVisible, setIsBodyVisible] = useState<boolean>(false);

  const controlIconClassName = cn(styles.controlIcon, controlIconClass);
  const activeControlClassName = cn(styles.activeControl, activeControlClass);
  const controlClassName = cn(
    styles.control,
    isBodyVisible && activeControlClassName,
  );

  const handleRadioChange = (index: number) => {
    setActiveIndex(index);
    setIsBodyVisible(false);
  };

  const handleControlClick = () => {
    setIsBodyVisible((prevState) => !prevState);
  };

  const controlText = radios[activeIndex].label;

  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      <button
        className={cn(controlClassName, controlClass)}
        onClick={handleControlClick}
        type="button"
        aria-controls="select-body"
      >
        <span>{controlText}</span>
        <Image
          className={cn(controlIconClassName, isBodyVisible && "-scale-y-[1]")}
          width={iconWidth}
          height={iconHeight}
          alt="arrow"
          src={controlIconPath}
        />
      </button>

      <AnimatePresence>
        {isBodyVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(styles.body, bodyClass)}
            aria-haspopup="listbox"
            aria-expanded={isBodyVisible}
            id="select-body"
          >
            {radios.map((radio, i) => {
              return (
                <div className={styles.labelWrapper} key={radio.id}>
                  <input
                    className={cn(styles.radio, radioClass)}
                    type="radio"
                    name={radio.name}
                    id={radio.id}
                    value={radio.value}
                    checked={activeIndex === i}
                    onChange={() => handleRadioChange(i)}
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
