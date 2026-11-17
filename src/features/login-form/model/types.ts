import type { HTMLInputTypeAttribute } from "react";

export type LoginInputName = "login-form-password" | "login-form-email";

export type LoginInput = {
  name: LoginInputName;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  autoComplete: string;
  mbSmall?: boolean;
};

export type LoginFormValues = {
  "login-form-email": string;
  "login-form-password": string;
  "login-form-agreement": boolean;
};
