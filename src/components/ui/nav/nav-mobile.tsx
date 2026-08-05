import Image from "next/image";
import cn from "@/lib/utils";

import Logo from "@/components/logo/logo";
import OuterInfo from "@/components/outer-info/outer-info";
import NavSocial from "./nav-social";
import { navItems } from "./constants";

const itemClass =
  "flex items-center w-full py-[10px] pr-[10px] pl[0] justify-between text-white-70";

const NavMobile = () => {
  return (
    <div className="z-20 fixed md:hidden top-0 left-0 w-full h-screen mt-0 pt-[30px] px-[20px] pb-0 bg-nav-gradient overflow-y-scroll header__nav header__nav_m-visible">
      <div className="flex justify-between items-center p-[14px] rounded-[100px] bg-main-bg header__wrapper header__wrapper_m-visible">
        <Logo isMobile />
        <div className="header__hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
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
        <div className="header__confidantial-m">
          © 2024 ООО «Притяжение». Все права защищены.
        </div>

        <a
          href="/pages/autorization.html"
          className="button button_nobg header__btn-m"
        >
          Войти или Зарегистрироваться
        </a>
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
