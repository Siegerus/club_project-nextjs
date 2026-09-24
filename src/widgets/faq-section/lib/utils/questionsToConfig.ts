import { type FaqItem } from "@/entities/company";
import type { QuestionItem } from "../constants";

const questionsToConfig = (faqItems: FaqItem[]): QuestionItem[] => {
  return faqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
};

export default questionsToConfig;
