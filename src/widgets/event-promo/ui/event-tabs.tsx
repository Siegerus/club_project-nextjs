"use client";
import { AnimatePresence } from "framer-motion";
import { useState, useRef, KeyboardEvent } from "react";

import type { EventTab, TabId } from "@/entities/event";
import { cn, useTabKeys } from "@/shared/lib";
import EventTabsContent from "./event-tabs-content";

type EventTabsProps = {
  tabs: EventTab[];
  listClass?: string;
  children: React.ReactNode;
};

const styles = {
  list: "flex justify-between",
  tab: cn(
    "text-sm md:text-base lg:text-xl",
    "leading-main md:leading-middle",
    "md:tracking-base lg:tracking-none",
    "lg:font-semibold",
    "text-white-70 cursor-pointer",
  ),
  tabActive: "text-white underline",
  description: cn(
    "mt-[15px] md:mt-[20px]",
    "text-sm md:text-base lg:text-xl",
    "leading-main md:leading-middle md:tracking-base lg:tracking-none lg:leading-main",
    "text-white-70",
    "whitespace-pre-line",
  ),
  content: cn(
    "w-full",
    "mt-[10px] p-[10px] md:p-[20px] lg:mt-[20px] md:pr-0",
    "rounded-[10px] md:rounded-base",
    "bg-main-bg",
    "backdrop-blur-[24px]",
  ),
  contentLabel: cn(
    "block",
    "text-sm md:text-2xl lg:text-[2em] font-semibold",
    "leading-main lg:leading-[0.8]",
    "tracking-none md:tracking-base",
    "text-white",
  ),
};

const EventTabs = ({ tabs, listClass, children }: EventTabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const handler = useTabKeys(tabRefs, setActiveIndex);

  const activeTabId: TabId = tabs[activeIndex].id;

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    handler(e, index);
  };

  return (
    <>
      <ul
        className={cn(styles.list, listClass)}
        role="tablist"
        aria-label="Информация о событии"
      >
        {tabs.map((tab, i) => {
          const keyValue = `${tab.id}-${i}`;
          return (
            <li key={keyValue}>
              <button
                ref={(el) => {
                  if (el) tabRefs.current[i] = el;
                }}
                onClick={() => handleTabClick(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                type="button"
                role="tab"
                aria-controls="event-tabs"
                aria-selected={activeTabId === tab.id}
                tabIndex={activeIndex === i ? 0 : -1}
                className={cn(
                  styles.tab,
                  activeTabId === tab.id && styles.tabActive,
                )}
              >
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>
      {children}
      <AnimatePresence mode="wait">
        <EventTabsContent
          key={activeTabId}
          tabs={tabs}
          activeTab={activeTabId}
        />
      </AnimatePresence>
    </>
  );
};

export default EventTabs;
