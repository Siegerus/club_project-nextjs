import type { AxiosInstance } from "axios";

import { APIRoute } from "@/shared/lib";
import { type EventItem } from "../model";

export const fetchEventsData = async (
  api: AxiosInstance,
): Promise<EventItem[]> => {
  const { data } = await api.get<EventItem[]>(APIRoute.Events);

  return data;
};
