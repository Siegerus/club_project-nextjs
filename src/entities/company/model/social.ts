export type SocialPlatform = "instagram" | "whatsapp" | "telegram" | "vk";

export type SocialConfig = {
  href: string;
  alt: string;
  icon: string;
  iconWhite: string;
};

export const socialConfigs: Record<SocialPlatform, SocialConfig> = {
  instagram: {
    href: "https://instagram.ru/",
    alt: "Инстаграм",
    icon: "/icons/instagram.svg",
    iconWhite: "/icons/instagram.svg",
  },
  whatsapp: {
    href: "https://wa.me/+79000000000",
    alt: "Ватсап",
    icon: "/icons/watsapp.svg",
    iconWhite: "/icons/watsapp-white.svg",
  },
  telegram: {
    href: "tg://resolve?domain=имя_пользователя",
    alt: "Телеграм",
    icon: "/icons/telegram.svg",
    iconWhite: "/icons/telegram-white.svg",
  },
  vk: {
    href: "https://vk.com/",
    alt: "Вконтакте",
    icon: "/icons/vk.svg",
    iconWhite: "/icons/vk.svg",
  },
};
