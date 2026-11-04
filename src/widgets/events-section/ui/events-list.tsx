import EventsCard from "./events-card";

type EventsListProps = {};

const styles = {
  list: "flex items-center flex-wrap flex-col md:flex-row justify-between mt-[10px] md:mt-[20px] lg:mt-[40px] max-w-full",
};

const EventsList = (props: EventsListProps) => {
  return (
    <ul className={styles.list}>
      <li>
        <EventsCard />
      </li>
      <li>
        <EventsCard />
      </li>
      <li>
        <EventsCard />
      </li>
    </ul>
  );
};

export default EventsList;
