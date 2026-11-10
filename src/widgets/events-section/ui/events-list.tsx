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
import { ErrorPage, PageSkeleton } from "@/shared/ui";
import { errorButtonText } from "../lib";
import EventsCard from "./events-card";

const styles = {
  list: "flex items-center flex-wrap flex-col md:flex-row justify-between mt-[10px] md:mt-[20px] lg:mt-[40px] max-w-full",
};

const EventsList = () => {
  const events = useAppSelector(selectEventsData);
  const errorText = useAppSelector(selectEventsError);
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
      <ErrorPage
        title={LoadingStatus.Failed}
        onReset={handleButtonClick}
        resetText={errorButtonText}
        description={`${UserMessage.LoadingError}:${errorText}`}
        withContent={false}
        withLogo={false}
      />
    );

  if (status === LoadingStatus.Loading)
    return (
      <PageSkeleton>
        <ErrorPage
          title={LoadingStatus.Loading}
          description={UserMessage.LoadingProgress}
          withContent={false}
          withLogo={false}
        />
      </PageSkeleton>
    );

  if (status === LoadingStatus.Success && events.length === 0)
    return (
      <ErrorPage
        title={LoadingStatus.Failed}
        description={UserMessage.EmptyData}
        withContent={false}
        withLogo={false}
      />
    );

  if (!events.length) return <PageSkeleton />;

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
