"use client";

import { useState } from "react";

import { cn } from "@/shared/lib";
import { Tab, TabId } from "../lib";

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
    "text-white-70",
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

  const activeTabId: TabId = tabs[activeIndex].id;

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <ul className={cn(styles.list, listClass)}>
        {tabs.map((tab, i) => {
          const keyValue = `${tab.id}-${i}`;
          return (
            <li key={keyValue}>
              <button
                onClick={() => handleTabClick(i)}
                type="button"
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
      <ul>
        {tabs.map((tab, i) => {
          const keyValue = `${tab.id}-${i}`;
          return (
            <li key={keyValue}>
              {activeTabId === tab.id && (
                <div className={styles.content}>
                  <span className={styles.contentLabel}>{tab.label}</span>
                  <p className={styles.description}>{tab.description}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default EventTabs;
