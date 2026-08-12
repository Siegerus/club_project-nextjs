import { SocialItemType } from "@/components/ui/social-item/types";
import { NavItemType } from "@/lib/types";

const navItems: NavItemType[] = [
  { text: "Главная", path: "/index.html" },
  { text: "Мероприятия", path: "/pages/curent-event.html" },
  { text: "Браслеты", path: "/pages/bangles.html" },
  { text: "Правила", path: "/pages/rules.html" },
  { text: "VIP", path: "/pages/VIP.html" },
  { text: "Контакты", path: "/pages/contacts.html" },
];

const navSocialItems: SocialItemType[] = [
  {
    src: "/icons/instagram.svg",
    href: "https://instagram.ru/",
    alt: "Инстаграм",
  },
  {
    src: "/icons/watsapp-white.svg",
    href: "https://wa.me/+79000000000",
    alt: "Ватсап",
  },
  { src: "/icons/vk.svg", href: "https://vk.com/", alt: "Вконтакте" },
  {
    src: "/icons/telegram-white.svg",
    href: "tg://resolve?domain=имя_пользователя",
    alt: "Телеграм",
  },
];

const authButtonText = "Войти или Зарегистрироваться";

export { navItems, navSocialItems, authButtonText };
