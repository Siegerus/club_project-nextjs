import { bangles } from "@/entities/company";
import { cn } from "@/shared/lib";
import { Card } from "@/shared/ui";
import { banglesToCardData } from "../lib";

const styles = {
  list: cn(
    "grid grid-cols-1 justify-items-center grid-rows-[minmax(228px,auto)] grid-auto-rows-[minmax(228px,_auto)] gap-y-[10px]",
    "mt-[20px]",
    "list-none",
  ),
  listItem: "",
  cardWrapper: "flex flex-col items-center w-[320px] p-[20px]",
  cardTitle: "mt-[24px] text-2xl leading-[80%]",
  cardImageWrapper: "",
  cardImage: "w-[186px] h-[100px] object-cover",
  cardDescription: "mt-[10px] text-sm tracking-base",
};

const banglesCardData = banglesToCardData(bangles);

const BanglesList = () => {
  return (
    <ul className={styles.list}>
      {banglesCardData.map((bangle, i) => {
        const keyValue = `${bangle.titleText.top} + ${i}`;
        return (
          <li className={styles.listItem} key={keyValue}>
            <Card
              cardData={bangle}
              imageSizes={{ width: 186, height: 100 }}
              wrapperClass={styles.cardWrapper}
              titleClass={styles.cardTitle}
              imageWrapperClass={styles.cardImageWrapper}
              imageClass={styles.cardImage}
              descriptionClass={styles.cardDescription}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BanglesList;
