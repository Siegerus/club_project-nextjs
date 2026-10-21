import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SliceNameSpace, LoadingStatus } from "@/shared/lib";
import { getUserToken } from "./get-user-token";

type SessionState = {
  data: string | null;
  userToken: string | null;
  dataLoadingStatus: (typeof LoadingStatus)[keyof typeof LoadingStatus];
  sessionError: string | null;
};

const sessionInitialState: SessionState = {
  data: null,
  userToken: null,
  dataLoadingStatus: LoadingStatus.Idle,
  sessionError: null,
};

const sessionSlice = createSlice({
  name: SliceNameSpace.Session,
  initialState: sessionInitialState,
  reducers: {
    setData: (state, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserToken.pending, (state) => {
      state.dataLoadingStatus = LoadingStatus.Loading;
      state.sessionError = null;
    });
    builder.addCase(getUserToken.fulfilled, (state, action) => {
      state.userToken = action.payload;
      state.sessionError = null;
      state.dataLoadingStatus = LoadingStatus.Success;
    });
    builder.addCase(getUserToken.rejected, (state, action) => {
      state.sessionError = action.error.message || "Error data fetch";
      state.dataLoadingStatus = LoadingStatus.Failed;
    });
  },
  selectors: {
    selectData: (state) => state.data,
    selectUserToken: (state) => state.userToken,
    selectSessionError: (state) => state.sessionError,
    selectDataLoadingStatus: (state) => state.dataLoadingStatus,
  },
});

export const { setData } = sessionSlice.actions;
export const {
  selectData,
  selectUserToken,
  selectSessionError,
  selectDataLoadingStatus,
} = sessionSlice.selectors;

export default sessionSlice;
