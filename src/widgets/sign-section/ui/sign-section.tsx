import Image from "next/image";

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
  root: "pb-[36px] pt-[10px] md:pb-[180px] xl:py-[100px]",
  wrapper: "relative min-h-[707px] rounded-base bg-main-bg-secondary",
  block: "flex flex-col items-center",
  title: "text-4xl text-center tracking-base",
  description:
    "mt-[16px] px-[20px] text-sm text-center text-white-70 leading-base tracking-base",
  buttom: "",
  imageWrapper: "absolute w-[263px]",
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
    </section>
  );
};

export default SignSection;
