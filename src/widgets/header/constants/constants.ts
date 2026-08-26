import { ExtertalLink } from "@/shared/constants";
import { AppRoute } from "@/shared/lib/routes";
import { NavItemType } from "@/shared/ui/nav-item";
import type { SocialItemType } from "@/shared/ui/social-item";

const navItems: NavItemType[] = [
  { text: "Главная", path: AppRoute.Home },
  { text: "Мероприятия", path: AppRoute.Events },
  { text: "Браслеты", path: AppRoute.Bangles },
  { text: "Правила", path: AppRoute.Rules },
  { text: "VIP", path: AppRoute.Vip },
  { text: "Контакты", path: AppRoute.Contacts },
];

const navSocialItems: SocialItemType[] = [
  {
    src: "/icons/instagram.svg",
    href: ExtertalLink.Instagtam,
    alt: "Инстаграм",
  },
  {
    src: "/icons/watsapp-white.svg",
    href: ExtertalLink.Whatsapp,
    alt: "Ватсап",
  },
  { src: "/icons/vk.svg", href: ExtertalLink.Vk, alt: "Вконтакте" },
  {
    src: "/icons/telegram-white.svg",
    href: ExtertalLink.Telegram,
    alt: "Телеграм",
  },
];

const authButtonText = "Войти или Зарегистрироваться";

const headerButtonText = "Регистрация/Вход";

export { navItems, navSocialItems, authButtonText, headerButtonText };
