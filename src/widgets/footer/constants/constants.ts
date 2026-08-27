import { ExtertalLink } from "@/shared/lib";
import { AppRoute } from "@/shared/lib/routes";
import { NavItemType } from "@/shared/ui/nav-item";
import type { SocialItemType } from "@/shared/ui/social-item";

const footerSocialItems: SocialItemType[] = [
  {
    src: "/icons/watsapp.svg",
    href: ExtertalLink.Telegram,
    alt: "Телеграм",
  },
  {
    src: "/icons/telegram.svg",
    href: ExtertalLink.Whatsapp,
    alt: "Ватсап",
  },
];

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

const goalsDescription = `Целями проведения вышеуказанных мероприятий не являются оказание
            платных интимных услуг, совершение действий сексуального характера,
            осуществление предложения к половому сношению либо сопоставимому
            с ним действию сексуального характера и т.п. &Мы против ЛГБТ.`;

export {
  footerButtonText,
  goalsDescription,
  footerSocialItems,
  footerCompanyNavItems,
  footerSystemNavItems,
  footerSystemTitle,
  footerCompanyTitle,
};
