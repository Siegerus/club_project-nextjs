export type ReserveInputName =
  | "reserve-form-user-name"
  | "reserve-form-age"
  | "reserve-variant";

export type ReserveFormVariant = "base" | "comfort";

export type ReserveFormValues = {
  "reserve-form-user-name": string;
  "reserve-form-age": string;
  "reserve-variant": ReserveFormVariant;
};
