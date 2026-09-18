import Image from "next/image";

import { JoinModalOpen } from "@/features/join-form";
import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import {
  promoTitle,
  promoTitleMobile,
  promoSubtitle,
  mainPicturePath,
  mainPictureMobilePath,
  promoButtonText,
} from "../lib";

const styles = {
  root: "pt-0 pb-[30px] md:pt-[40px]",
  wrapper:
    "relative pt-[1px] min-h-[518px] md:min-h-[740px] lg:min-h-[873px] rounded-small md:rounded-middle",
  block:
    "mt-[327px] ml-0 md:mt-[493px] md:ml-[11px] lg:mt-[510px] lg:mx-auto w-[unset] 3xl:w-[67%] 3xl:mt-[510px]",
  image:
    "z-[-1] absolute top-0 w-full md:w-auto max-h-[518px] md:max-h-[unset] md:min-h-[740px] lg:min-h-[873px] rounded-small md:rounded-middle object-cover",
  title:
    "text-[3.25em] md:text-[4.375em] lg:text-[6.25em] xl:text-[6.875em] 2xl:text-[7.5em] 3xl:text-9xl leading-[1] md:leading-[1.25] text-center tracking-base",
  subTitle:
    "max-w-[235px] md:max-w-[unset] mx-auto mt-[8px] md:mt-0 text-base md:text-2xl lg:text-[1.625em] 2xl:text-[1.75em] 3xl:text-[2em] text-center leading-main md:leading-[110%] tracking-base",
  button: cn(
    "md:w-auto 3xl:max-w-auto mt-[15px] md:mt-[40px] px-[10px] md:px-[47px] lg:px-[51px] xl:px-[51px] 2xl:px-[37px] py-[17px] lg:py-[27px] xl:py-[27px] 2xl:py-[30px]",
    "text-base 2xl:text-2xl tracking-base md:tracking-none button-interactive_fill",
  ),
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
          preload
          sizes="(min-width: 768px) 100vw"
        />
        <Image
          className={cn(styles.image, "md:hidden")}
          src={mainPictureMobilePath}
          width={320}
          height={518}
          alt=""
          preload
          sizes="(max-width: 767px) 100vw"
        />
        <div className={styles.block}>
          <Heading className={styles.title} level="h1" gradientType="white">
            <span className="md:hidden">{promoTitleMobile}</span>
            <span className="hidden md:inline">{promoTitle}</span>
          </Heading>
          <Heading
            level="h2"
            gradientType="white"
            title={promoSubtitle}
            className={styles.subTitle}
          />
        </div>
        <JoinModalOpen
          buttonClass={styles.button}
          buttonText={promoButtonText}
        />
      </div>
    </section>
  );
};

export default MainPromo;
