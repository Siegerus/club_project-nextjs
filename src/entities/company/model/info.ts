type Contact = {
  info: string;
  iconPath: string;
  linkHref: string;
};

type ContactsConfig = {
  phone: Contact;
  email: Contact;
};

export const contacts: ContactsConfig = {
  phone: {
    info: "+7 (000) 000-00-00",
    iconPath: "/icons/phone.svg",
    linkHref: "tel:+70000000000",
  },
  email: {
    info: "info@gmail.com",
    iconPath: "/icons/gmail.svg",
    linkHref: "mailto:info@gmail.com",
  },
};

export const confidantial = "© 2026 ООО «Притяжение». Все права защищены.";
