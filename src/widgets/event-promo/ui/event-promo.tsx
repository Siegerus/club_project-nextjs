import Image from "next/image";

import { cn } from "@/shared/lib";
import { Timer, Heading } from "@/shared/ui";
import { timerTitleText } from "../lib";
import EventTabs from "./event-tabs";

const styles = {
  root: "relative flex flex-col pt-[10px] md:pt-[20px] md:pb-[40px]",
  watermark:
    "-z-[10] absolute top-8 left-0 w-full select-none text-center text-[98px] font-semibold leading-one tracking-base text-main-input blur-[11px] md:top-16 md:text-[210px] md:blur-[22px]",
  content: "relative flex flex-col items-center md:flex-row md:items-center",
  image:
    "h-[320px] w-[320px] rounded-small object-cover lg:h-[520px] lg:w-[520px]",
  info: "flex flex-col items-start md:items-center md:items-start md:ml-[14px] md:text-left",
  date: "md:mt-[30px] text-sm md:text-base font-medium leading-main md:leading-middle tracking-none md:tracking-base text-white-70",
  title:
    "mt-[4px] md:mt-[15px] text-sm md:text-2xl font-semibold leading-main tracking-none md:tracking-base text-white lg:w-[652px] lg:text-[88px]",
  timerTitle: "md:hidden mt-[10px] text-center text-white text-sm",
  timer:
    "max-w-[280px] md:max-w-[unset] md:min-w-[360px] mx-auto mt-[10px] md:mt-[16px]",
  tabs: "mt-[20px] md:mt-[40px] leading-one",
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
          <Timer wrapperClass={cn(styles.timer, "hidden md:flex")} />
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
      <span className={styles.timerTitle}>{timerTitleText}</span>
      <Timer wrapperClass={cn(styles.timer, "md:hidden")} />
    </section>
  );
};

export default EventPromo;
