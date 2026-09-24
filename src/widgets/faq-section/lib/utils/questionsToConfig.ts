import { type FaqItem } from "@/entities/company";
import type { QuestionItem } from "../constants";

const questionsToConfig = (
  faqItems: FaqItem[],
  answerContentHeight: number,
): QuestionItem[] => {
  return faqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
    answerHeight: answerContentHeight,
  }));
};

export default questionsToConfig;
