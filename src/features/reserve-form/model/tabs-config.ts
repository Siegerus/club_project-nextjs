type ReserveTabId = "couple" | "male" | "female";

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
