"use client";

import { useState } from "react";

import { cn } from "@/shared/lib";
import { tabs } from "../lib";

type EventTabsProps = {
  listClass?: string;
  children: React.ReactNode;
};

const styles = {
  list: "flex justify-between",
  label:
    "block text-sm font-semibold leading-main tracking-none md:tracking-base text-white",
  tab: "text-sm leading-main md:tracking-base text-white-70 md:text-base lg:text-xl",
  tabActive:
    "text-sm leading-main md:tracking-base text-white underline md:text-base lg:text-xl",
  description:
    "mt-[15px] text-sm leading-main text-white-70 whitespace-pre-line",
  content:
    "w-full mt-[10px] p-[10px] rounded-[10px] bg-main-bg backdrop-blur-[24px]",
};

const EventTabs = ({ children, listClass }: EventTabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <ul className={cn(styles.list, listClass)}>
        {tabs.map((tab, i) => (
          <li key={tab.id}>
            <button
              onClick={() => handleTabClick(i)}
              type="button"
              className={cn(styles.tab, activeIndex === i && styles.tabActive)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      {children}
      <ul>
        {tabs.map((tab, i) => (
          <li key={tab.id}>
            {activeIndex === i && (
              <div className={styles.content}>
                <span className={styles.label}>{tab.label}</span>
                <p className={styles.description}>{tab.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventTabs;
