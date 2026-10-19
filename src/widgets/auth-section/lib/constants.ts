export type AuthTabId = "registration" | "login";

export type TabItem = {
  id: AuthTabId;
  label: string;
};

export const authTabItems: TabItem[] = [
  { id: "registration", label: "Регистрация" },
  { id: "login", label: "Вход" },
];
