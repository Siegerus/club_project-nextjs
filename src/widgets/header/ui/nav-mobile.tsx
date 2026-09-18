import { motion } from "framer-motion";
import Image from "next/image";
import { MouseEvent, PropsWithChildren } from "react";

import { confidantial, contacts } from "@/entities/company";
import { AppRoute } from "@/shared/lib";
import { LinkButton } from "@/shared/ui";
import { Logo } from "@/shared/ui";
import { NavItem } from "@/shared/ui";
import { OuterInfo } from "@/shared/ui";
import { navItems, authButtonText, mobileNavArrowPath } from "../lib";
import NavSocial from "./nav-social";

type NavMobileProps = PropsWithChildren<{
  onClick?: (e: MouseEvent) => void;
}>;

const styles = {
  wrapper:
    "z-20 fixed md:hidden top-0 left-0 w-full h-screen mt-0 pt-[30px] px-[20px] pb-0 bg-nav-gradient overflow-y-scroll",
  topBar:
    "flex justify-between items-center max-w-[600px] mx-auto p-[14px] rounded-full bg-main-bg",
  nav: "max-w-[600px] min-h-[650px] mx-auto",
  list: "flex flex-col items-start justify-between w-full mt-[10px] p-[10px] rounded-small bg-main-bg backdrop-sepia-[24px]",
  item: "flex items-center w-full py-[10px] pr-[10px] pl-[0] justify-between text-white-70",
  link: "flex items-center justify-between w-full leading-[130%] tracking-[-.02em]",
  arrow: "flex items-center justify-center w-[20px] h-[20px]",
  icon: "w-[7px] h-[13px] max-w-full max-h-full",
  info: "flex flex-col items-start justify-between w-full min-h-[82px] mt-[10px] p-[10px] rounded-small bg-main-bg",
  confidential:
    "max-w-[204px] mt-[10px] mx-auto mb-0 text-sm text-center text-white-70 leading-[130%]",
  authButton: "w-full max-w-[320px] mt-[10px] py-[14px] px-0 text-sm",
  phoneLink: "ml-[10px]",
  mailLink: "ml-[15px]",
};

const NavMobile = ({ onClick, children }: NavMobileProps) => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.topBar}>
        <Logo />
        {children}
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
                  className={styles.icon}
                  src={mobileNavArrowPath}
                  alt="Стрелка"
                  width={7}
                  height={13}
                />
              </div>
            </NavItem>
          ))}
        </ul>
        <div className={styles.info}>
          <OuterInfo
            linkClass={styles.phoneLink}
            info={contacts.phone.info}
            iconPath={contacts.phone.iconPath}
            linkHref={contacts.phone.linkHref}
            alt="Телефон"
          />
          <OuterInfo
            linkClass={styles.mailLink}
            info={contacts.email.info}
            iconPath={contacts.email.iconPath}
            linkHref={contacts.email.linkHref}
            alt="Email"
          />
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
    </motion.div>
  );
};

export default NavMobile;
