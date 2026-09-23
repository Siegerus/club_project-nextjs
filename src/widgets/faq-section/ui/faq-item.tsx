"use client";

import { useState } from "react";

import { cn } from "@/shared/lib";
import { ClosingItem } from "@/shared/ui";
import { QuestionItem } from "../lib";

type FaqItemProps = QuestionItem;

const styles = {
  item: "cursor-pointer",
  itemWrapper: "",
  question: "",
  content: "",
  toggleButton:
    "w-[36px] h-[36px] close-button before:h-[12px] before:w-[2px] after:w-[12px] after:h-[2px] -rotate-45 duration-base",
};

const FaqItem = ({ answer, question }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const itemClass = cn(styles.item, isOpen && "text-white-70");
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
      <p className={styles.content}>{answer}</p>
    </li>
  );
};

export default FaqItem;
