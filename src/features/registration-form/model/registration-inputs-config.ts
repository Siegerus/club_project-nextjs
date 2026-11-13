import type { RegistrationInput, RegistrationRadio } from "./types";

export const registrationInputsConfig: RegistrationInput[] = [
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

export const registrationRadiosConfig: RegistrationRadio[] = [
  {
    id: "female",
    name: "registration-sex",
    label: "Девушка",
    value: "female",
  },
  {
    id: "male",
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
