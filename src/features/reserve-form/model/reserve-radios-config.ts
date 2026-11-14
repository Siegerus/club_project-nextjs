import type { EventItem } from "@/entities/event";

type ReserveRadio = {
  id: string;
  name: string;
  label: string;
  value: string;
};

export const getRadiosConfig = (
  evenData: EventItem,
  couple: boolean,
): ReserveRadio[] => {
  const basePrice = couple ? Math.round(evenData.price * 2) : evenData.price;
  const comfortPrice = couple
    ? Math.round(evenData.comfortPrice * 2)
    : evenData.price;
  const baseLabel = couple ? "Билет вход с пары" : "Билет вход с человека";
  const comfortLabel = couple
    ? "Билет вход Comfort с пары"
    : "Билет вход Comfort с человека";

  return [
    {
      id: "reserve-base-price",
      name: "reserve-base-price",
      label: baseLabel,
      value: basePrice.toString(),
    },
    {
      id: "reserve-comfort-price",
      name: "reserve-comfort-price",
      label: comfortLabel,
      value: comfortPrice.toString(),
    },
  ];
};
