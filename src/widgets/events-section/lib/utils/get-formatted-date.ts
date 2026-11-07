type FormattedDate = {
  day: number;
  month: string;
  year: number;
};

export const getFormattedDate = (date: string): FormattedDate => {
  const dateObject = new Date(date);

  return {
    day: dateObject.getUTCDate(),
    month: dateObject.toLocaleDateString("ru-RU", {
      month: "long",
      timeZone: "UTC",
    }),
    year: dateObject.getUTCFullYear(),
  };
};
