"use client";

import Image from "next/image";
import { useEffect } from "react";

import {
  EventItem,
  selectActiveEventId,
  selectActiveEvent,
  selectActiveEventLoadingStatus,
  selectActiveEventError,
  eventSliceActions,
} from "@/entities/event";
import { useAppSelector, useAppDispatch } from "@/shared/lib";
import { cn } from "@/shared/lib";
import { Timer, Heading, Container, Watermark } from "@/shared/ui";
import { timerTitleText, tabsConfig } from "../lib";
import EventTabs from "./event-tabs";

const styles = {
  root: cn(
    "flex flex-col",
    "pt-[10px] md:pt-[20px] md:pb-[40px] lg:pt-[60px] lg:pb-[78px]",
  ),
  watermark: cn(
    "top-[40px] md:top-[48px] -left-[3px] lg:left-[141px] lg:top-0",
    "text-[6.125em] lg:text-[10em] 3xl:text-[13.125em] text-center md:text-left md:text-nowrap md:text-wrap",
    "blur-[10px] lg:blur-[19px]",
    "",
  ),
  content: cn(
    "relative flex flex-col items-center",
    "md:flex-row lg:items-start",
  ),
  image: cn(
    "h-[320px] w-[320px] lg:h-[420px] lg:w-[420px] xl:h-[520px] xl:w-[520px]",
    "rounded-small",
    "object-cover",
  ),
  info: cn(
    "flex flex-col items-start",
    "md:items-center md:items-start md:ml-[14px] lg:ml-[60px]",
    "md:text-left",
  ),
  date: cn(
    "md:mt-[30px] lg:mt-[30px] xl:mt-[70px] 2xl:mt-[100px]",
    "text-sm md:text-base lg:text-xl",
    "font-medium lg:uppercase",
    "leading-main md:leading-middle lg:leading-main",
    "tracking-none md:tracking-base lg:tracking-none",
    "text-white-70 lg:text-white",
  ),
  title: cn(
    "3xl:max-w-[652px]",
    "mt-[4px] md:mt-[15px]",
    "text-sm md:text-2xl lg:text-[4.375em] xl:text-[78px] 2xl:text-[88px]",
    "font-semibold",
    "leading-main lg:leading-one",
    "tracking-none md:tracking-base",
    "text-white",
  ),
  timerTitle: "md:hidden mt-[10px] text-center text-white text-sm",
  timer: cn(
    "max-w-[280px] md:max-w-[unset] md:min-w-[360px] lg:max-w-[380px]",
    "mx-auto lg:mx-0",
    "mt-[10px] md:mt-[16px]",
  ),
  tabs: cn(
    "lg:min-w-[750px]",
    "mt-[20px] md:mt-[40px] lg:mt-[36px] lg:mx-auto",
    "leading-one",
  ),
};

const EventPromo = () => {
  const activeId = useAppSelector(selectActiveEventId);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(eventSliceActions.getActiveEvent()); /* activeId */
  }, []);

  const activeEvent = useAppSelector(selectActiveEvent);
  const tabs = activeEvent ? activeEvent.tabs : tabsConfig;

  return (
    <>
      <Watermark text="SWING СВАДЬБА" markClass={styles.watermark} />
      <Container>
        <div className="md:hidden -z-[1] absolute top-0 left-0 w-full h-full eclipse"></div>
        <section className={styles.root}>
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
          <EventTabs tabs={tabs} listClass={styles.tabs}>
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
      </Container>
    </>
  );
};

export default EventPromo;
