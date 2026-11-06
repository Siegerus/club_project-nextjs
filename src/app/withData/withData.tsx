"use client";

import { PropsWithChildren } from "react";

import { useEffect, useState } from "react";
import { eventSliceActions, selectEventData } from "@/entities/event";
import { useAppDispatch, useAppSelector } from "@/shared/lib";

const WithData = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(selectEventData);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (isMounted) dispatch(eventSliceActions.getEventData());
    queueMicrotask(() => setIsMounted(true));
    console.log(events);
  }, [isMounted]);

  return children;
};

export default WithData;
