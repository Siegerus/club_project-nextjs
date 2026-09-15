import { type Bangle } from "@/entities/company";

import { CardData } from "@/shared/ui";

const bangleToCardData = (bangles: Bangle[]): CardData[] => {
  return bangles.map((bangle) => ({
    titleText: { top: bangle.name },
    imageSrc: bangle.imagePath,
    imageAlt: bangle.name,
    description: bangle.description,
  }));
};

export default bangleToCardData;
