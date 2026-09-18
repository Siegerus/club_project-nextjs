import { AppRoute } from "@/shared/lib/routes";
import { NavItemType } from "@/shared/ui/nav-item";

export const navItems: NavItemType[] = [
  { text: "Главная", path: AppRoute.Home },
  { text: "Мероприятия", path: AppRoute.Events },
  { text: "Браслеты", path: AppRoute.Bangles },
  { text: "Правила", path: AppRoute.Rules },
  { text: "VIP", path: AppRoute.Vip },
  { text: "Контакты", path: AppRoute.Contacts },
];

export const authButtonText = "Войти или Зарегистрироваться";

export const headerButtonText = "Регистрация/Вход";

export const mobileNavArrowPath = "/icons/nav-arrow.svg";
