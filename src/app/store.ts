import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
