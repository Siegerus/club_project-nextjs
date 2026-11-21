export type ReviewsInputName = keyof ReviewsFormValues;

export type ReviewsRatingRadio = {
  id: string;
  name: ReviewsInputName;
  label: string;
  value: string;
};

export type ReviewsFormValues = {
  "reviews-form-name": string;
  "reviews-form-comment": string;
  "reviews-form-event": string;
  "reviews-form-rating": string;
};
