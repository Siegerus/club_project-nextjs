import Image from "next/image";
import { MouseEvent } from "react";

import { confidantial } from "@/shared/lib";
import { AppRoute } from "@/shared/lib/routes";
import { LinkButton } from "@/shared/ui/button";
import { Hamburger } from "@/shared/ui/hamburger";
import { Logo } from "@/shared/ui/logo";
import { NavItem } from "@/shared/ui/nav-item";
import { OuterInfo } from "@/shared/ui/outer-info";
import { navItems, authButtonText } from "../constants/";
import NavSocial from "./nav-social";

type NavMobileProps = {
  onClick?: (e: MouseEvent) => void;
  isVisible?: boolean;
};

const NavMobile = ({ onClick, isVisible }: NavMobileProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <Logo />
        <Hamburger isActive={isVisible} onClick={onClick} />
      </div>
      <nav className={styles.nav} aria-label="Основное меню">
        <ul className={styles.list}>
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              text={item.text}
              path={item.path}
              className={styles.item}
              linkClassName={styles.link}
              onClick={onClick}
            >
              <div className={styles.arrow}>
                <Image
                  src="/icons/nav-arrow.svg"
                  alt="Стрелка"
                  width={7}
                  height={13}
                />
              </div>
            </NavItem>
          ))}
        </ul>
        <div className={styles.info}>
          <OuterInfo isPhone />
          <OuterInfo isPhone={false} />
        </div>
        <NavSocial />
        <div className={styles.confidential}>{confidantial}</div>
        <LinkButton
          path={AppRoute.Authorization}
          className={styles.authButton}
          variant="no-bg"
        >
          <span>{authButtonText}</span>
        </LinkButton>
      </nav>
    </div>
  );
};

export default NavMobile;

const styles = {
  wrapper:
    "z-20 fixed md:hidden top-0 left-0 w-full h-screen mt-0 pt-[30px] px-[20px] pb-0 bg-nav-gradient overflow-y-scroll header__nav header__nav_m-visible",
  topBar:
    "flex justify-between items-center max-w-[600px] mx-auto p-[14px] rounded-full bg-main-bg header__wrapper header__wrapper_m-visible",
  nav: "max-w-[600px] min-h-[650px] mx-auto",
  list: "flex flex-col items-start justify-between w-full mt-[10px] p-[10px] rounded-[20px] bg-main-bg backdrop-sepia-[24px] header__list",
  item: "flex items-center w-full py-[10px] pr-[10px] pl-[0] justify-between text-white-70",
  link: "flex items-center justify-between w-full leading-[130%] tracking-[-.02em]",
  arrow: "flex items-center justify-center w-[20px] h-[20px] header__arrow-m",
  info: "flex flex-col items-start justify-between w-full min-h-[82px] mt-[10px] p-[10px] rounded-[20px] bg-main-bg",
  confidential:
    "max-w-[204px] mt-[10px] mx-auto mb-0 text-sm text-center text-white-70 leading-[130%]",
  authButton: "w-full max-w-[320px] mt-[10px] py-[14px] px-0 text-sm",
};
