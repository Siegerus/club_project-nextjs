export const rateToStars = (num: number) =>
  Array.from({ length: num }, (_, i) => i + 1);
