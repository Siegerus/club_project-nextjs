import { premiumCapabilities } from "@/entities/company";
import { cn } from "@/shared/lib";
import { Card } from "@/shared/ui";
import { capabilitysToCardData } from "../lib";

const styles = {
  cardList: cn(
    "grid justify-items-center md:justify-center",
    "grid-col-1 md:grid-cols-[repeat(2,315px)] lg:grid-cols-[repeat(2,474px)] xl:grid-cols-[repeat(2,550px) 3xl:grid-cols-[repeat(2,760px)",
    "grid-rows-[repeat(4,minmax(136px,_auto))] md:grid-rows-[repeat(2,minmax(297px,_auto))] lg:grid-rows-[repeat(2,minmax(206px,_auto))]",
    "auto-rows-[minmax(136px,auto)] lg:auto-rows-[minmax(206px,_auto)]",
    "gap-y-[10px] md:gap-y-[20px] md:gap-x-[20px]",
    "mt-[20px] md:mt-[30px] lg:mt-[40px]",
  ),
  cardWrapper: "flex max-w-[315px] p-[16px]",
  cardTitle: cn("text-xl leading-main"),
  cardDescription: cn("mt-[5px] text-sm text-left"),
  cardBlock: "items-start",
  cardImageWrapper: "items-start justify-start",
  cardImage: "w-[40px] h-[40px]",
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
              blockClass={styles.cardBlock}
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
