"use client";

import { useEffect } from "react";

import {
  eventSliceActions,
  selectActiveEvent,
  selectActiveEventError,
  selectActiveEventLoadingStatus,
} from "../event-slice";
import { useAppDispatch, useAppSelector } from "@/shared/lib";

export const useActiveEvent = (eventId: string) => {
  const dispatch = useAppDispatch();

  const activeEvent = useAppSelector(selectActiveEvent);
  const status = useAppSelector(selectActiveEventLoadingStatus);
  const errorText = useAppSelector(selectActiveEventError);

  useEffect(() => {
    dispatch(
      eventSliceActions.getActiveEvent(eventId),
    ); /* потом на бэк передать eventId */
  }, [dispatch, eventId]);

  const reload = () => {
    dispatch(eventSliceActions.getActiveEvent(eventId)); /* eventId */
  };

  return { activeEvent, status, errorText, reload };
};
