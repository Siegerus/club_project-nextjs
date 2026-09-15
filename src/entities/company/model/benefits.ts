export type Benefit = {
  name: {
    base: string;
    accent: string;
  };
  imagePath: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    name: {
      base: "Полная",
      accent: "анонимность гостя",
    },
    imagePath: "/icons/mask.svg",
    description:
      "Наши гости проходят собеседование и отбор, информация строго конфиденциальна",
  },
  {
    name: {
      base: "Отличное",
      accent: "обслуживание",
    },
    imagePath: "/icons/waiter.svg",
    description:
      "Не стоит беспокоится о пустом бокале или искать место где расположится",
  },
  {
    name: {
      base: "Фирменные",
      accent: "кальяны",
    },
    imagePath: "/icons/hookah.svg",
    description:
      "Сочные, дымные кальяны изготовленные специально для нашего клуба",
  },
  {
    name: {
      base: "Разнообразная",
      accent: "кухня",
    },
    imagePath: "/icons/eat.svg",
    description:
      "Хотите посетить наше мероприятие, но вы вегетарианец? Не переживайте, меню понравится всем",
  },
];
