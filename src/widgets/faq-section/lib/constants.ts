import { FaqItems } from "@/entities/company";
import { questionsToConfig } from "./utils";

export const faqSectionTitle = "Популярные вопросы";

export const faqItemsConfig = questionsToConfig(FaqItems);

export type QuestionItem = {
  question: string;
  answer: string;
};
