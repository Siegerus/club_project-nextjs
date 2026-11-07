"use client";

import { useEffect } from "react";

import {
  selectEventData,
  eventSliceActions,
  selectEventLoadingStatus,
  selectEventError,
} from "@/entities/event";
import {
  useAppSelector,
  useAppDispatch,
  LoadingStatus,
  UserMessage,
} from "@/shared/lib";
import { Button } from "@/shared/ui";
import { errorButtonText } from "../lib";
import EventsCard from "./events-card";

const styles = {
  list: "flex items-center flex-wrap flex-col md:flex-row justify-between mt-[10px] md:mt-[20px] lg:mt-[40px] max-w-full",
};

const EventsList = () => {
  const events = useAppSelector(selectEventData);
  const error = useAppSelector(selectEventError);
  const status = useAppSelector(selectEventLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(eventSliceActions.getEventData());
  }, [dispatch]);

  const handleButtonClick = () => {
    dispatch(eventSliceActions.getEventData());
  };

  if (status === LoadingStatus.Failed)
    return (
      <>
        <span className="block mt-[40px] mb-[40px] text-2xl text-center text-white">
          {UserMessage.LoadingError}
          <br />
          {error}
        </span>
        <Button onClick={handleButtonClick}>
          <span>{errorButtonText}</span>
        </Button>
      </>
    );

  if (status === LoadingStatus.Loading)
    return (
      <span className="block mt-[40px] text-2xl text-center text-white">
        {UserMessage.LoadingProgress}
      </span>
    );

  if (status === LoadingStatus.Success && events.length === 0)
    return (
      <span className="block mt-[40px] text-2xl text-center text-white">
        {UserMessage.EmptyData}
      </span>
    );

  return (
    <ul className={styles.list}>
      {events.map((event) => {
        return (
          <li key={event.id}>
            <EventsCard event={event} />
          </li>
        );
      })}
    </ul>
  );
};

export default EventsList;
