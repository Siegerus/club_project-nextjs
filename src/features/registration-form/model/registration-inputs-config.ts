import type { Radio } from "@/shared/ui/select";

type InputName =
  | "registration-user"
  | "registration-email"
  | "registration-sex"
  | "registration-password"
  | "registration-password-repeat";

export type InputType = {
  id: string;
  name: InputName;
  type?: string;
  placeholder?: string;
  label?: string;
  ariaLabel?: string;
  autoComplete?: string;
  mbSmall?: boolean;
  isSelect?: boolean;
};

export const inputsConfig: InputType[] = [
  {
    id: "registration-user",
    name: "registration-user",
    type: "text",
    placeholder: "Имя",
    label: "Имя",
    ariaLabel: "Ввести имя",
    autoComplete: "name",
  },
  {
    id: "registration-email",
    name: "registration-email",
    type: "email",
    placeholder: "info@gmail.com",
    label: "Адрес электронной почты",
    ariaLabel: "Ввести адрес электронной почты",
    autoComplete: "email",
    mbSmall: true,
  },
  { id: "registration-sex", name: "registration-sex", isSelect: true },
  {
    id: "registration-password",
    name: "registration-password",
    type: "password",
    placeholder: "Пароль",
    label: "Придумайте пароль",
    ariaLabel: "Ввести пароль",
    autoComplete: "current-password",
  },
  {
    id: "registration-password-repeat",
    name: "registration-password-repeat",
    type: "password",
    placeholder: "Пароль",
    label: "Повторите пароль",
    ariaLabel: "Повторить пароль",
    autoComplete: "off",
    mbSmall: true,
  },
];

export const radiosConfig: Radio[] = [
  {
    id: "male",
    name: "registration-sex",
    label: "Девушка",
    value: "female",
  },
  {
    id: "female",
    name: "registration-sex",
    label: "Парень",
    value: "male",
  },
  {
    id: "couple",
    name: "registration-sex",
    label: "Пара",
    value: "couple",
  },
];
