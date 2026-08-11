import { SocialItemType } from "../ui/social-item/types";

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

const footerButtonText = "Зарегистрироваться";

const goalsDescription = `Целями проведения вышеуказанных мероприятий не являются оказание
            платных интимных услуг, совершение действий сексуального характера,
            осуществление предложения к половому сношению либо сопоставимому
            с ним действию сексуального характера и т.п. Мы против ЛГБТ.`;

export { footerButtonText, goalsDescription, footerSocialItems };
