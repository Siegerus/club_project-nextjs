"use client";
import { AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";

import { cn } from "@/shared/lib";
import { Tab, TabId } from "../lib";
import EventTabsContent from "./event-tabs-content";

type EventTabsProps = {
  tabs: Tab[];
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
  const tabRefs = useRef<HTMLButtonElement[] | null>(null);

  const activeTabId: TabId = tabs[activeIndex].id;

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      let nextIndex = index;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          nextIndex = Math.min(index + 1, tabs.length - 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          nextIndex = Math.max(index - 1, 0);
          break;
        case "Home":
          e.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          e.preventDefault();
          nextIndex = tabs.length - 1;
          break;
        default:
          return;
      }

      setActiveIndex(nextIndex);
      if (tabRefs.current?.length) tabRefs.current[nextIndex]?.focus();
    },
    [tabs.length],
  );

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
                  if (el && tabRefs.current) tabRefs.current[i] = el;
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
      <AnimatePresence>
        <EventTabsContent tabs={tabs} activeTab={activeTabId} />
      </AnimatePresence>
    </>
  );
};

export default EventTabs;
