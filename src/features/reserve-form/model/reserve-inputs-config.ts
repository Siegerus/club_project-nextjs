import type { ReserveInputName } from "./types";

type ReserveInput = {
  name: ReserveInputName;
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autocomplete: string;
};

export const reserveInputsConfig: ReserveInput[] = [
  {
    name: "user-name",
    id: "user-name",
    label: "Имя",
    type: "text",
    placeholder: "Ваше имя",
    autocomplete: "name",
  },
  {
    name: "age",
    id: "age",
    label: "Возраст",
    type: "text",
    placeholder: "Возраст",
    autocomplete: "age",
  },
];
