import { HTMLInputTypeAttribute } from "react";
import type { ReviewsInputName } from "./types";

type ReviewsTextInput = {
  id: string;
  name: ReviewsInputName;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  autocomplete: "name" | "off";
  isTextArea: boolean;
};

type ReviewsSelectRadio = {
  id: string;
  name: ReviewsInputName;
  label: string;
  value: string;
};

type ReviewsRatingRadio = Omit<ReviewsSelectRadio, "label">;

type ReviewsInputConfig = {
  textInputs: ReviewsTextInput[];
  selectRadios: ReviewsSelectRadio[];
  ratingRadios: ReviewsRatingRadio[];
};

export const reviewsInputsConfig: ReviewsInputConfig = {
  textInputs: [
    {
      id: "reviews-form-name",
      name: "reviews-form-name",
      label: "Имя",
      type: "text",
      placeholder: "Ваше имя",
      autocomplete: "name",
      isTextArea: false,
    },
    {
      id: "reviews-form-comment",
      name: "reviews-form-comment",
      label: "Ваш отзыв",
      type: "text",
      placeholder: "Ваш отзыв",
      autocomplete: "off",
      isTextArea: true,
    },
  ],
  selectRadios: [
    {
      id: "Birthday party!",
      name: "reviews-form-event",
      label: "Birthday party!",
      value: "Birthday party!",
    },
    {
      id: "Swing свадьба Сегрея и Дарьи",
      name: "reviews-form-event",
      label: "Swing свадьба Сегрея и Дарьи",
      value: "Swing свадьба Сегрея и Дарьи",
    },
    {
      id: "Lorem impum",
      name: "reviews-form-event",
      label: "Lorem impum",
      value: "Lorem impum",
    },
  ],
  ratingRadios: [
    {
      id: "one",
      name: "reviews-form-rating",
      value: "1",
    },
    {
      id: "two",
      name: "reviews-form-rating",
      value: "2",
    },
    {
      id: "three",
      name: "reviews-form-rating",
      value: "3",
    },
    {
      id: "four",
      name: "reviews-form-rating",
      value: "4",
    },
    {
      id: "five",
      name: "reviews-form-rating",
      value: "5",
    },
  ],
};
