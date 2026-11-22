import type { AxiosInstance } from "axios";

import { APIRoute } from "@/shared/lib";
import { type CommentItem } from "../model";

export const fetchCommentsData = async (
  api: AxiosInstance,
): Promise<CommentItem[]> => {
  const { data } = await api.get<CommentItem[]>(APIRoute.Comments);

  return data;
};
