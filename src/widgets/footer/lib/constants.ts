import { AppRoute } from "@/shared/lib/routes";
import type { NavItemType } from "@/shared/ui/nav-item";

const footerSystemTitle = "Система";

const footerSystemNavItems: NavItemType[] = [
  {
    text: "Правила",
    path: AppRoute.Rules,
  },
  {
    text: "VIP",
    path: AppRoute.Vip,
  },
  {
    text: "Система лояльности",
    path: AppRoute.Loyalty,
  },
  {
    text: "FAQ",
    path: AppRoute.Faq,
  },
];

const footerCompanyTitle = "Компания";

const footerCompanyNavItems: NavItemType[] = [
  {
    text: "Главная",
    path: AppRoute.Home,
  },
  {
    text: "Вступить в клуб",
    path: AppRoute.Authorization,
  },
  {
    text: "Афиша (наши мероприятия)",
    path: AppRoute.Events,
  },
  {
    text: "Браслеты",
    path: AppRoute.Bangles,
  },
];

const footerButtonText = "Зарегистрироваться";

const goalsDescription = {
  main: `Целями проведения вышеуказанных мероприятий не являются оказание
            платных интимных услуг, совершение действий сексуального характера,
            осуществление предложения к половому сношению либо сопоставимому
            с ним действию сексуального характера и т.п.`,
  bottom: "Мы против ЛГБТ.",
} as const;

export {
  footerButtonText,
  goalsDescription,
  footerCompanyNavItems,
  footerSystemNavItems,
  footerSystemTitle,
  footerCompanyTitle,
};
