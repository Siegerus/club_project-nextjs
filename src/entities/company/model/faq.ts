export const Faq = {
  0: {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus tempor turpis elit egestas. Vel enim quis diam duis ipsum mi consequat. Tristique dolor sapien fringilla amet sed diam condimentum arcu.",
  },
  1: {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus tempor turpis elit egestas. Vel enim quis diam duis ipsum mi consequat. Tristique dolor sapien fringilla amet sed diam condimentum arcu.Lorem ipsum dolor sit amet consectetur. Tellus tempor turpis elit egestas. Vel enim quis diam duis ipsum mi consequat. Tristique dolor sapien fringilla amet sed diam condimentum arcu.",
  },
  2: {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus tempor turpis elit egestas. Vel enim quis diam duis ipsum mi consequat. Tristique dolor sapien fringilla amet sed diam condimentum arcu.",
  },
  3: {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus tempor turpis elit egestas. Vel enim quis diam duis ipsum mi consequat. Tristique dolor sapien fringilla amet sed diam condimentum arcu.Lorem ipsum dolor sit amet consectetur. Tellus tempor turpis elit egestas. Vel enim quis diam duis ipsum mi consequat. Tristique dolor sapien fringilla amet sed diam condimentum arcu.Lorem ipsum dolor sit amet consectetur. Tellus tempor turpis elit egestas. Vel enim quis diam duis ipsum mi consequat. Tristique dolor sapien fringilla amet sed diam condimentum arcu.",
  },
} as const;

export type FaqItem = (typeof Faq)[keyof typeof Faq];

export const FaqItems: FaqItem[] = Object.values(Faq);
