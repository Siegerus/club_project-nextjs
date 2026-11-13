export type JoinInputName = "join-form-email";

export type JoinInput = {
  name: JoinInputName;
  id: string;
  type: string;
  placeholder: string;
  ariaLabel: string;
  autoComplete: string;
};

export type JoinFormValues = {
  "join-form-email": string;
  "join-form-agreement": boolean;
};
