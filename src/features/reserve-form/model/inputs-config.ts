import type { ReserveInputName, ReserveTabId } from "./types";

type ReserveTab = {
  id: ReserveTabId;
  label: string;
};

type ReserveInput = {
  name: ReserveInputName;
  id: string;
  label: string;
  placeholder: string;
  autocomplete: string;
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

export const reserveInputsConfig: ReserveInput[] = [
  {
    name: "user-name",
    id: "user-name",
    label: "Имя",
    placeholder: "Ваше имя",
    autocomplete: "name",
  },
  {
    name: "age",
    id: "age",
    label: "Возраст",
    placeholder: "Возраст",
    autocomplete: "age",
  },
];
