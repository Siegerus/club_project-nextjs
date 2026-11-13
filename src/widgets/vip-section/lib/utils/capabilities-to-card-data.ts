import { type Capability } from "@/entities/company";
import { type CardData } from "@/shared/ui";

const capabilitiesToCardData = (capabilities: Capability[]): CardData[] => {
  return capabilities.map((capability) => ({
    titleText: { top: capability.name },
    imageSrc: capability.iconPath,
    imageAlt: capability.name,
    description: capability.description,
  }));
};

export default capabilitiesToCardData;
