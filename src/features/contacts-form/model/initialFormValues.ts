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
