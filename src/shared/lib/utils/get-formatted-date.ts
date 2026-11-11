type FormattedDate = {
  day: number;
  month: string;
  genitiveMonth: string;
  year: number;
};

const MONTH_GENITIVE: Record<string, string> = {
  январь: "января",
  февраль: "февраля",
  март: "марта",
  апрель: "апреля",
  май: "мая",
  июнь: "июня",
  июль: "июля",
  август: "августа",
  сентябрь: "сентября",
  октябрь: "октября",
  ноябрь: "ноября",
  декабрь: "декабря",
};

const getFormattedDate = (date: string): FormattedDate => {
  const dateObject = new Date(date);

  return {
    day: dateObject.getUTCDate(),
    month: dateObject.toLocaleDateString("ru-RU", {
      month: "long",
      timeZone: "UTC",
    }),
    get genitiveMonth(): string {
      return MONTH_GENITIVE[this.month];
    },
    year: dateObject.getUTCFullYear(),
  };
};

export default getFormattedDate;
