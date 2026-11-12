import type { TimeValue } from "./types";

export type TimeUnit = {
  id: keyof TimeValue;
  label: string;
};

export const timeConfigs: TimeUnit[] = [
  { id: "days", label: "дней" },
  { id: "hours", label: "часов" },
  { id: "minutes", label: "минут" },
  { id: "seconds", label: "секунд" },
];

export const initialTimeValues: TimeValue = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};
