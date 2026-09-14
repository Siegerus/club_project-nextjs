type PartnerName = "Т-Банк" | "Самокат" | "Apple-watch" | "Яндекс" | "Samsung";

type Partner = {
  id: string;
  name: PartnerName;
  logoPath: string;
  href: string;
  alt: string;
};

export const partners: Partner[] = [
  {
    id: "TBank",
    name: "Т-Банк",
    logoPath: "/public/images/labels/TBank.png",
    href: "https://www.tbank.ru/",
    alt: "Т-Банк",
  },
  {
    id: "samokat",
    name: "Самокат",
    logoPath: "/public/images/labels/samokat.png",
    href: "https://samokat.ru/",
    alt: "Самокат",
  },
  {
    id: "apple-watch",
    name: "Apple-watch",
    logoPath: "/public/images/labels/watch.png",
    href: "https://www.apple.com/ua/watch/",
    alt: "Apple-watch",
  },
  {
    id: "yandex",
    name: "Яндекс",
    logoPath: "/public/images/labels/yandex.png",
    href: "https://www.tbank.ru/",
    alt: "Яндекс",
  },
  {
    id: "samsung",
    name: "Samsung",
    logoPath: "/public/images/labels/samsung.png",
    href: "https://ya.ru/",
    alt: "Samsung",
  },
];
