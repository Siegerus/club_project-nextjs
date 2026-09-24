import { benefits } from "@/entities/company";
import { benefitsToCardData } from "./utils";

export const benefitTitle = "Элитные привилегии";

export const benefitsCardData = benefitsToCardData(benefits);
