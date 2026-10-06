type JoinInputName = "join-form-email";

type JoinInputType = {
  name: JoinInputName;
  type: string;
  placeholder: string;
  ariaLabel: string;
  autoComplete: string;
};

export const JoinInputsConfig: JoinInputType = {
  name: "join-form-email",
  type: "text",
  placeholder: "Адрес электронной почты",
  ariaLabel: "Ввести адрес электронной почты",
  autoComplete: "email",
};
