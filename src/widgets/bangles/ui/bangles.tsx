import type { CSSProperties } from "react";

import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import { Container } from "@/shared/ui";
import {
  banglesTitle,
  banglesDescription,
  banglesBGMobilePath,
  banglesBGDesktopPath,
} from "../lib";
import BanglesList from "./bangles-list";

const rootBgStyle: CSSProperties & Record<string, string> = {
  "--bangles-bg-mobile": `url(${banglesBGMobilePath})`,
  "--bangles-bg-desktop": `url(${banglesBGDesktopPath})`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const styles = {
  root: cn(
    "pt-[20px] pb-[30px] md:pt-[25px] md:pb-[115px] lg:pt-[70px] lg:pb-[75px]",
    "bg-[image:var(--bangles-bg-mobile)] lg:bg-[image:var(--bangles-bg-desktop)]",
  ),
  title: cn(
    "2xl:max-w-[800px] 2xl:mx-auto text-[2.5em] md:text-[4.375em] lg:text-[4.625em] xl:text-[5em] 2xl:text-[5.25em] 3xl:text-[5.5em]",
    "text-center leading-[85%] lg:leading-[90%] tracking-base",
  ),
  description: cn(
    "block lg:max-w-[800px] lg:mx-auto mt-[15px] lg:mt-[10px] text-center text-sm md:text-base lg:text-[1.375em] 2xl:text-2xl text-white-70",
    "tracking-base lg:tracking-none leading-main md:leading-middle lg:leading-main",
  ),
};

const Bangles = () => {
  return (
    <section className={styles.root} style={rootBgStyle}>
      <Container>
        <Heading className={styles.title} level="h1" title={banglesTitle} />
        <span className={styles.description}>{banglesDescription}</span>
        <BanglesList />
      </Container>
    </section>
  );
};

export default Bangles;
