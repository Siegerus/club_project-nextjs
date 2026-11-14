import type { ReserveTabId } from "./types";

export const openButtonText = "Забронировать";

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
