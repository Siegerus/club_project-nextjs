import Image from "next/image";

import { cn } from "@/shared/lib";
import { Heading } from "../heading";
import { CardData, Sizes } from "./types";

export type CardProps = {
  wrapperClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  imageClass?: string;
  imageSizes: Sizes;
  cardData: CardData;
};

const styles = {
  wrapper: "",
  image: "",
  description: "",
};

const Card = ({
  wrapperClass,
  titleClass,
  descriptionClass,
  imageClass,
  imageSizes,
  cardData,
}: CardProps) => {
  const { titleText, imageAlt, imageSrc, description } = cardData;

  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      <Image
        className={cn(styles.image, imageClass)}
        width={imageSizes.width}
        height={imageSizes.height}
        alt={imageAlt}
        src={imageSrc}
      ></Image>
      <Heading className={titleClass} level="h2" title={titleText} />
      <div className={cn(styles.description, descriptionClass)}>
        {description}
      </div>
    </div>
  );
};

export default Card;
