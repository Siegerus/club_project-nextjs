import type { HTMLInputTypeAttribute } from "react";

export type ContactsInputName =
  | "contacts-user"
  | "contacts-email"
  | "contacts-comment";

export type ContactsInput = {
  name: ContactsInputName;
  type?: HTMLInputTypeAttribute;
  height?: string;
  placeholder: string;
  ariaLabel: string;
  autoComplete: string;
  textArea: boolean;
};

export type ContactsFormValues = {
  "contacts-user": string;
  "contacts-email": string;
  "contacts-comment": string;
  "contacts-agreement": boolean;
};
