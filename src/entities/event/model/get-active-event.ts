import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { type AppDispatch, RootState } from "@/shared/lib";
import { fetchActiveEvent } from "../api";
import { type EventItem } from "./types";

export const getActiveEvent = createAsyncThunk<
  EventItem,
  void,
  /* string */ {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>("event/fetchActiveEvent", async (_id, { extra: api }) => {
  const data = fetchActiveEvent(api);

  return data;
});
