"use client";

import { useState } from "react";

import { cn } from "@/shared/lib";
import { QuestionItem } from "../lib";

type FaqItemProps = QuestionItem;

const styles = {
  item: "cursor-pointer",
};

const FaqItem = ({ answer, question }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const itemClass = cn(styles.item, isOpen && "text-white-70");

  const handleToggleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <li className={itemClass} onClick={handleToggleClick}>
      {question}
    </li>
  );
};

export default FaqItem;
