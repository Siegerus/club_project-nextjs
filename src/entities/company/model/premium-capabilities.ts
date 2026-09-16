export type Capability = {
  name: string;
  iconPath: string;
  description: string;
};

export const premiumCapabilities: Capability[] = [
  {
    name: "10% скидка",
    iconPath: "/icons/vip_icon-percent.svg",
    description:
      "Получите 10% скидку на\u00A0билеты для\u00A0входа на\u00A0каждое мероприятие. Не\u00A0упустите шанс сэкономить на\u00A0посещении ваших любимых событий! ",
  },
  {
    name: "Бизнес транспорт",
    iconPath: "/icons/vip_icon-car.svg",
    description:
      "Наслаждайтесь удобством бизнес транспорта до\u00A0места мероприятия и\u00A0обратно. Комфорт и\u00A0надёжность гарантированы!",
  },
  {
    name: "Банный набор",
    iconPath: "/icons/vip_icon-towel.svg",
    description:
      "Наш банный набор включает все необходимое для комфортного и расслабляющего ухода за телом. В комплект входят высококачественные аксессуары и средства",
  },
  {
    name: "Посещение закрытых мероприятий только для VIP",
    iconPath: "/icons/vip_icon-vip.svg",
    description:
      "Посещение закрытых мероприятий только для VIP предоставляет эксклюзивный доступ к ограниченным событиям, предназначенным для избранных гостей.",
  },
];
