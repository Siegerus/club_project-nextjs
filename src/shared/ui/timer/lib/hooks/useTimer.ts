"use client";
import { useEffect, useCallback, useState } from "react";

import { initialTimeValues } from "../constants";
import type { TimeValue } from "../types";
import { targetValueValidate } from "../utils";

const useTimer = (deadline: string): TimeValue => {
  const targetDate = Date.parse(deadline);

  const getTimeObject = useCallback(() => {
    const difference = Math.max(targetDate - Date.now(), 0);
    const formatted = (num: number) => String(num).padStart(2, "0");

    return {
      seconds: formatted(Math.floor((difference / 1000) % 60)),
      minutes: formatted(Math.floor((difference / 1000 / 60) % 60)),
      hours: formatted(Math.floor((difference / 1000 / 60 / 60) % 24)),
      days: formatted(Math.floor(difference / 1000 / 60 / 60 / 24)),
    };
  }, [targetDate]);

  const [times, setTimes] = useState<TimeValue>(initialTimeValues);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    queueMicrotask(() => setTimes(getTimeObject));
    const interval = setInterval(() => setTimes(getTimeObject()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [getTimeObject, isMounted]);

  if (!targetValueValidate(deadline) || !isMounted) return initialTimeValues;

  return times;
};

export default useTimer;
