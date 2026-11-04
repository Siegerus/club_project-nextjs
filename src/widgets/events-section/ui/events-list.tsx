"use client";
import { useEffect } from "react";

import store from "@/app/store";
import { eventSliceActions, selectEventData } from "@/entities/event";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import EventsCard from "./events-card";

const styles = {
  list: "flex items-center flex-wrap flex-col md:flex-row justify-between mt-[10px] md:mt-[20px] lg:mt-[40px] max-w-full",
};

store.dispatch(eventSliceActions.getEventData());

const EventsList = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(selectEventData);

  // useEffect(() => {
  //   dispatch(eventSliceActions.getEventData());
  // }, []);

  return (
    <ul className={styles.list}>
      {events.map((event, i) => {
        return (
          <li key={event.id}>
            <EventsCard />
          </li>
        );
      })}
    </ul>
  );
};

export default EventsList;
