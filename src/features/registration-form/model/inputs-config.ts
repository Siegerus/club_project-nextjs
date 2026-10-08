import type { Radio } from "@/shared/ui/select";

export type InputType = {
  name: string;
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
    name: "registration-user",
    type: "text",
    placeholder: "Имя",
    label: "Имя",
    ariaLabel: "Ввести имя",
    autoComplete: "name",
  },
  {
    name: "registration-email",
    type: "email",
    placeholder: "info@gmail.com",
    label: "Адрес электронной почты",
    ariaLabel: "Ввести адрес электронной почты",
    autoComplete: "email",
    mbSmall: true,
  },
  {
    name: "registration-select",
    isSelect: true,
  },
  {
    name: "registration-password",
    type: "password",
    placeholder: "Пароль",
    label: "Придумайте пароль",
    ariaLabel: "Ввести пароль",
    autoComplete: "off",
  },
  {
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
    id: "1",
    name: "sex",
    value: "male",
    isChecked: true,
  },
  {
    id: "2",
    name: "sex",
    value: "female",
    isChecked: false,
  },
  {
    id: "3",
    name: "sex",
    value: "couple",
    isChecked: false,
  },
];
