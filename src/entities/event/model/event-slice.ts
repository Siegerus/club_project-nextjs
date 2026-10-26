import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SliceNameSpace, LoadingStatus } from "@/shared/lib";
import { getEventData } from "./get-event-data";
import { EventItem } from "./types";

type EventSlice = {
  eventData: EventItem[];
  eventLoadingStatus: (typeof LoadingStatus)[keyof typeof LoadingStatus];
  eventError: string | null;
};

export const eventSliceInitial: EventSlice = {
  eventData: [],
  eventLoadingStatus: LoadingStatus.Idle,
  eventError: null,
};

export const eventSlice = createSlice({
  name: SliceNameSpace.Event,
  initialState: eventSliceInitial,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEventData.pending, (state) => {
      state.eventLoadingStatus = LoadingStatus.Loading;
      state.eventError = null;
    });
    builder.addCase(
      getEventData.fulfilled,
      (state, action: PayloadAction<EventItem[]>) => {
        state.eventData = state.eventData.concat(action.payload);
        state.eventLoadingStatus = LoadingStatus.Success;
        state.eventError = null;
      },
    );
    builder.addCase(getEventData.rejected, (state, payload) => {
      state.eventLoadingStatus = LoadingStatus.Failed;
      state.eventError = payload.error.message ?? "Ошибка загрузки данных";
    });
  },
  selectors: {
    selectEventData: (state) => state.eventData,
    selectEventError: (state) => state.eventError,
    selectEventLoadingStatus: (state) => state.eventLoadingStatus,
  },
});

export const eventSliceActions = { ...eventSlice.actions, getEventData };

export const { selectEventData, selectEventLoadingStatus, selectEventError } =
  eventSlice.selectors;

export default eventSlice;
