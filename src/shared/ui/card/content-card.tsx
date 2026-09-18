import Image from "next/image";

import { ReactElement } from "react";

import { cn } from "@/shared/lib";
import { Heading } from "../heading";
import BaseCard from "./base-card";
import type { CardData, Sizes } from "./types";

export type CardProps = {
  wrapperClass?: string;
  imageWrapperClass?: string;
  imageClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  blockClass?: string;
  imageSizes: Sizes;
  cardData: CardData;
  children?: ReactElement;
};

const styles = {
  imageWrapper: "flex items-center justify-center w-full",
  block: "flex flex-col items-center",
  description:
    "text-base lg:text-[1.0625em] xl:text-lg 3xl:text-xl text-center tracking-base leading-main text-white-70",
  titlePart: cn(
    "text-[2em] lg:text-[1.625em] xl:text-[2.125em] 2xl:text-4xl text-center text-white leading-one tracking-base",
    "title text-additional",
  ),
};

const ContentCard = ({
  wrapperClass,
  imageWrapperClass,
  imageClass,
  titleClass,
  descriptionClass,
  blockClass,
  imageSizes,
  cardData,
  children,
}: CardProps) => {
  const { titleText, imageAlt, imageSrc, description } = cardData;

  return (
    <BaseCard wrapperClass={wrapperClass}>
      {children}
      <div className={cn(styles.imageWrapper, imageWrapperClass)}>
        <Image
          className={imageClass}
          width={imageSizes.width}
          height={imageSizes.height}
          alt={imageAlt}
          src={imageSrc}
        />
      </div>
      <div className={cn(styles.block, blockClass)}>
        <Heading className={cn(titleClass)} level="h2" title={titleText.top} />

        {titleText.bottom && (
          <span className={styles.titlePart}>{titleText.bottom}</span>
        )}
        <div className={cn(styles.description, descriptionClass)}>
          {description}
        </div>
      </div>
    </BaseCard>
  );
};

export default ContentCard;
