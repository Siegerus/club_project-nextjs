type InputName = "join-form-email";

type InputType = {
  name: InputName;
  type: string;
  placeholder: string;
  ariaLabel: string;
  autoComplete: string;
};

export const inputsConfig: InputType = {
  name: "join-form-email",
  type: "text",
  placeholder: "Адрес электронной почты",
  ariaLabel: "Ввести адрес электронной почты",
  autoComplete: "email",
};
