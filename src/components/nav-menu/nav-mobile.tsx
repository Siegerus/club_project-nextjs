import Image from "next/image";

import { confidantial } from "@/lib/constants";
import Logo from "@/components/logo/logo";
import LinkButton from "@/components/ui/button/link-button";
import OuterInfo from "@/components/outer-info/outer-info";
import NavSocial from "./nav-social";
import Hamburger from "@/components/ui/hamburger/hamburger";
import { navItems, authButtonText } from "./constants";

const itemClass =
  "flex items-center w-full py-[10px] pr-[10px] pl[0] justify-between text-white-70";

const NavMobile = () => {
  return (
    <div className="z-20 fixed md:hidden top-0 left-0 w-full h-screen mt-0 pt-[30px] px-[20px] pb-0 bg-nav-gradient overflow-y-scroll header__nav header__nav_m-visible">
      <div className="flex justify-between items-center p-[14px] rounded-full bg-main-bg header__wrapper header__wrapper_m-visible">
        <Logo isMobile />
        <Hamburger />
      </div>
      <nav className="min-h-[650px]" aria-label="Основное меню">
        <ul className="flex flex-col items-start justify-between w-full mt-[10px] p-[10px] rounded-[20px] bg-main-bg backdrop-sepia-[24px] header__list">
          {/* <li className="flex items-center w-full py-[10px] justify-between header__list-item header__list-item_li-m">
            <div className="header__accountwrap-m">
              <div className="header__icon">
                <Image
                  src="/icons/account.svg"
                  alt="Аватар"
                  width={30}
                  height={30}
                />
              </div>
              <div className="header__account">Аккаунт</div>
            </div>
            <div className="header__arrow-m">
              <span></span>
              <span></span>
            </div>
          </li> */}
          {navItems.map((item) => (
            <NavMobileItem
              key={item.text}
              text={item.text}
              path={item.path}
              itemClass={itemClass}
            />
          ))}
        </ul>
        <div className="flex flex-col items-start justify-between w-full min-h-[82px] mt-[10px] p-[10px] rounded-[20px] bg-main-bg">
          <OuterInfo isPhone />
          <OuterInfo isPhone={false} />
        </div>
        <NavSocial />
        <div className="max-w-[204px] mt-[10px] mx-auto mb-0 text-sm text-center text-white-70 leading-[130%]">
          {confidantial}
        </div>
        <LinkButton
          path="/pages/autorization.html"
          isExternal
          className="w-full max-w-[320px] mt-[10px] py-[14px] px-0 text-sm"
          variant="no-bg"
        >
          <span>{authButtonText}</span>
        </LinkButton>
      </nav>
    </div>
  );
};

export default NavMobile;

type NavMobileItemProps = {
  path: string;
  text: string;
  itemClass: string;
};

const NavMobileItem = ({ path, text, itemClass }: NavMobileItemProps) => {
  return (
    <li className={itemClass}>
      <a
        href={path}
        className="flex items-center justify-between w-full leading-[130%] tracking-[-.02em]"
      >
        {text}
      </a>
      <div className="flex items-center justify-center w-[20px] h-[20px] header__arrow-m">
        <Image src="/icons/nav-arrow.svg" alt="Стрелка" width={7} height={13} />
      </div>
    </li>
  );
};
