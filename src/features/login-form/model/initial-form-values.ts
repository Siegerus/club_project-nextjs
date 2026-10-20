export type LoginFormFeedBack = {
  "login-form-email": string;
  "login-form-password": string;
  "login-form-agreement": boolean;
};

export const initialFormValues: LoginFormFeedBack = {
  "login-form-email": "",
  "login-form-password": "",
  "login-form-agreement": false,
};
