import Image from "next/image";

import { opportunities } from "@/entities/company";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Heading } from "@/shared/ui/heading";
import {
  joinTitleText,
  joinImageMobilePath,
  joinImageTabletPath,
  joinImageDescPath,
} from "../lib";
import { getItemsParts } from "../lib";

import JoinList from "./join-list";

const styles = {
  root: "relative pt-[40px] pb-[88px] md:pt-[30px] md:pb-[20px] lg:pt-[10px] lg:pb-[80px] xl:py-[80px]",
  title: cn(
    "md:max-w-[570px] lg:max-w-[unset] md:mx-auto px-[22px] md:px-0",
    "text-[2.5em] md:text-[4.375em] lg:text-[4.625em] xl:text-[5em] 2xl:text-[5.25em] 2xl:text-[5.5em]",
    "text-center leading-one lg:leading-[110px] tracking-base",
  ),
  wrapper: cn(
    "relative flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-between",
    "w-full min-h-[671px] md:min-h-[unset] mt-[10px] md:mt-[26px] lg:mt-[50px] xl:mt-[60px]",
    "p-[20px] md:pt-[39px] md:px-[40px] md:pb-[60px] lg:pt-[76px] lg:pb-[55px]",
    "border-none md:border-2 md:border-solid md:border-special rounded-[30px] bg-main-bg-secondary",
  ),
  imageWrapper:
    "z-[5] absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[310px]",
  bgImage: "object-cover lg:object-contain",
};

const JoinSection = () => {
  const { firstPart, secondPart } = getItemsParts(opportunities);

  return (
    <section className={styles.root}>
      <Heading className={styles.title} level="h2" title={joinTitleText} />
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            className={cn(styles.bgImage, "md:hidden")}
            fill
            src={joinImageMobilePath}
            sizes="100vh"
            alt=""
          />
          <Image
            className={cn(styles.bgImage, "hidden md:block lg:hidden")}
            fill
            src={joinImageTabletPath}
            sizes="100vh"
            alt=""
          />
          <Image
            className={cn(styles.bgImage, "hidden lg:block")}
            fill
            src={joinImageDescPath}
            sizes="100vh"
            alt=""
          />
        </div>
        <JoinList itemTexts={firstPart} isBottomIndent />
        <JoinList itemTexts={secondPart} />
      </div>
    </section>
  );
};

export default JoinSection;
