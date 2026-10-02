import { type ComponentType, type ReactNode } from "react";
import { ContactsForm } from "@/features/contacts-form";

type AuthFormsProps = {
  index: number;
};

const AuthForms = ({ index }: AuthFormsProps) => {
  const forms: ComponentType[] = [ContactsForm, ContactsForm];

  return (
    <div role="tabpanel" id="auth-forms">
      {forms[index]}
    </div>
  );
};

export default AuthForms;
