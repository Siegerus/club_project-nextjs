export const vipSectionTitle = "VIP";

export const vipSectionDescription =
  "Attraction VIP\u00A0— это\u00A0возможность улучшить своё впечатление от\u00A0похода в\u00A0наш\u00A0клуб и\u00A0почувствовать настоящее удовольствие";

type SecondaryList = {
  descriptions: string[];
  periodName: "месяцев" | "дней";
  buttonText: string;
};

export const vipSectionSecondaryList: SecondaryList = {
  descriptions: [
    "Чем\u00A0больше период, тем\u00A0больше выгода",
    "Список функций премиум подписки в\u00A0будущем будет пополняться",
  ],
  periodName: "месяцев",
  buttonText: "Оформить подписку",
};
