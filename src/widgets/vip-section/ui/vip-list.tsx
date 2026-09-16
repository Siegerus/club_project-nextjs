import { premiumCapabilities } from "@/entities/company";
import { cn } from "@/shared/lib";
import { Card } from "@/shared/ui";
import { capabilitysToCardData } from "../lib";

const styles = {
  cardList: "mt-[20px]",
  cardWrapper: "",
  cardTitle: cn(""),
  cardDescription: cn(""),
  cardImageWrapper: "",
  cardImage: "",
  bottomList: "",
};

const capabilitysData = capabilitysToCardData(premiumCapabilities);

const VipList = () => {
  return (
    <ul className={styles.cardList}>
      {capabilitysData.map((capability, i) => {
        const keyValue = `${capability.titleText}-${i}`;
        return (
          <li key={keyValue}>
            <Card
              cardData={capability}
              imageSizes={{ width: 100, height: 100 }}
              wrapperClass={styles.cardWrapper}
              titleClass={styles.cardTitle}
              descriptionClass={styles.cardDescription}
              imageWrapperClass={styles.cardImageWrapper}
              imageClass={styles.cardImage}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default VipList;
