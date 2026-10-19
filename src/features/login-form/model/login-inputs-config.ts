type LoginInputName = "login-form-password" | "login-form-email";

type LoginInput = {
  name: LoginInputName;
  id: string;
  type: string;
  placeholder: string;
  label: string;
  autoComplete: string;
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
];
