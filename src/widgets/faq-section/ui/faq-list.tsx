import { faqItemsConfig } from "../lib";
import FaqItem from "./faq-item";

const styles = {
  list: "mt-[10px] md:mt-0 lg:mt-[30px]",
};

const FaqList = () => {
  return (
    <ul className={styles.list}>
      {faqItemsConfig.map((item, i) => {
        const keyValue = `${item}-${i}`;
        return (
          <FaqItem
            answer={item.answer}
            question={item.question}
            key={keyValue}
          />
        );
      })}
    </ul>
  );
};

export default FaqList;
