export type Bangle = {
  titleText: {
    top: string;
    bottom?: string;
  };
  imageSrc: string;
  imageAlt: string;
  description: string;
};

export const bangles: Bangle[] = [
  {
    titleText: { top: "Красный браслет" },
    description: "Присматриваюсь и пока что закрыт(а) к знакомствам",
    imageSrc: "/images/bracelet-red.png",
    imageAlt: "Красный браслет",
  },
  {
    titleText: { top: "Жёлтый браслет" },
    description:
      "Приветствуются дружелюбные беседы и лёгкий, непринуждённый флирт",
    imageSrc: "/images/bracelet-yellow.png",
    imageAlt: "Жёлтый браслет",
  },
  {
    titleText: { top: "Зелёный браслет" },
    description: "Зелёный браслет",
    imageSrc: "/images/bracelet-green.png",
    imageAlt: "Готов(а) и открыт(а) к прикосновениям и не только",
  },
];
