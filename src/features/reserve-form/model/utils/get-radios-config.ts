import type { EventItem } from "@/entities/event";
import { getFormattedPrice } from "@/shared/lib";

import type { ReserveInputName } from "../types";

type ReserveRadio = {
  id: string;
  name: ReserveInputName;
  label: string;
  value: string;
  formattedValue: string;
};

export const getRadiosConfig = (
  evenData: EventItem,
  couple: boolean = false,
): ReserveRadio[] => {
  const basePrice = couple ? Math.round(evenData.price * 2) : evenData.price;
  const comfortPrice = couple
    ? Math.round(evenData.comfortPrice * 2)
    : evenData.comfortPrice;

  const baseLabel = couple ? "Билет вход с пары" : "Билет вход с человека";

  const comfortLabel = couple
    ? "Билет вход Comfort с пары"
    : "Билет вход Comfort с человека";

  return [
    {
      id: "reserve-base-price",
      name: "reserve-variant",
      label: baseLabel,
      value: basePrice.toString(),
      formattedValue: getFormattedPrice(basePrice, true),
    },
    {
      id: "reserve-comfort-price",
      name: "reserve-variant",
      label: comfortLabel,
      value: comfortPrice.toString(),
      formattedValue: getFormattedPrice(comfortPrice, true),
    },
  ];
};
