import type { AxiosInstance } from "axios";

import { APIRoute } from "@/shared/lib";

export const fetchUserToken = async (api: AxiosInstance): Promise<string> => {
  const { data } = await api.get<string>(APIRoute.Login);

  return data;
};
