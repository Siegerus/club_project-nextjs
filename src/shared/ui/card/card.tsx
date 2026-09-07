import Image from "next/image";
import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";
import { Heading } from "../heading";

type CardProps = PropsWithChildren<{
  wrapperClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  titleText?: string;
  imageClass?: string;
  imageWidth: number;
  imageHeight: number;
  imageSrc: string;
  imageAlt?: string;
  isNumbered?: boolean;
  number?: number;
}>;

const styles = {
  wrapper: "",
  image: "",
  description: "",
  number: "",
};

const Card = ({
  wrapperClass,
  titleClass,
  descriptionClass,
  titleText,
  imageClass,
  imageWidth,
  imageHeight,
  imageSrc,
  imageAlt = "",
  children,
  isNumbered = false,
  number,
}: CardProps) => {
  return (
    <>
      {isNumbered && <span className={styles.number}>{number}</span>}
      <div className={cn(styles.wrapper, wrapperClass)}>
        <Image
          className={cn(styles.image, imageClass)}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
          src={imageSrc}
        ></Image>
        <Heading className={titleClass} level="h2" title={titleText} />
        <div className={cn(styles.description, descriptionClass)}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
