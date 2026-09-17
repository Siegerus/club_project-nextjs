import { bangles } from "@/entities/company";
import { cn } from "@/shared/lib";
import { ContentCard } from "@/shared/ui";
import { banglesToCardData } from "../lib";

const styles = {
  list: cn(
    "grid justify-items-center justify-center",
    "grid-cols-1 md:grid-cols-[repeat(2,315px)] lg:grid-cols-[repeat(3,310px)] xl:grid-cols-[repeat(3,360px)] 3xl:grid-cols-[repeat(3,500px)]",
    "grid-rows-[minmax(228px,_auto)] md:grid-rows-[minmax(305px,_auto)] lg:grid-rows-[minmax(370px,_auto)] 3xl:grid-rows-[minmax(410px,_auto)]",
    "auto-rows-[minmax(228px,_auto)] md:auto-rows-[minmax(305px,_auto)] lg:auto-rows-[minmax(370px,_auto)] 3xl:auto-rows-[minmax(410px,_auto)]",
    "gap-y-[10px] md:gap-y-[20px] md:gap-x-[20px] mt-[20px] md:mt-[27px] lg:mt-[60px] list-none",
  ),
  listItem: "",
  cardWrapper:
    "flex flex-col items-center w-[320px] md:w-auto md:h-full p-[20px] md:py-[40px] lg:py-[15px] lg:px-[10px] xl:p-[40px]",
  cardTitle:
    "mt-[24px] md:mt-[60px] lg:mt-[65px] xl:mt-[50px] 3xl:mt-[80px] text-2xl lg:text-[2em] xl:text-[2em] 2xl:text-[2em] leading-[80%] tracking-base",
  cardImageWrapper: "",
  cardImage:
    "w-[186px] md:w-[228px] h-[100px] md:h-[123px] object-cover md:object-contain",
  cardDescription:
    "mt-[10px] md:mt-[6px] lg:mt-[16px] text-sm md:text-base lg:text-xl xl:text-xl md:leading-middle lg:leading-main tracking-base lg:tracking-none",
};

const banglesCardData = banglesToCardData(bangles);

const BanglesList = () => {
  return (
    <ul className={styles.list}>
      {banglesCardData.map((bangle, i) => {
        const keyValue = `${bangle.titleText.top} + ${i}`;
        return (
          <li className={styles.listItem} key={keyValue}>
            <ContentCard
              cardData={bangle}
              imageSizes={{ width: 228, height: 100 }}
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
