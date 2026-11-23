"use client";

import { useEffect } from "react";

import {
  eventSliceActions,
  selectEventsData,
  selectEventsError,
  selectEventsLoadingStatus,
} from "../event-slice";
import { useAppDispatch, useAppSelector } from "@/shared/lib";

export const useEvents = () => {
  const dispatch = useAppDispatch();

  const events = useAppSelector(selectEventsData);
  const status = useAppSelector(selectEventsLoadingStatus);
  const errorText = useAppSelector(selectEventsError);

  useEffect(() => {
    dispatch(eventSliceActions.getEventsData());
  }, [dispatch]);

  const reload = () => {
    dispatch(eventSliceActions.getEventsData());
  };

  return { events, status, errorText, reload };
};
