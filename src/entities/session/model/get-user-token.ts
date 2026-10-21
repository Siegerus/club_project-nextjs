import { createAsyncThunk } from "@reduxjs/toolkit";
import { type AxiosInstance } from "axios";

import { type AppDispatch, type RootState } from "@/shared/lib";
import { fetchUserToken } from "../api";

export const getUserToken = createAsyncThunk<
  string,
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>("session/getUserToken", async (_arg, { extra: api }) => fetchUserToken(api));
