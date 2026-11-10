import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SliceNameSpace, LoadingStatus } from "@/shared/lib";
import { getActiveEvent } from "./get-active-event";
import { getEventsData } from "./get-events-data";
import { EventItem } from "./types";

type EventSlice = {
  eventsData: EventItem[];
  activeEventId: string;
  activeEvent: EventItem | null;
  eventsLoadingStatus: (typeof LoadingStatus)[keyof typeof LoadingStatus];
  activeEventLoadingStatus: (typeof LoadingStatus)[keyof typeof LoadingStatus];
  eventsError: string | null;
  activeEventError: string | null;
};

export const eventSliceInitial: EventSlice = {
  eventsData: [],
  activeEventId: "",
  activeEvent: null,
  eventsLoadingStatus: LoadingStatus.Idle,
  activeEventLoadingStatus: LoadingStatus.Idle,
  eventsError: null,
  activeEventError: null,
};

export const eventSlice = createSlice({
  name: SliceNameSpace.Event,
  initialState: eventSliceInitial,
  reducers: {
    setActiveEventId: (state, action: PayloadAction<string>) => {
      state.activeEventId = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getEventsData.pending, (state) => {
      state.eventsLoadingStatus = LoadingStatus.Loading;
      state.eventsError = null;
    });
    builder.addCase(
      getEventsData.fulfilled,
      (state, action: PayloadAction<EventItem[]>) => {
        state.eventsData = action.payload;
        state.eventsLoadingStatus = LoadingStatus.Success;
        state.eventsError = null;
      },
    );
    builder.addCase(getEventsData.rejected, (state, payload) => {
      state.eventsLoadingStatus = LoadingStatus.Failed;
      state.eventsError = payload.error.message ?? "Ошибка загрузки данных";
    });

    builder.addCase(getActiveEvent.pending, (state) => {
      state.activeEventLoadingStatus = LoadingStatus.Loading;
      state.activeEventError = null;
    });
    builder.addCase(
      getActiveEvent.fulfilled,
      (state, action: PayloadAction<EventItem>) => {
        state.activeEventLoadingStatus = LoadingStatus.Success;
        state.activeEvent = action.payload;
      },
    );
    builder.addCase(getActiveEvent.rejected, (state, payload) => {
      state.activeEventLoadingStatus = LoadingStatus.Failed;
      state.activeEventError =
        payload.error.message ?? "Ошибка загрузки данных";
    });
  },
  selectors: {
    selectEventsData: (state) => state.eventsData,
    selectEventsError: (state) => state.eventsError,
    selectEventsLoadingStatus: (state) => state.eventsLoadingStatus,
    selectActiveEventId: (state) => state.activeEventId,
    selectActiveEvent: (state) => state.activeEvent,
    selectActiveEventError: (state) => state.activeEventError,
    selectActiveEventLoadingStatus: (state) => state.activeEventLoadingStatus,
  },
});

export const eventSliceActions = {
  ...eventSlice.actions,
  getEventsData,
  getActiveEvent,
};

export const {
  selectEventsData,
  selectEventsLoadingStatus,
  selectEventsError,
  selectActiveEventId,
  selectActiveEvent,
  selectActiveEventLoadingStatus,
  selectActiveEventError,
} = eventSlice.selectors;

export default eventSlice;
