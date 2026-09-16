import { benefits } from "@/entities/company";
import { cn } from "@/shared/lib";
import { NumberedCard } from "@/shared/ui";
import { Heading } from "@/shared/ui";
import { benefitTitle } from "../lib";
import { benefitsToCardData } from "../lib";

const styles = {
  root: "py-[40px] md:pt-[145px] md:pb-[99px] lg:pt-[125px] 2xl:pt-[165px] 2xl:pb-[99px]",
  title: cn(
    "text-[2.5em] md:text-[4.375em] lg:text-[4.625em] xl:text-[5em] 2xl:text-[5.25em] 3xl:text-[5.5em] text-center",
    "leading-one -tracking-[0.03em] md:-tracking-[0.04em] lg:tracking-base text-wrap md:text-nowrap",
  ),
  listClass: cn(
    "list-none",
    "grid grid-cols-[313px] md:grid-cols-[repeat(2,313px)] lg:grid-cols-[repeat(4,227px)] xl:grid-cols-[repeat(4,265px)] 2xl:grid-cols-[repeat(4,320px)] 3xl:grid-cols-[repeat(4,370px)]",
    "grid-rows-[repeat(4,minmax(293px,auto))] md:grid-rows-[repeat(2,minmax(322px,auto))] lg:grid-rows-[minmax(385px,auto)] xl:grid-rows-[minmax(413px,auto)]",
    "gap-x-[20px] gap-y-[20px] mt-[18px] md:mt-[47px] lg:mt-[55px] xl:mt-[78px] justify-center",
  ),
  cardWrapper:
    "p-[10px] pb-[20px] md:pb-[10px] lg:py-[15px] lg:px-[10px] xl:pt-[20px] xl:pb-[31px] xl:px-[30px] 3xl:px-[20px] 3xl:pt-[20px] 3xl:pb-[31px]",
  cardTitle:
    "max-w-[297px] mt-[20px] lg:mt-[35px] text-[2em] lg:text-[1.625em] xl:text-[2.125em] 2xl:text-4xl leading-one text-center text-white tracking-base",
  cardImageWrapper: "lg:mt-[15px]",
  cardImage: "w-[100px] h-[100px]",
  description: "mt-[10px] lg:tracking-none",
};

const benefitsCardData = benefitsToCardData(benefits);

const Benefit = () => {
  return (
    <section className={styles.root}>
      <Heading className={styles.title} level="h1" title={benefitTitle} />
      <ul className={styles.listClass}>
        {benefitsCardData.map((benefit, i) => {
          const keyValue = `${benefit.titleText.top} + ${i}`;
          return (
            <NumberedCard
              wrapperClass={styles.cardWrapper}
              imageWrapperClass={styles.cardImageWrapper}
              imageClass={styles.cardImage}
              titleClass={styles.cardTitle}
              number={i + 1}
              descriptionClass={styles.description}
              imageSizes={{ width: 100, height: 100 }}
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
