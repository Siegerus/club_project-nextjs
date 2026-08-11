import { SocialItemType } from "../ui/social-item/types";
import { NavItemType } from "@/lib/types";

const footerSocialItems: SocialItemType[] = [
  {
    src: "/icons/watsapp.svg",
    href: "https://instagram.ru/",
    alt: "Телеграм",
  },
  {
    src: "/icons/telegram.svg",
    href: "https://wa.me/+79000000000",
    alt: "Ватсап",
  },
];

const footerSystemNavItems: NavItemType[] = [
  {
    text: "Правила",
    path: "/pages/rules.html",
  },
  {
    text: "VIP",
    path: "/pages/VIP.html",
  },
  {
    text: "Система лояльности",
    path: "/pages/loyalty.html",
  },
  {
    text: "FAQ",
    path: "/pages/questions.html",
  },
];

const footerCompanyNavItems: NavItemType[] = [
  {
    text: "Главная",
    path: "/index.html",
  },
  {
    text: "Вступить в клуб",
    path: "/pages/autorization.html",
  },
  {
    text: "Афиша (наши мероприятия)",
    path: "/pages/events.html",
  },
  {
    text: "Браслеты",
    path: "/pages/bangles.html",
  },
];

const footerButtonText = "Зарегистрироваться";

const goalsDescription = `Целями проведения вышеуказанных мероприятий не являются оказание
            платных интимных услуг, совершение действий сексуального характера,
            осуществление предложения к половому сношению либо сопоставимому
            с ним действию сексуального характера и т.п. Мы против ЛГБТ.`;

export {
  footerButtonText,
  goalsDescription,
  footerSocialItems,
  footerCompanyNavItems,
  footerSystemNavItems,
};
