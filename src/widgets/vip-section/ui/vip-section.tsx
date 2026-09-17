import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import { vipSectionTitle, vipSectionDescription } from "../lib/";
import SecondaryList from "./secondary-list";
import VipList from "./vip-list";

const styles = {
  root: "pt-[20px] pb-[30px] md:pb-[100px] lg:pt-[80px] lg:pb-[70px]",
  title: cn(
    "text-[2.5em] md:text-[5.5em] lg:text-[4.625em] xl:text-[5em] 2xl:text-[5.25em] 3xl:text-[5.5em]",
    "text-center leading-[80%] tracking-base bg-rainbow-text",
  ),
  description: cn(
    "block md:max-w-[500px] lg:max-w-[750px] mt-[20px] md:mx-auto md:mt-[13px] lg:mt-[20px]",
    "text-sm md:text-base lg:text-xl text-center leading-main md:leading-middle tracking-base lg:tracking-none text-white-70",
  ),
};

const VipSection = () => {
  return (
    <section className={styles.root}>
      <Heading className={styles.title} level="h1" title={vipSectionTitle} />
      <span className={styles.description}>{vipSectionDescription}</span>
      <VipList />
      <SecondaryList />
    </section>
  );
};

export default VipSection;
