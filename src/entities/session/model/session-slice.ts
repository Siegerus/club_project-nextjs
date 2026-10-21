import { createSlice } from "@reduxjs/toolkit";

import { SliceNameSpace } from "@/shared/lib";

type SessionState = {
  token: string | null;
};

const sessionInitialState: SessionState = {
  token: SliceNameSpace.Session,
};

const sessionSlice = createSlice({
  name: "session",
  initialState: sessionInitialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  selectors: {
    selectToken: (state) => state.token,
  },
});

export const { setToken } = sessionSlice.actions;
export const { selectToken } = sessionSlice.selectors;

export default sessionSlice;
