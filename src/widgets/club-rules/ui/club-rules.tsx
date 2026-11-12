import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import { rulesSectionTitle, rulesSectionDescription } from "../lib";
import OpenRules from "./open-rules";

const styles = {
  root: "py-[30px] px-0 md:pb-[110px] lg:pt-[63px] lg:pb-[70px]",
  title: cn(
    "text-[2.5em] md:text-[4.375em] lg:text-[4.625em] xl:text-[5em] 2xl:text-[5.25em] 3xl:text-[5.5em]",
    "text-center leading-one lg:leading-small tracking-base",
  ),
  wrapper: cn(
    "mt-[20px] md:mt-[43px]",
    "text-sm md:text-base lg:text-lg 2xl:text-xl",
    "leading-main lg:leading-[145%] md:leading-middle",
    "tracking-base lg:tracking-none text-white-70",
  ),
};

const ClubRules = () => {
  return (
    <section className={styles.root}>
      <Heading
        className={styles.title}
        level="h1"
        title={rulesSectionTitle}
        gradientType="white"
      />
      <div className={styles.wrapper}>
        <span>{rulesSectionDescription.greeting}</span>
        <OpenRules />
      </div>
    </section>
  );
};

export default ClubRules;
