import { AppRoute } from "@/shared/lib";

export const notFoundPage = {
  title: "Упс!",
  description:
    "Вы попали на несуществующую страницу. Не волнуйтесь, мы быстро вернём вас в мир наслаждений",
  actionLabel: "Вернуться на главную",
  actionPath: AppRoute.Home,
  illustration: {
    src: "/images/404.png",
    alt: "Цифры 404",
    width: 217,
    height: 203,
  },
} as const;
