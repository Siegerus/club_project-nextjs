import { faqItemsConfig } from "../lib";
import FaqItem from "./faq-item";

const styles = {
  list: "mt-[10px] ",
};

const FaqList = () => {
  return (
    <ul className={styles.list}>
      {faqItemsConfig.map((item, i) => (
        <FaqItem answer={item.answer} question={item.question} key={i} />
      ))}
    </ul>
  );
};

export default FaqList;
