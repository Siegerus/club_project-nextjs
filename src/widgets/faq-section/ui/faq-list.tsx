import { FaqItems } from "@/entities/company";
import { questionsToConfig } from "../lib";
import FaqItem from "./faq-item";

const faqItemsConfig = questionsToConfig(FaqItems);

const FaqList = () => {
  return (
    <ul>
      {faqItemsConfig.map((item, i) => (
        <FaqItem answer={item.answer} question={item.question} key={i} />
      ))}
    </ul>
  );
};

export default FaqList;
