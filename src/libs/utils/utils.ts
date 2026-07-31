import { twMerge, ClassNameValue } from "tailwind-merge";
import clsx from "clsx";

export default function cn(...args: ClassNameValue[]) {
  return twMerge(clsx(args));
}
