export type ContactsFeedBack = {
  "contacts-user": string;
  "contacts-email": string;
  "contacts-comment": string;
  "contacts-agreement": boolean;
};

export const initialFormValues: ContactsFeedBack = {
  "contacts-user": "",
  "contacts-email": "",
  "contacts-comment": "",
  "contacts-agreement": false,
};

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

export const contactsFormButtonText = "Отправить";
export const contactsFormCheckboxText = {
  top: "Я\u00A0ознакомлен(а) с\u00A0политикой, офертой, ",
  bottom: "и\u00A0даю\u00A0согласие на\u00A0обработку персональных данных",
};
