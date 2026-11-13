import { type Bangle } from "@/entities/company";

import { type CardData } from "@/shared/ui";

const banglesToCardData = (bangles: Bangle[]): CardData[] => {
  return bangles.map((bangle) => ({
    titleText: { top: bangle.name },
    imageSrc: bangle.imagePath,
    imageAlt: bangle.name,
    description: bangle.description,
  }));
};

export default banglesToCardData;
