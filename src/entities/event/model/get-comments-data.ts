import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { type AppDispatch, RootState } from "@/shared/lib";
import { fetchCommentsData } from "../api";
import { type CommentItem } from "./types";

export const getCommentsData = createAsyncThunk<
  CommentItem[],
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>("comments/fetchCommentsData", async (_arg, { extra: api }) => {
  const data = await fetchCommentsData(api);

  return data;
});
