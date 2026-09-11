import Image from "next/image";

import { opportunities } from "@/entities/company";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Heading } from "@/shared/ui/heading";
import { joinTitleText } from "../lib";
import { getItemsParts } from "../lib";

import JoinList from "./join-list";

const styles = {
  root: "pt-[40px] pb-[88px] md:pt-[30px] md:pb-[20px] lg:pt-[10px] lg:pb-[80px] xl:py-[80px]",
  title: cn(
    "md:max-w-[570px] lg:max-w-[unset] md:mx-auto px-[22px] md:px-0",
    "text-[2.5em] md:text-[4.375em] lg:text-[4.625em] xl:text-[5em] 2xl:text-[5.25em] 2xl:text-[5.5em]",
    "text-center leading-one lg:leading-[110px] tracking-base",
  ),
  wrapper: cn(
    "flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-between",
    "w-full min-h-[671px] md:min-h-[unset] mt-[10px] md:mt-[26px] lg:mt-[50px] xl:mt-[60px]",
    "p-[20px] md:pt-[39px] md:px-[40px] md:pb-[60px] lg:pt-[76px] lg:pb-[55px]",
    "border-none md:border-2 md:border-solid md:border-special rounded-[30px] bg-main-bg-secondary",
  ),
};

const JoinSection = () => {
  const { firstPart, secondPart } = getItemsParts(opportunities);

  return (
    <section className={styles.root}>
      <Heading className={styles.title} level="h2" title={joinTitleText} />
      <div className={styles.wrapper}>
        <JoinList itemTexts={firstPart} isBottomIndent />
        <JoinList itemTexts={secondPart} />
      </div>
    </section>
  );
};

export default JoinSection;
