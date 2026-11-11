"use client";

import { KeyboardEvent, useCallback, useRef, RefObject, useState } from "react";

import { cn, useTabKeys } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { authTabItems } from "../lib";
import AuthForms from "./auth-forms";

type AuthTabListsProps = {
  children?: React.ReactElement;
};

const styles = {
  tabList: "flex items-center justify-center",
  listItem:
    "z-0 [&:nth-child(n+2)]:-ml-[14px] md:[&:nth-child(n+2)]:-ml-[32px] ",
  tabButton: cn(
    "md:min-w-[185px] px-[22px] md:px-[61px] xl:px-[62px] 2xl:px-[62px] py-[10px] lg:py-[28px] xl:py-[28px]",
    "bg-main-bg text-white md:leading-main tracking-base",
  ),
};

const AuthTabs = ({ children }: AuthTabListsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const handler = useTabKeys(tabRefs, setActiveIndex);

  const activeTabId = authTabItems[activeIndex].id;

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
      handler(e, index);
    },
    [handler],
  );

  return (
    <div>
      <ul
        className={styles.tabList}
        role="tablist"
        aria-label="Форма авторизации"
      >
        {authTabItems.map((tab, i) => {
          const keyValue = `${tab.id}-${i}`;
          return (
            <li
              key={keyValue}
              className={cn(styles.listItem, activeIndex === i && "z-10")}
            >
              <Button
                ref={(el) => {
                  if (el) tabRefs.current[i] = el;
                }}
                role="tab"
                aria-controls="auth-forms"
                className={cn(
                  styles.tabButton,
                  activeIndex === i && "bg-white text-black",
                )}
                onClick={() => handleTabClick(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                {tab.label}
              </Button>
            </li>
          );
        })}
      </ul>
      {children}
      <AuthForms activeTabId={activeTabId} />
    </div>
  );
};

export default AuthTabs;
