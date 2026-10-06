import { type ComponentType } from "react";
import { ContactsForm } from "@/features/contacts-form";
import { AuthTabId } from "../lib";

type AuthFormsProps = {
  activeTabId: AuthTabId;
};

const authForms: Record<AuthTabId, ComponentType> = {
  registration: ContactsForm,
  login: ContactsForm,
};

const AuthForms = ({ activeTabId }: AuthFormsProps) => {
  const ActiveForm = authForms[activeTabId];

  return (
    <div role="tabpanel" id="auth-forms">
      <ActiveForm />
    </div>
  );
};

export default AuthForms;
