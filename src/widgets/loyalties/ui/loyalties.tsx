import { loyaltyLevels, type LoyaltyLevel } from "@/entities/company";
import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import { Container } from "@/shared/ui";
import { loyaltiesTitle, loyaltiesDescription } from "../lib";
import LoyaltyCard from "./loyalty-card";

const descriptionCommon = cn(
  "max-w-[315px] md:max-w-[500px] lg:max-w-[820px] mt-[10px] md:mt-[20px] mx-auto",
  "text-sm md:text-base lg:text-2xl",
  "text-center leading-main tracking-base lg:tracking-none text-white-70",
);
const styles = {
  root: "pt-[10px] pb-[30px] md:pt-[30px] md:pb-[120px] lg:py-[80px]",
  container: "container-tablet-override",
  title:
    "md:min-w-[657px] title-responsive leading-[0.8] tracking-base md:whitespace-nowrap",
  description: {
    mobile: cn(descriptionCommon, "md:hidden"),
    desktop: cn(descriptionCommon, "hidden md:block"),
  },
  cardList: cn(
    "grid justify-center md:justify-start lg:justify-center",
    "grid-cols-[minmax(0,385px)] md:grid-cols-[repeat(3,313px)] lg:grid-cols-[repeat(3,310px)] xl:grid-cols-[repeat(3,360px)] 3xl:grid-cols-[repeat(3,500px)]",
    "grid-rows-[repeat(3,minmax(575px,auto))] auto-rows-[minmax(575px,auto)] md:grid-rows-[minmax(752px,auto)] md:auto-rows-[minmax(752px,auto)]",
    "gap-y-[10px] md:gap-x-[19px] mt-[20px] md:mt-[55px] lg:mt-[78px]",
  ),
  listItem: "w-full h-full",
  scrollBlock: "overflow-x-scroll lg:overflow-x-auto",
};

const Loyalties = () => {
  return (
    <section className={styles.root}>
      <Container>
        <Heading
          className={styles.title}
          level="h1"
          title={loyaltiesTitle}
          gradientType="white"
        />
        <p className={styles.description.mobile}>
          {loyaltiesDescription.mobile}
        </p>
        <p className={styles.description.desktop}>
          {loyaltiesDescription.desktop}
        </p>
      </Container>
      <Container containerClass={styles.container}>
        <div className={styles.scrollBlock}>
          <ul className={styles.cardList}>
            {loyaltyLevels.map((level: LoyaltyLevel, i) => {
              const keyValue = `${level.name}-${i}`;
              return (
                <li className={styles.listItem} key={keyValue}>
                  <LoyaltyCard
                    name={level.name}
                    description={level.description}
                    imagePath={level.imagePath}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Loyalties;
