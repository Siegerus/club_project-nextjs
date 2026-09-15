import { bangles } from "@/entities/company";
import { cn } from "@/shared/lib";
import { Card } from "@/shared/ui";
import { banglesToCardData } from "../lib";

const styles = {
  list: cn(
    "grid grid-cols-1 grid-rows-[minmax(228px,auto)] grid-auto-rows-[minmax(228px,_auto)] gap-y-[10px]",
    "mt-[20px]",
    "list-none",
  ),
};

const banglesCardData = banglesToCardData(bangles);

const BanglesList = () => {
  return (
    <ul className={styles.list}>
      {banglesCardData.map((bangle, i) => {
        const keyValue = `${bangle.titleText.top} + ${i}`;
        return (
          <Card
            cardData={bangle}
            imageSizes={{ width: 186, height: 100 }}
            key={keyValue}
          />
        );
      })}
    </ul>
  );
};

export default BanglesList;
