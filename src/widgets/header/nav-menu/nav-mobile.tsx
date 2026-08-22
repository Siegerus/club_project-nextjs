import Image from "next/image";
import Link from "next/link";

import { confidantial } from "@/shared/lib/constants";
import Logo from "@/shared/ui/logo/logo";
import LinkButton from "@/shared/ui/button/link-button";
import OuterInfo from "@/widgets/outer-info/outer-info";
import NavSocial from "./nav-social";
import Hamburger from "@/shared/ui/hamburger/hamburger";
import { navItems, authButtonText } from "./constants";
import { AppRoute } from "@/shared/lib/routes";

const NavMobile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <Logo />
        <Hamburger />
      </div>
      <nav className={styles.nav} aria-label="Основное меню">
        <ul className={styles.list}>
          {navItems.map((item) => (
            <NavMobileItem
              key={item.text}
              text={item.text}
              path={item.path}
              className={styles.item}
            />
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

type NavMobileItemProps = {
  path: string;
  text: string;
  className: string;
};

const NavMobileItem = ({ path, text, className }: NavMobileItemProps) => {
  return (
    <li className={className}>
      <Link href={path} className={styles.link}>
        {text}
      </Link>
      <div className={styles.arrow}>
        <Image src="/icons/nav-arrow.svg" alt="Стрелка" width={7} height={13} />
      </div>
    </li>
  );
};

export default NavMobile;

const styles = {
  wrapper:
    "z-20 fixed md:hidden top-0 left-0 w-full h-screen mt-0 pt-[30px] px-[20px] pb-0 bg-nav-gradient overflow-y-scroll header__nav header__nav_m-visible",
  topBar:
    "flex justify-between items-center p-[14px] rounded-full bg-main-bg header__wrapper header__wrapper_m-visible",
  nav: "min-h-[650px]",
  list: "flex flex-col items-start justify-between w-full mt-[10px] p-[10px] rounded-[20px] bg-main-bg backdrop-sepia-[24px] header__list",
  item: "flex items-center w-full py-[10px] pr-[10px] pl-[0] justify-between text-white-70",
  link: "flex items-center justify-between w-full leading-[130%] tracking-[-.02em]",
  arrow: "flex items-center justify-center w-[20px] h-[20px] header__arrow-m",
  info: "flex flex-col items-start justify-between w-full min-h-[82px] mt-[10px] p-[10px] rounded-[20px] bg-main-bg",
  confidential:
    "max-w-[204px] mt-[10px] mx-auto mb-0 text-sm text-center text-white-70 leading-[130%]",
  authButton: "w-full max-w-[320px] mt-[10px] py-[14px] px-0 text-sm",
};
