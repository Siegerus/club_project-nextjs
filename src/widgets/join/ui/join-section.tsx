import Image from "next/image";

import { JoinModalOpen } from "@/features/join-form";
import { opportunities } from "@/entities/company";
import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import {
  getItemsParts,
  joinTitleText,
  joinImageMobilePath,
  joinImageTabletPath,
  joinImageDescPath,
  joinButtonText,
} from "../lib";
import JoinList from "./join-list";

const buttonCommon = "tracking-base leading-middle 3xl:leading-small";

const styles = {
  root: "relative pt-[40px] pb-[88px] md:pt-[30px] md:pb-[20px] lg:pt-[10px] lg:pb-[80px] xl:py-[80px]",
  title: cn(
    "md:max-w-[570px] lg:max-w-[unset] md:mx-auto px-[22px] md:px-0",
    "text-[2.5em] md:text-[4.375em] lg:text-[4.625em] xl:text-[5em] 2xl:text-[5.25em] 3xl:text-[5.5em]",
    "text-center leading-one lg:leading-[110px] tracking-base",
  ),
  wrapper: cn(
    "relative flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-between",
    "w-full min-h-[671px] md:min-h-[unset] mt-[10px] md:mt-[26px] lg:mt-[50px] xl:mt-[60px]",
    "p-[20px] md:pt-[39px] md:px-[40px] md:pb-[60px] lg:pt-[76px] lg:pb-[55px]",
    "border-0 md:border-2 md:border-solid md:border-special rounded-base bg-main-bg-secondary",
  ),
  imageWrapper:
    "z-[5] absolute top-[38%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[310px] lg:h-full",
  bgImage: "object-cover lg:object-contain",

  button: {
    mobile: cn(
      buttonCommon,
      "max-w-[320px] md:max-w-[235px] mt-[10px] md:mt-[18.5px] py-[14px]",
    ),
    desktop: cn(
      buttonCommon,
      "max-w-[300px] 3xl:max-w-[300px] mt-[25px] lg:py-[26px] lg:px-[40px] xl:py-[26px] xl:px-[40px]",
      "2xl:py-[26px] 2xl:px-[40px] 3xl:py-[26px] 3xl:px-[40px] 2xl:text-2xl",
    ),
  },
};

const JoinSection = () => {
  const { firstPart, secondPart } = getItemsParts(opportunities);

  return (
    <section className={styles.root}>
      <Heading
        className={styles.title}
        level="h2"
        gradientType="white"
        title={joinTitleText}
      />
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            className={cn(styles.bgImage, "md:hidden")}
            fill
            src={joinImageMobilePath}
            sizes="(max-width: 768px) 385px"
            alt=""
          />
          <Image
            className={cn(styles.bgImage, "hidden md:block lg:hidden")}
            fill
            src={joinImageTabletPath}
            sizes="(min-width: 768px) 644px"
            alt=""
          />
          <Image
            className={cn(styles.bgImage, "hidden lg:block")}
            fill
            src={joinImageDescPath}
            sizes="(min-width: 1680px) 1536px, (min-width: 1440px) 1316px, (min-width: 1280px) 1116px, (min-width: 1024px) 964px"
            alt=""
          />
        </div>
        <JoinList itemTexts={firstPart} isBottomIndent />
        <JoinList itemTexts={secondPart} />
        <JoinModalOpen
          buttonClass={cn(styles.button.mobile, "lg:hidden")}
          buttonText={joinButtonText}
          buttonVariant="no-bg"
        />
      </div>
      <JoinModalOpen
        buttonClass={cn(styles.button.desktop, "hidden lg:block")}
        buttonText={joinButtonText}
        buttonVariant="no-bg"
      />
    </section>
  );
};

export default JoinSection;
