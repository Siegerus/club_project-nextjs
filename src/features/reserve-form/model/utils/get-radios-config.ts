import type { EventItem } from "@/entities/event";
import { getFormattedPrice } from "@/shared/lib";

import type { ReserveInputName } from "../types";

type ReserveRadio = {
  id: string;
  name: ReserveInputName;
  label: string;
  value: string;
  price: string;
  formattedPrice: string;
};

export const getRadiosConfig = (
  activeEvent: EventItem,
  isCouple: boolean = false,
): ReserveRadio[] => {
  const multiplier = isCouple ? 2 : 1;
  const basePrice = Math.round(activeEvent.price * multiplier);
  const comfortPrice = Math.round(activeEvent.comfortPrice * multiplier);

  const label = isCouple ? "с пары" : "с человека";

  return [
    {
      id: "reserve-base-price",
      name: "reserve-variant",
      label: `Билет вход ${label}`,
      value: "base",
      price: basePrice.toString(),
      formattedPrice: getFormattedPrice(basePrice, true),
    },
    {
      id: "reserve-comfort-price",
      name: "reserve-variant",
      label: `Билет вход Comfort ${label}`,
      value: "comfort",
      price: comfortPrice.toString(),
      formattedPrice: getFormattedPrice(comfortPrice, true),
    },
  ];
};
