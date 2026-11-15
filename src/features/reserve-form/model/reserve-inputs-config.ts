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
    name: "reserve-form-user-name",
    id: "reserve-form-user-name",
    label: "Имя",
    type: "text",
    placeholder: "Ваше имя",
    autocomplete: "name",
  },
  {
    name: "reserve-form-age",
    id: "reserve-form-age",
    label: "Возраст",
    type: "text",
    placeholder: "Возраст",
    autocomplete: "age",
  },
];
