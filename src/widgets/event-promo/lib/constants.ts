export const timerTitleText = "Бронирование закроется через";

export type TabId = "format" | "about" | "timing" | "bangles" | "dresscode";

export type Tab = {
  id: TabId;
  label: string;
  description: string;
};

export const tabsConfig: Tab[] = [
  {
    id: "format",
    label: "О событии",
    description: `Что же вас ждёт на этой уникальной свадьбе? \n Приоткроем пару фишек мероприятия: \n -Свадебные традиции с уклоном на формат свадьбы \n -Горячий сюрприз для молодоженов и гостей \n Как всегда много вкусных и сочный блюд. \n Всеми любимые ведущий и диджей с ещё более горячей программой!`,
  },
  {
    id: "about",
    label: "Формат мероприятия",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum suscipit voluptatibus non rerum laboriosam quos velit incidunt sint deserunt voluptates facilis possimus vitae, id excepturi deleniti, perferendis sequi error corporis veritatis adipisci fuga doloremque iste. Illum suscipit perferendis, accusamus amet temporibus at corrupti velit necessitatibus nostrum eveniet. Optio tempore, ipsum, consectetur a perferendis nemo iusto beatae iure cumque fugit assumenda harum natus sequi vel sapiente eos saepe laboriosam possimus at neque cupiditate consequuntur non? Consequuntur nulla facere expedita. Earum?`,
  },
  {
    id: "timing",
    label: "Тайминг",
    description: `Lorem ipsum dolor sit amet consectetur. \n  Lorem, ipsum dolor sit amet consectetur adipisicing elit. \n  Lorem ipsum dolor sit amet. \n  Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Repellendus deleniti omnis quos. \n  Lorem ipsum dolor sit amet consectetur adipisicing. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Incidunt ab quod illum voluptatum!`,
  },
  {
    id: "bangles",
    label: "Браслеты",
    description: `Lorem ipsum dolor sit amet consectetur. \n  Lorem, ipsum dolor sit amet consectetur adipisicing elit. \n  Lorem ipsum dolor sit amet. \n  Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Repellendus deleniti omnis quos. \n  Lorem ipsum dolor sit amet consectetur adipisicing. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Incidunt ab quod illum voluptatum!`,
  },
  {
    id: "dresscode",
    label: "Дресс-код",
    description: `Lorem ipsum dolor sit amet consectetur. \n  Lorem, ipsum dolor sit amet consectetur adipisicing elit. \n  Lorem ipsum dolor sit amet. \n  Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Repellendus deleniti omnis quos. \n  Lorem ipsum dolor sit amet consectetur adipisicing. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Incidunt ab quod illum voluptatum!`,
  },
];
