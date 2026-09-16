export type Bangle = {
  name: string;
  imagePath: string;
  description: string;
};

export const bangles: Bangle[] = [
  {
    name: "Красный браслет",
    description: "Присматриваюсь и\u00A0пока что закрыт(а) к\u00A0знакомствам",
    imagePath: "/images/bracelet-red.png",
  },
  {
    name: "Жёлтый браслет",
    description:
      "Приветствуются дружелюбные беседы и\u00A0лёгкий, непринуждённый флирт",
    imagePath: "/images/bracelet-yellow.png",
  },
  {
    name: "Зелёный браслет",
    description:
      "Готов(а) и\u00A0открыт(а) к\u00A0прикосновениям и\u00A0не\u00A0только",
    imagePath: "/images/bracelet-green.png",
  },
];
