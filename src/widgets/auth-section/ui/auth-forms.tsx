import { type ComponentType } from "react";
import { LoginForm } from "@/features/login-form";
import { RegistrationForm } from "@/features/registration-form";
import { AuthTabId } from "../lib";

type AuthFormsProps = {
  activeTabId: AuthTabId;
};

const authForms: Record<AuthTabId, ComponentType> = {
  registration: RegistrationForm,
  login: LoginForm,
};

const AuthForms = ({ activeTabId }: AuthFormsProps) => {
  const ActiveForm = authForms[activeTabId];

  return (
    <div role="tabpanel" id="auth-forms" aria-labelledby={`tab-${activeTabId}`}>
      <ActiveForm />
    </div>
  );
};

export default AuthForms;
