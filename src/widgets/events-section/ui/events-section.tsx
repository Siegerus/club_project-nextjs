import { Heading } from "@/shared/ui/";
import { eventsTitleText } from "../lib";
import EventsList from "./events-list";

const styles = {
  root: "pt-[20px] pb-[47px] lg:pt-[40px] lg:pb-[70px]",
  title: "leading-one tracking-base title title-responsive",
};

const EventsSection = () => {
  return (
    <section className={styles.root}>
      <Heading
        className={styles.title}
        title={eventsTitleText}
        level="h1"
        gradientType="white"
      />
      <EventsList />
    </section>
  );
};

export default EventsSection;
