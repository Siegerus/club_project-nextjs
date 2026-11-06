"use client";

import { selectEventData } from "@/entities/event";
import { useAppSelector } from "@/shared/lib";
import EventsCard from "./events-card";

const styles = {
  list: "flex items-center flex-wrap flex-col md:flex-row justify-between mt-[10px] md:mt-[20px] lg:mt-[40px] max-w-full",
};

const EventsList = () => {
  const events = useAppSelector(selectEventData);

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
