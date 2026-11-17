import type { HTMLInputTypeAttribute } from "react";

export type JoinInputName = "join-form-email";

export type JoinInput = {
  name: JoinInputName;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  ariaLabel: string;
  autoComplete: string;
};

export type JoinFormValues = {
  "join-form-email": string;
  "join-form-agreement": boolean;
};
