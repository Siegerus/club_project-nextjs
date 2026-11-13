"use client";

import { useState } from "react";

import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { reserveTabsConfig } from "../lib";
import ReserveForm from "./reserve-form";

// type ReserveTabsProps = {}

const styles = {
  tabList:
    "flex items-center justify-center w-full mt-[30px] bg-main-bg rounded-full",
  listItem: "z-0 min-w-[33%] ",
  tab: cn(
    "min-w-full px-[20px] md:px-[61px] xl:px-[62px] 2xl:px-[62px] py-[20px] lg:py-[28px] xl:py-[28px]",
    "bg-transparent text-base text-white leading-main tracking-base duration-[70ms]",
  ),
  activeTab: "bg-white text-black",
};

const ReserveTabs = (/* props: ReserveTabsProps */) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeTabId = reserveTabsConfig[activeIndex].id;

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <ul className={styles.tabList}>
        {reserveTabsConfig.map((tab, i) => {
          const keyValue = `${tab.id}-${i}`;
          return (
            <li className={styles.listItem} key={keyValue}>
              <Button
                className={cn(
                  styles.tab,
                  activeTabId === tab.id && styles.activeTab,
                )}
                onClick={() => handleTabClick(i)}
              >
                {tab.label}
              </Button>
            </li>
          );
        })}
      </ul>
      <ReserveForm id={activeTabId} />
    </>
  );
};

export default ReserveTabs;
