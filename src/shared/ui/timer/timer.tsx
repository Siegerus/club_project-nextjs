"use client";

import { useEffect, useState } from "react";

import { cn } from "@/shared/lib";
import { useTimer, timeConfigs } from "./lib";

type TimerProps = {
  deadline: string;
  wrapperClass?: string;
};

const styles = {
  wrapper:
    "flex justify-around md:justify-between flex-wrap md:flex-nowrap gap-y-[10px]",
  cardWrapper: "flex flex-col items-center justify-center",
  card: "relative flex w-[80px] h-[80px] items-center justify-center rounded-[16px] bg-white-20 backdrop-blur-md",
  value: "text-[2.5em] font-semibold leading-one text-white tracking-base",
  label: "text-xl font-medium leading-main text-white-70 md:text-xl",
  line: "-z-[5] absolute w-full h-[3px] top-1/2 -translate-y-1/2 bg-black",
};

const Timer = ({ deadline, wrapperClass }: TimerProps) => {
  const [isComponentMounted, setIsComponentMounted] = useState<boolean>(false);

  useEffect(() => {
    queueMicrotask(() => setIsComponentMounted(true));
  });

  const timeValues = useTimer(deadline, isComponentMounted);

  const times = timeConfigs.map((item) => ({
    ...item,
    value: timeValues[item.id],
  }));

  return (
    <div
      className={cn(styles.wrapper, wrapperClass)}
      role="timer"
      aria-live="off"
    >
      {times.map((item) => (
        <div className={styles.cardWrapper} key={item.id}>
          <div className={styles.card}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.line}></span>
          </div>
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Timer;
