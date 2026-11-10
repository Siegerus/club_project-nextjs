import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { type AppDispatch, RootState } from "@/shared/lib";
import { fetchEventsData } from "../api";
import { type EventItem } from "./types";

export const getEventsData = createAsyncThunk<
  EventItem[],
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>("event/fetchEventsData", async (_arg, { extra: api }) => {
  const data = await fetchEventsData(api);

  return data;
});
