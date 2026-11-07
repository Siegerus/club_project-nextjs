import Image from "next/image";

import { cn } from "@/shared/lib";
import { Timer, Heading } from "@/shared/ui";
import EventTabs from "./event-tabs";

const styles = {
  root: "relative flex flex-col pt-[10px] overflow-hidden",
  watermark:
    "absolute top-8 left-0 w-full select-none text-center text-[98px] font-semibold leading-one tracking-base text-main-input blur-[11px] md:top-16 md:text-[210px] md:blur-[22px]",
  content:
    "relative flex flex-col items-center gap-10  md:flex-row md:items-start md:gap-14",
  image: "h-80 w-80 rounded-small object-cover md:h-[520px] md:w-[520px]",
  info: "flex flex-col items-start md:items-center md:items-start md:gap-4 md:text-left",
  date: "text-sm font-medium leading-main tracking-none md:tracking-base text-white-70 md:text-xl",
  title:
    "mt-[4px] text-sm font-semibold leading-main tracking-none md:tracking-base text-white md:w-[652px] md:text-[88px]",
  tabs: "mt-[20px] leading-one",
};

const EventPromo = () => {
  return (
    <section className={styles.root}>
      <p className={styles.watermark} aria-hidden="true">
        SWING СВАДЬБА
      </p>
      <div className={styles.content}>
        <Image
          src="/images/action-img.png"
          alt="Фото события"
          width={520}
          height={520}
          className={styles.image}
          priority
        />
        <div className={cn(styles.info, "hidden md:block")}>
          <p className={styles.date}>20 июля 2024 года</p>
          <Heading
            level="h1"
            title="Swing свадьба Сегрея и Дарьи"
            className={styles.title}
          />
          <Timer wrapperClass="hidden md:flex" />
        </div>
      </div>
      <EventTabs listClass={styles.tabs}>
        <div
          className={cn(
            styles.info,
            "md:hidden mt-[10px] pt-[10px] border-t-[2px] border-solid border-white/10",
          )}
        >
          <p className={styles.date}>20 июля 2024 года</p>
          <Heading
            level="h1"
            title="Swing свадьба Сегрея и Дарьи"
            className={styles.title}
          />
        </div>
      </EventTabs>
      <Timer wrapperClass="md:hidden" />
    </section>
  );
};

export default EventPromo;
