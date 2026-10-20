type LoginInputName = "login-form-password" | "login-form-email";

type LoginInput = {
  name: LoginInputName;
  id: string;
  type: string;
  placeholder: string;
  label: string;
  autoComplete: string;
  mbSmall?: boolean;
};

export const loginInputsConfig: LoginInput[] = [
  {
    name: "login-form-email",
    id: "login-form-email",
    type: "text",
    placeholder: "info@gmail.com",
    label: "Адрес электронной почты",
    autoComplete: "email",
  },
  {
    name: "login-form-password",
    id: "login-form-password",
    type: "password",
    placeholder: "Пароль",
    label: "Пароль",
    autoComplete: "current-password",
    mbSmall: true,
  },
];
