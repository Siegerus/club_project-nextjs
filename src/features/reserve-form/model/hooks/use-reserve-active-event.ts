"use client";

import { selectActiveEvent } from "@/entities/event";
import { useAppSelector } from "@/shared/lib";

export const useReserveActiveEvent = () => useAppSelector(selectActiveEvent);
