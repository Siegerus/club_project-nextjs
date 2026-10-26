import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { type AppDispatch, RootState } from "@/shared/lib";
import { fetchEventData } from "../api";
import { type EventItem } from "./types";

export const getEventData = createAsyncThunk<
  EventItem[],
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>("event/fetchEventData", async (_arg, { extra: api }) => {
  const data = await fetchEventData(api);

  return data;
});
