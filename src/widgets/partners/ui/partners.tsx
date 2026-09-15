import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import { partnersTitle } from "../lib";
import PartnersList from "./partners-list";

const styles = {
  root: "pt-[10px] md:pt-0 pb-[40px] md:pb-[85px] lg:pb-[100px] lg:pt-0 xl:pt-[35px]",
  wrapper: "overflow-x-scroll lg:overflow-x-visible",
  title: cn(
    "text-[2.5em] md:text-[4.375em] lg:text-[4.625em] xl:text-[5em] 2xl:text-[5.25em] 3xl:text-[5.5em]",
    "text-center leading-one lg:leading-[110px] tracking-base",
  ),
};

const Partners = () => {
  return (
    <section className={styles.root}>
      <Heading className={styles.title} level="h2" title={partnersTitle} />
      <div className={styles.wrapper}>
        <PartnersList />
      </div>
    </section>
  );
};

export default Partners;
