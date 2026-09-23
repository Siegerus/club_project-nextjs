import Image from "next/image";

import { LoyaltyLevel } from "@/entities/company";
import { cn } from "@/shared/lib";
import { BaseCard, Heading } from "@/shared/ui";

type LoyaltyCardProps = LoyaltyLevel;

const styles = {
  wrapper:
    "w-full h-full md:w-auto md:h-auto rounded-small lg:rounded-middle box-shadow-none",
  title:
    "mt-[10px] md:mt-[20px] text-2xl lg:text-[2em] xl:text-[2.125em] 3xl:text-4xl text-center leading-[1.7] lg:leading-[1.1] tracking-base text-white",
  description:
    "mt-[14px] px-[10px] pb-[20px] md:px-[20px] text-sm md:text-base lg:text-lg xl:text-[1.1875em] 3xl:text-xl leading-main tracking-base lg:tracking-none text-white-70 whitespace-pre-wrap",
  imageWrapper:
    "relative min-h-[241px] max-h-full md:min-h-[206px] lg:min-h-[198px] xl:min-h-[230px] 3xl:min-h-[320px]",
  image: "object-contain rounded-small",
};

const cardImageSizes =
  "(min-width: 768px) 313px, (min-width: 1280px) 360px, (min-width: 1680px) 500px, 385px";

const LoyaltyCard = ({ name, description, imagePath }: LoyaltyCardProps) => {
  return (
    <BaseCard wrapperClass={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          className={cn(styles.image, "md:hidden")}
          src={imagePath.mobile}
          alt={name}
          fill
          sizes={cardImageSizes}
        />
        <Image
          className={cn(styles.image, "hidden md:block lg:hidden")}
          src={imagePath.tablet}
          alt={name}
          fill
          sizes={cardImageSizes}
        />
        <Image
          className={cn(styles.image, "hidden lg:block")}
          src={imagePath.desktop}
          alt={name}
          fill
          sizes={cardImageSizes}
        />
      </div>
      <Heading
        className={styles.title}
        level="h2"
        title={name}
        gradientType="none"
      />
      <div className={styles.description}>{description}</div>
    </BaseCard>
  );
};

export default LoyaltyCard;
