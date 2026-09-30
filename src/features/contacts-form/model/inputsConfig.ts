type InputTextField = "contacts-user" | "contacts-email" | "contacts-comment";

type InputType = {
  name: InputTextField;
  type?: string;
  height?: string;
  placeholder: string;
  ariaLabel: string;
  autoComplete: string;
  textArea: boolean;
};

export const inputsConfig: InputType[] = [
  {
    name: "contacts-user",
    type: "text",
    placeholder: "Ваше имя",
    ariaLabel: "Ввести имя",
    autoComplete: "name",
    textArea: false,
  },
  {
    name: "contacts-email",
    type: "email",
    placeholder: "Адрес электронной почты",
    ariaLabel: "Ввести адрес электронной почты",
    autoComplete: "email",
    textArea: false,
  },
  {
    name: "contacts-comment",
    placeholder: "Текст письма",
    ariaLabel: "Ввести текст письма",
    autoComplete: "off",
    textArea: true,
    height: "102",
  },
];
