import { type Benefit } from "@/entities/company";
import { type CardData } from "@/shared/ui";

const benefitsToCardData = (benefits: Benefit[]): CardData[] => {
  return benefits.map((benefit) => ({
    titleText: { top: benefit.name.base, bottom: benefit.name.accent },
    imageSrc: benefit.imagePath,
    imageAlt: `${benefit.name.base} ${benefit.name.accent}`,
    description: benefit.description,
  }));
};

export default benefitsToCardData;
