import { Heading } from "@/shared/ui";

import { faqSectionTitle } from "../lib";
import FaqList from "./faq-list";

const styles = {
  root: "pt-[5px] pb-[30px] md:pt-[20px] md:pb-[90px] lg:pt-[70px] lg:pb-[65px]",
  title: "title-responsive leading-one tracking-base",
};

const FaqSection = () => {
  return (
    <section className={styles.root}>
      <Heading
        className={styles.title}
        level="h1"
        gradientType="white"
        title={faqSectionTitle}
      />
      <FaqList />
    </section>
  );
};

export default FaqSection;
