import { HTMLInputTypeAttribute } from "react";
import type { ReviewsInputName, ReviewsRatingRadio } from "./types";

type ReviewsTextInput = {
  id: string;
  name: ReviewsInputName;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  autocomplete: "name" | "off";
  isTextArea: boolean;
};

type ReviewsInputConfig = {
  textInputs: ReviewsTextInput[];
  ratingRadios: ReviewsRatingRadio[];
};

export const reviewsInputsConfig: ReviewsInputConfig = {
  textInputs: [
    {
      id: "reviews-form-name",
      name: "reviews-form-name",
      label: "Ваше имя",
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
  ratingRadios: [
    {
      id: "one",
      name: "reviews-form-rating",
      label: "Одна звезда из пяти",
      value: "1",
    },
    {
      id: "two",
      name: "reviews-form-rating",
      label: "Две звезды из пяти",
      value: "2",
    },
    {
      id: "three",
      name: "reviews-form-rating",
      label: "Три звезды из пяти",
      value: "3",
    },
    {
      id: "four",
      name: "reviews-form-rating",
      label: "Четыре звезды из пяти",
      value: "4",
    },
    {
      id: "five",
      name: "reviews-form-rating",
      label: "Пять звезд из пяти",
      value: "5",
    },
  ],
};
