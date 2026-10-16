export type RegistrationFormFeedBack = {
  "registration-user": string;
  "registration-email": string;
  "registration-sex": string;
  "registration-password": string;
  "registration-password-repeat": string;
  "registration-agreement": boolean;
};

export const initialFormValues: RegistrationFormFeedBack = {
  "registration-user": "",
  "registration-email": "",
  "registration-sex": "female",
  "registration-password": "",
  "registration-password-repeat": "",
  "registration-agreement": false,
};
