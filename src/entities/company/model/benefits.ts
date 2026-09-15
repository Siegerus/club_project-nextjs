export type Benefit = {
  titleText: {
    top: string;
    bottom: string;
  };
  imageSrc: string;
  imageAlt: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    titleText: {
      top: "Полная",
      bottom: "анонимность гостя",
    },
    imageSrc: "/icons/mask.svg",
    imageAlt: "Маска",
    description:
      "Наши гости проходят собеседование и отбор, информация строго конфиденциальна",
  },
  {
    titleText: {
      top: "Отличное",
      bottom: "обслуживание",
    },
    imageSrc: "/icons/waiter.svg",
    imageAlt: "Официант",
    description:
      "Не стоит беспокоится о пустом бокале или искать место где расположится",
  },
  {
    titleText: {
      top: "Фирменные",
      bottom: "кальяны",
    },
    imageSrc: "/icons/hookah.svg",
    imageAlt: "Кальян",
    description:
      "Сочные, дымные кальяны изготовленные специально для нашего клуба",
  },
  {
    titleText: {
      top: "Разнообразная",
      bottom: "кухня",
    },
    imageSrc: "/icons/eat.svg",
    imageAlt: "Еда",
    description:
      "Хотите посетить наше мероприятие, но вы вегетарианец? Не переживайте, меню понравится всем",
  },
];
