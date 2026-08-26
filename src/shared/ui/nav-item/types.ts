import { AppRoute } from "@/shared/lib/routes";

export type NavItemType = {
  text: string;
  path: (typeof AppRoute)[keyof typeof AppRoute];
};
