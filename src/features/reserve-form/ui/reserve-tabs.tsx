"use client";

import { useState } from "react";

import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { reserveTabsConfig } from "../model";
import ReserveForm from "./reserve-form";

// type ReserveTabsProps = {}

const styles = {
  tabList: "flex items-center justify-center",
  listItem:
    "z-0 [&:nth-child(n+2)]:-ml-[14px] md:[&:nth-child(n+2)]:-ml-[32px] ",
  tab: cn(
    "md:min-w-[185px] px-[22px] md:px-[61px] xl:px-[62px] 2xl:px-[62px] py-[10px] lg:py-[28px] xl:py-[28px]",
    "bg-main-bg text-white md:leading-main tracking-base",
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
