"use client";

import { useState, useRef } from "react";

import { selectActiveEvent } from "@/entities/event";
import { useTabKeys } from "@/shared/lib";
import { cn, useAppSelector } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { reserveTabsConfig } from "../lib";
import ReserveForm from "./reserve-form";

const styles = {
  tabList: cn(
    "flex items-center justify-center",
    "w-full md:max-w-[540px]",
    "mt-[30px] md:mt-[40px] md:mx-auto",
    "bg-main-bg rounded-full",
  ),
  listItem: cn("z-0 min-w-[33%] md:min-w-[31%] md:nth-1:min-w-[40%]"),
  tab: cn(
    "min-w-full px-[20px] md:px-[43px] py-[20px] md:py-[20px] xl:py-[20px] 2xl:py-[20px]",
    "bg-transparent text-base text-white leading-main tracking-base duration-[70ms]",
  ),
  activeTab: cn("bg-white text-black"),
};

const ReserveTabs = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeTabId = reserveTabsConfig[activeIndex].id;
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  const activeEvent = useAppSelector(selectActiveEvent);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleKeyDown = useTabKeys(tabRefs, setActiveIndex);

  if (!activeEvent) return null;

  return (
    <>
      <ul className={styles.tabList}>
        {reserveTabsConfig.map((tab, i) => {
          const keyValue = `${tab.id}-${i}`;
          return (
            <li className={styles.listItem} key={keyValue}>
              <Button
                type="button"
                role="tab"
                aria-controls={`${activeTabId}`}
                aria-selected={activeTabId === tab.id}
                tabIndex={activeIndex === i ? 0 : -1}
                className={cn(
                  styles.tab,
                  activeTabId === tab.id && styles.activeTab,
                )}
                onClick={() => handleTabClick(i)}
                ref={(el) => {
                  if (el) tabRefs.current[i] = el;
                }}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                {tab.label}
              </Button>
            </li>
          );
        })}
      </ul>
      <ReserveForm id={activeTabId} activeEvent={activeEvent} />
    </>
  );
};

export default ReserveTabs;
