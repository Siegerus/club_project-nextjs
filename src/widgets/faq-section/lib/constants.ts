import { FaqItems } from "@/entities/company";
import { questionsToConfig } from "./utils";

export const faqSectionTitle = "Популярные вопросы";

export type QuestionItem = {
  question: string;
  answer: string;
  answerHeight: number;
};

const answerContentHeight = 400;

export const faqItemsConfig = questionsToConfig(FaqItems, answerContentHeight);
