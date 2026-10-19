export type LoginFormFeedBack = {
  "login-email": string;
  "login-password": string;
  "login-agreement": boolean;
};

export const initialFormValues: LoginFormFeedBack = {
  "login-email": "",
  "login-password": "",
  "login-agreement": false,
};
