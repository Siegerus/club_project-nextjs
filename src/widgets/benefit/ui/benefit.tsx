import { benefits } from "@/entities/company";
import { NumberedCard } from "@/shared/ui";
import { Heading } from "@/shared/ui";
import { benefitTitle } from "../lib";

const styles = {
  root: "py-[40px] md:pt-[145px]",
  cardWrapper: "",
  cardTitle: "",
  title: "",
  cardImage: "",
  description: "",
};

const Benefit = () => {
  return (
    <section className={styles.root}>
      <Heading className={styles.title} level="h1" title={benefitTitle} />
      <ul>
        {benefits.map((benefit, i) => {
          const keyValue = `${benefit.titleText} + ${i}`;
          return (
            <NumberedCard
              wrapperClass={styles.cardWrapper}
              imageClass={styles.cardImage}
              titleClass={styles.cardTitle}
              number={i + 1}
              descriptionClass={styles.description}
              imageSizes={{ width: 20, height: 20 }}
              cardData={benefit}
              key={keyValue}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Benefit;
