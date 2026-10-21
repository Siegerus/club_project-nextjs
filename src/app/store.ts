import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { sessionSlice } from "@/entities/session";
import { createAPI } from "@/shared/api";
import { SliceNameSpace } from "@/shared/lib";

const rootReducer = combineReducers({
  [SliceNameSpace.Session]: sessionSlice.reducer,
});

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export default store;
