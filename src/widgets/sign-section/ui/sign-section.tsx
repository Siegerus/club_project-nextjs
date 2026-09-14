import Image from "next/image";

import { cn } from "@/shared/lib";
import { AppRoute } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import { LinkButton } from "@/shared/ui";
import {
  signTitleText,
  signButtonText,
  signDescription,
  signImagePath,
} from "../libs";

const styles = {
  root: "pb-[36px] pt-[10px] md:pb-[180px] lg:pb-[100px] xl:py-[100px]",
  wrapper: cn(
    "relative flex flex-col lg:flex-row lg:justify-start items-center min-h-[707px] lg:min-h-[611px] md:mt-[26px] lg:mt-[50px] 2xl:mt-0",
    "pt-[48px] px-[20px] md:pt-[60px] md:px-[23px] lg:pt-0 lg:pl-[108px]",
    " border-0 md:border-2 md:border-solid md:border-special rounded-base bg-main-bg-secondary",
  ),
  block: "flex flex-col items-center lg:max-w-[584px] lg:items-start",
  title:
    "text-4xl md:text-[4.375em] lg:text-[4.0625em] xl:text-[4.625em] 2xl:text-[5.25em] text-center leading-one lg:leading-large xl:leading-[110px] tracking-base",
  description: cn(
    "mt-[16px] md:mt-[2px] lg:mt-0 px-[20px] md:px-0 text-sm md:text-2xl lg:text-[1.375em] xl:text-2xl text-center lg:text-left",
    " text-white-70 leading-main md:leading-middle tracking-base lg:tracking-none",
  ),
  buttom:
    "max-w-[320px] md:max-w-[291px] lg:max-w-[271px] 2xl:max-w-[310px] mt-[16px] md:mt-[34px] lg:mx-0 py-[14px] lg:py-[28px] xl:py-[28px] 2xl:py-[29px] 2xl:text-2xl md:leading-main tracking-base button-interactive_fill",
  imageWrapper:
    "relative 2xl:absolute top-[33px] md:top-[43px] lg:top-0 2xl:top-1/2 2xl:-translate-y-1/2 xl:left-[38px] 2xl:left-auto 2xl:right-[85px] w-[263px] md:w-[303px] lg:w-[233px] xl:w-[330px] 2xl:w-[373px]",
  image: "w-full h-auto",
};

const SignSection = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <Heading className={styles.title} level="h2" title={signTitleText} />
          <div className={styles.description}>{signDescription}</div>
          <LinkButton className={styles.buttom} path={AppRoute.Authorization}>
            {signButtonText}
          </LinkButton>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            width={263}
            height={494}
            src={signImagePath}
            sizes="100vw"
            alt="door"
          />
        </div>
      </div>
    </section>
  );
};

export default SignSection;
