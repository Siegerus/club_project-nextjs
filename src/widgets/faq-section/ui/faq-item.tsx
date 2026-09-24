"use client";
import { useState } from "react";

import { cn } from "@/shared/lib";
import { ClosingItem } from "@/shared/ui";
import { QuestionItem } from "../lib";

type FaqItemProps = QuestionItem;

const styles = {
  item: "grid grid-rows-[auto_0fr] p-[10px] border-b-2 border-white/10 cursor-pointer overflow-y-hidden duration-base",
  itemWrapper: "flex items-center justify-between pb-[15px]",
  question: "text-base text-white leading-main",
  contentWrapper: "min-h-0 oveflow-y-hidden",
  content: "mt-[8px] pb-[20px] text-sm text-white-70",
  toggleButton:
    "close-button z-auto relative w-[36.5px] h-[36.5px] before:h-[12px] before:w-[2.5px] after:w-[12px] after:h-[2.5px] -rotate-45 duration-base",
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
      <div className={styles.contentWrapper}>
        <p className={styles.content}>{answer}</p>
      </div>
    </li>
  );
};

export default FaqItem;
