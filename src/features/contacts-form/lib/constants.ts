export type FeedBack = {
  id: string;
  userName: string;
  email: string;
  message: string;
  agreement: boolean;
};

type InputType = {
  id: string;
  type?: string;
  height?: string;
  placeholder: string;
  autoComplete: string;
  textArea: boolean;
};

export const inputsConfig: InputType[] = [
  {
    id: "contacts-user",
    type: "text",
    placeholder: "Ваше имя",
    autoComplete: "name",
    textArea: false,
  },
  {
    id: "contacts-email",
    type: "email",
    placeholder: "Адрес электронной почты",
    autoComplete: "email",
    textArea: false,
  },
  {
    id: "contacts-comment",
    placeholder: "Текст письма",
    autoComplete: "off",
    textArea: true,
    height: "102",
  },
];
