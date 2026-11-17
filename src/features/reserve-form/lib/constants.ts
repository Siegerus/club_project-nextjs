import { reserveAdditionalPrice } from "@/entities/company";
import { getFormattedPrice } from "@/shared/lib";

import type { ReserveTabId } from "./types";

export const openButtonText = "Забронировать";

export const submitButtonText = "Оплатить";

const formattedAdditionalPrice = getFormattedPrice(
  reserveAdditionalPrice,
  true,
);

export const reserveAdditionalInfo = `*За 7 дней до начала мероприятия +${formattedAdditionalPrice} к стоимости билета`;

export const reserveModalTitle =
  "Вы зарегистированы как пара, поэтому у Вас есть возможность выбрать билет для двоих";

type ReserveTab = {
  id: ReserveTabId;
  label: string;
};

export const reserveTabsConfig: ReserveTab[] = [
  {
    id: "couple",
    label: "Пара",
  },
  {
    id: "male",
    label: "Мужчина",
  },
  {
    id: "female",
    label: "Женщина",
  },
];
