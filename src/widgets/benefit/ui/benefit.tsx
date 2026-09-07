import { Card } from "@/shared/ui";
import { Heading } from "@/shared/ui";
import { benefitTitle } from "../lib";

const styles = {
  root: "",
  title: "",
  cardImage: "",
  description: "",
};

const Benefit = () => {
  return (
    <section className={styles.root}>
      <Heading className={styles.title} level="h1" title={benefitTitle} />
      <Card
        imageClass={styles.cardImage}
        descriptionClass={styles.description}
        imageSrc=""
        imageWidth={20}
        imageHeight={20}
      >
        <span>Lorem ipsum dolor sit amet</span>
      </Card>
    </section>
  );
};

export default Benefit;
