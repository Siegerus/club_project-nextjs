"use client";

import { useEffect } from "react";

import {
  selectEventsData,
  eventSliceActions,
  selectEventsLoadingStatus,
  selectEventsError,
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
  const events = useAppSelector(selectEventsData);
  const error = useAppSelector(selectEventsError);
  const status = useAppSelector(selectEventsLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(eventSliceActions.getEventsData());
  }, [dispatch]);

  const handleButtonClick = () => {
    dispatch(eventSliceActions.getEventsData());
  };

  if (status === LoadingStatus.Failed)
    return (
      <>
        <span className="block mt-[40px] mb-[40px] text-2xl text-center text-white">
          {UserMessage.LoadingError}
          <br />
          {error}
        </span>
        <Button
          onClick={handleButtonClick}
          className="max-w-full md:max-w-[370px] mt-[60px] button-interactive_fill"
        >
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
      <>
        <span className="block mt-[40px] text-2xl text-center text-white">
          {UserMessage.EmptyData}
        </span>
        <Button
          onClick={handleButtonClick}
          className="max-w-full md:max-w-[370px] mt-[60px] button-interactive_fill"
        >
          <span>{errorButtonText}</span>
        </Button>
      </>
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
