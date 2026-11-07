"use client";

import { useState } from "react";

import { cn } from "@/shared/lib";
import { tabConfigs } from "../lib";

type EventTabsProps = {
  listClass?: string;
  children: React.ReactNode;
};

const styles = {
  list: "flex justify-between",
  label:
    "block text-sm font-semibold leading-main tracking-none md:tracking-base text-white",
  tab: "text-sm leading-main md:leading-middle md:tracking-base text-white-70 md:text-base lg:text-xl",
  tabActive: "text-white underline",
  description:
    "mt-[15px] md:mt-[20px] text-sm md:text-base leading-main md:leading-middle md:tracking-base text-white-70 whitespace-pre-line",
  content:
    "w-full mt-[10px] p-[10px] md:p-[20px] md:pr-0 rounded-[10px] md:rounded-base bg-main-bg backdrop-blur-[24px]",
  contentLabel: "md:text-2xl",
};

const EventTabs = ({ children, listClass }: EventTabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <ul className={cn(styles.list, listClass)}>
        {tabConfigs.map((tab, i) => (
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
        {tabConfigs.map((tab, i) => (
          <li key={tab.id}>
            {activeIndex === i && (
              <div className={styles.content}>
                <span className={cn(styles.label, styles.contentLabel)}>
                  {tab.label}
                </span>
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
