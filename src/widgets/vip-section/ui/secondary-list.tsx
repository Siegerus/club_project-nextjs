import { premiumSales } from "@/entities/company";
import { cn, getFormattedPrice } from "@/shared/lib";
import { LinkButton, BaseCard } from "@/shared/ui";
import { vipSectionSecondaryList } from "../lib";

const styles = {
  cardsList:
    "hidden lg:flex items-end justify-between max-w-[1111px] mt-[40px] mx-auto 3xl:[&>li:nth-child(1)]:pt-[200px]",
  listItem: "w-[31.7%] [&:nth-child(2):nth-last-child(2)]:w-[32.8%]",
  cardWrapper:
    "flex flex-col items-center pt-[20px] pb-[40px] px-[50px] xl:pt-[20px] xl:pb-[31px] xl:px-[30px]",
  cardInterval:
    "text-9xl text-center leading-one font-semibold tracking-base bg-brown-gradient-text",
  cardIntervalName:
    "text-[2em] leading-one text-center tracking-base font-semibold text-white-40",
  cardPrice:
    "mt-[25px] xl:mt-[40px] text-[2em] text-center tracking-base leading-one font-semibold text-white",
  cardDescription:
    "block mt-[16px] text-lg xl:text-[1.1875em] 3xl:text-xl text-left leading-main tracking-base lg:tracking-none text-white-70",

  button:
    "max-w-[unset] 3xl:max-w-[unset] mt-[20px] text-center leading-main tracking-base",
};

const SecondaryList = () => {
  const { descriptions, buttonText, periodName } = vipSectionSecondaryList;
  const { fullYear } = premiumSales;
  const formattedPrice = getFormattedPrice(fullYear.price, true);

  return (
    <ul className={styles.cardsList}>
      <li className={styles.listItem}>
        <BaseCard
          wrapperClass={cn(
            styles.cardWrapper,
            "3xl:pt-[55px] 3xl:px-[40px] 3xl:pb-[40px]",
          )}
        >
          <p className={styles.cardDescription}>{descriptions[0]}</p>
        </BaseCard>
      </li>
      <li className={styles.listItem}>
        <BaseCard wrapperClass={cn(styles.cardWrapper, "3xl:p-[40px]")}>
          <span className={styles.cardInterval}>{fullYear.text}</span>
          <span className={styles.cardIntervalName}>{periodName}</span>
          <span className={styles.cardPrice}>{formattedPrice}</span>
          <LinkButton className={styles.button} path="/">
            <span>{buttonText}</span>
          </LinkButton>
        </BaseCard>
      </li>
      <li className={styles.listItem}>
        <BaseCard
          wrapperClass={cn(
            styles.cardWrapper,
            "3xl:pt-[118px] 3xl:px-[40px] 3xl:pb-[40px]",
          )}
        >
          <p className={styles.cardDescription}>{descriptions[1]}</p>
        </BaseCard>
      </li>
    </ul>
  );
};

export default SecondaryList;
