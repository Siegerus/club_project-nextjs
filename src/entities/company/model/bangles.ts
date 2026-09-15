export type Bangle = {
  name: string;
  imagePath: string;
  description: string;
};

export const bangles: Bangle[] = [
  {
    name: "Красный браслет",
    description: "Присматриваюсь и пока что закрыт(а) к знакомствам",
    imagePath: "/images/bracelet-red.png",
  },
  {
    name: "Жёлтый браслет",
    description:
      "Приветствуются дружелюбные беседы и лёгкий, непринуждённый флирт",
    imagePath: "/images/bracelet-yellow.png",
  },
  {
    name: "Зелёный браслет",
    description: "Зелёный браслет",
    imagePath: "/images/bracelet-green.png",
  },
];
