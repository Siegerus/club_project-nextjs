import { premiumCapabilities } from "@/entities/company";
import { cn } from "@/shared/lib";
import { ContentCard } from "@/shared/ui";
import { capabilitysToCardData } from "../lib";

const styles = {
  cardList: cn(
    "grid justify-items-center md:justify-center",
    "grid-cols-1 md:grid-cols-[repeat(2,315px)] lg:grid-cols-[repeat(2,474px)] xl:grid-cols-[repeat(2,550px)] 3xl:grid-cols-[repeat(2,760px)]",
    "grid-rows-[repeat(4,minmax(136px,_auto))] md:grid-rows-[repeat(2,minmax(297px,_auto))] lg:grid-rows-[repeat(2,minmax(206px,_auto))]",
    "auto-rows-[minmax(136px,auto)] lg:auto-rows-[minmax(206px,_auto)]",
    "gap-y-[10px] md:gap-y-[20px] md:gap-x-[20px]",
    "mt-[20px] md:mt-[30px] lg:mt-[40px]",
  ),
  cardWrapper:
    "flex w-full h-full md:flex-col lg:flex-row max-w-[335px] lg:max-w-[unset] p-[16px] md:p-[20px] lg:px-[30px] lg:pb-[31px] 3xl:p-[40px]",
  cardTitle: cn(
    "md:max-w-[250px] lg:max-w-[unset] text-xl md:text-2xl md:mt-[30px] lg:mt-0 lg:text-3xl 3xl:text-[2em] leading-main lg:leading-one tracking-base",
    "text-white",
  ),
  cardDescription: cn(
    "mt-[5px] md:mt-[16px] text-sm md:text-base lg:text-lg xl:text-[1.1875em] md:leading-main lg:tracking-none text-left",
  ),
  cardBlock: "items-start max-w-[220px] md:max-w-[unset]",
  cardImageWrapper:
    "items-start justify-start w-auto min-w-[40px] lg:min-w-[100px] mr-[20px] lg:mr-[40px]",
  cardImage:
    "w-[40px] h-[40px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] object-cover",
  bottomList: "",
};

const capabilitysData = capabilitysToCardData(premiumCapabilities);

const VipList = () => {
  return (
    <ul className={styles.cardList}>
      {capabilitysData.map((capability, i) => {
        const keyValue = `${capability.titleText.top}-${i}`;
        return (
          <li key={keyValue}>
            <ContentCard
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
