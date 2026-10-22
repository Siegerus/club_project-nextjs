import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SliceNameSpace, LoadingStatus } from "@/shared/lib";
import { getUserToken } from "./get-user-token";

type SessionState = {
  agreementState: boolean;
  userToken: string | null;
  dataLoadingStatus: (typeof LoadingStatus)[keyof typeof LoadingStatus];
  sessionError: string | null;
};

const sessionInitialState: SessionState = {
  agreementState: false,
  userToken: null,
  dataLoadingStatus: LoadingStatus.Idle,
  sessionError: null,
};

const sessionSlice = createSlice({
  name: SliceNameSpace.Session,
  initialState: sessionInitialState,
  reducers: {
    setAgreementState: (state, action: PayloadAction<boolean>) => {
      state.agreementState = action.payload;
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
    selectAgreementState: (state) => state.agreementState,
    selectUserToken: (state) => state.userToken,
    selectSessionError: (state) => state.sessionError,
    selectDataLoadingStatus: (state) => state.dataLoadingStatus,
  },
});

export const { setAgreementState } = sessionSlice.actions;
export const {
  selectAgreementState,
  selectUserToken,
  selectSessionError,
  selectDataLoadingStatus,
} = sessionSlice.selectors;

export default sessionSlice;
