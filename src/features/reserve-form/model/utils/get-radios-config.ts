import type { EventItem } from "@/entities/event";

type ReserveRadio = {
  id: string;
  name: string;
  label: string;
  value: string;
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

  const formatPrice = (value: number): string => value.toString();
  // new Intl.NumberFormat("ru-RU").format(value) + " ₽";

  const comfortLabel = couple
    ? "Билет вход Comfort с пары"
    : "Билет вход Comfort с человека";

  return [
    {
      id: "reserve-base-price",
      name: "reserve-variant",
      label: baseLabel,
      value: formatPrice(basePrice),
    },
    {
      id: "reserve-comfort-price",
      name: "reserve-variant",
      label: comfortLabel,
      value: formatPrice(comfortPrice),
    },
  ];
};
