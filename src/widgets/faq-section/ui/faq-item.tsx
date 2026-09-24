"use client";
import { useState } from "react";

import { cn } from "@/shared/lib";
import { ClosingItem } from "@/shared/ui";
import { QuestionItem } from "../lib";

type FaqItemProps = QuestionItem;

const styles = {
  item: cn(
    "grid grid-rows-[auto_0fr] p-[10px] md:pt-[20px] md:pb-0 md:pr-0 md:pl-[20px] lg:pl-[30px]",
    "border-b-2 md:border-b-3 border-white/10 cursor-pointer overflow-y-hidden duration-base",
  ),
  itemWrapper:
    "flex items-center justify-between pb-[15px] md:pb-[20px] lg:pb-[15px] xl:pb-[10px] md:pr-[10px] lg:pr-[12px] 2xl:pr-[15px]",
  question:
    "text-base md:text-2xl lg:text-3xl 3xl:text-[2em] text-white leading-main md:tracking-base lg:tracking-none",
  answerWrapper: "min-h-0 oveflow-y-hidden",
  answer: cn(
    "lg:max-w-[690px] xl:max-w-[902px] mt-[8px] md:mt-0 xl:mt-[5px] pb-[20px] xl:pb-[15px]",
    "text-sm md:text-base lg:text-xl md:tracking-base lg:tracking-none md:leading-middle lg:leading-main text-white-70",
  ),
  toggleButton: cn(
    "close-button z-auto relative",
    "w-[36.5px] h-[36.5px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] xl:w-[60px] xl:h-[60px]",
    "before:h-[12px] md:before:h-[20px] xl:md:before:h-[26px] before:w-[2.5px] lg:before:w-[4px]",
    "after:w-[12px] md:after:w-[20px] xl:after:w-[26px] after:h-[2.5px] lg:after:h-[4px]",
    "-rotate-45 duration-base",
  ),
};

const FaqItem = ({ answer, question }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const itemClass = cn(styles.item, isOpen && "grid-rows-[auto_1fr]");
  const toggleButtonClass = cn(styles.toggleButton, isOpen && "rotate-0");
  const toggleButtonlabel = isOpen
    ? "Скрыть текст вопроса"
    : "Показать текст вопроса";

  const handleToggleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <li className={itemClass} onClick={handleToggleClick}>
      <div className={styles.itemWrapper}>
        <span className={styles.question}>{question}</span>
        <ClosingItem
          buttonClass={toggleButtonClass}
          label={toggleButtonlabel}
        />
      </div>
      <div className={styles.answerWrapper}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </li>
  );
};

export default FaqItem;
