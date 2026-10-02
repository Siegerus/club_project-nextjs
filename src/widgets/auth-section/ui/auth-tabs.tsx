"use client";

import { useCallback, useState } from "react";

import { cn } from "@/shared/lib";
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
  tabButton:
    "md:min-w-[185px] px-[22px] md:px-[61px] xl:px-[62px] 2xl:px-[62px] py-[10px] lg:py-[28px] xl:py-[28px] bg-main-bg text-white md:leading-main tracking-base ",
  formList: "",
};

const AuthTabs = ({ children }: AuthTabListsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div>
      <ul className={styles.tabList}>
        {authTabItems.map((tab, i) => {
          const keyValue = `${tab}-${i}`;
          return (
            <li
              key={keyValue}
              className={cn(styles.listItem, activeIndex === i && "z-10")}
            >
              <Button
                role="tab"
                aria-controls="auth-forms"
                className={cn(
                  styles.tabButton,
                  activeIndex === i && "bg-white text-black",
                )}
                onClick={() => handleTabClick(i)}
              >
                {tab}
              </Button>
            </li>
          );
        })}
      </ul>
      {children}
      <AuthForms index={activeIndex} />
    </div>
  );
};

export default AuthTabs;
