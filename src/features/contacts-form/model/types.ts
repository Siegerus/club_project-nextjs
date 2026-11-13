export type ContactsInputName =
  | "contacts-user"
  | "contacts-email"
  | "contacts-comment";

export type ContactsInput = {
  name: ContactsInputName;
  type?: string;
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
