import clsx from "clsx";
import { twMerge, ClassNameValue } from "tailwind-merge";

export default function cn(...args: ClassNameValue[]) {
  return twMerge(clsx(args));
}
