import Image from "next/image";

import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import {
  promoTitle,
  promoTitleMobile,
  promoSubtitle,
  mainPicturePath,
  mainPictureMobilePath,
} from "../lib";

const styles = {
  root: "pt-0 pb-[30px] md:pt-[40px]",
  wrapper:
    "relative pt-[1px] pb-[40px] min-h-[518px] md:min-h-[740px] lg:min-h-[873px] rounded-[20px] md:rounded-[40px]",
  block:
    "mt-[327px] ml-0 md:mt-[493px] md:ml-[11px] lg:mt-[510px] lg:mx-auto w-[unset] 3xl:w-[67%] 3xl:mt-[510px]",
  image:
    "z-[-1] absolute top-0 w-full md:w-auto max-h-[518px] md:max-h-[unset] md:min-h-[740px] lg:min-h-[873px] rounded-[20px] md:rounded-[40px] object-cover",
  title:
    "text-[3.25em] md:text-[4.375em] lg:text-[6.25em] xl:text-[6.875em] 2xl:text-[7.5em] 3xl:text-9xl leading-[1] md:leading-[1.25] text-center tracking-base",
  subTitle:
    "max-w-[235px] md:max-w-[unset] mx-auto mt-[8px] md:mt-0 text-base md:text-2xl lg:text-[1.625em] 2xl:text-[1.75em] 3xl:text-[2em] text-center leading-main md:leading-[110%]",
};

const MainPromo = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <Image
          className={cn(styles.image, "hidden md:block")}
          width={1320}
          height={873}
          src={mainPicturePath}
          alt=""
          loading="eager"
        />
        <Image
          className={cn(styles.image, "md:hidden")}
          src={mainPictureMobilePath}
          width={320}
          height={518}
          alt=""
          priority
        />
        <div className={styles.block}>
          <Heading level="h1" className={styles.title}>
            <span className="md:hidden">{promoTitleMobile}</span>
            <span className="hidden md:inline">{promoTitle}</span>
          </Heading>
          <Heading
            level="h2"
            title={promoSubtitle}
            className={styles.subTitle}
          />
        </div>
      </div>
    </section>
  );
};

export default MainPromo;
