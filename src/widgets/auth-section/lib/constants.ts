export const authSectionDescription =
  "Присоединяйтесь к\u00A0нашему клубу, чтобы\u00A0получать эксклюзивные предложения и\u00A0быть в\u00A0курсе всех событий";

export type AuthTabId = "registration" | "login";

export type TabItem = {
  id: AuthTabId;
  label: string;
};

export const authTabItems: TabItem[] = [
  { id: "registration", label: "Регистрация" },
  { id: "login", label: "Вход" },
];
