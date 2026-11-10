import type { AxiosInstance } from "axios";

import { APIRoute } from "@/shared/lib";
import { type EventItem } from "../model";

export const fetchActiveEvent = async (
  api: AxiosInstance,
  // id: string,
): Promise<EventItem> => {
  const { data } = await api.get<EventItem>(APIRoute.ActiveEvent /* id */);

  return data;
};
