import type { Radio } from "@/shared/ui/select";

export type RegistrationInputName =
  | "registration-user"
  | "registration-email"
  | "registration-sex"
  | "registration-password"
  | "registration-password-repeat";

export type RegistrationInput = {
  id: string;
  name: RegistrationInputName;
  type?: string;
  placeholder?: string;
  label?: string;
  ariaLabel?: string;
  autoComplete?: string;
  mbSmall?: boolean;
  isSelect?: boolean;
};

export type RegistrationFormValues = {
  "registration-user": string;
  "registration-email": string;
  "registration-sex": string;
  "registration-password": string;
  "registration-password-repeat": string;
  "registration-agreement": boolean;
};

export type RegistrationRadio = Radio;
