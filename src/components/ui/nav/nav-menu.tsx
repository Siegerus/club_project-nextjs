import Link from "next/link";
import Image from "next/image";

import cn from "@/libs/utils/utils";

const listItemClass =
  "text-white-70 text-[16px] font-medium leading-[24px] hover:text-white transition-colors duration-300";

const NavMenu = () => {
  return (
    <nav className="w-[55.8%] pt-[20px] px-[30px] pb-[23px] rounded-full bg-main-bg header__nav header__nav_m-hidden">
      <ul className="flex items-center justify-between list-none header__list">
        <li>
          <Link href="/index.html">Главная</Link>
        </li>
        <li>
          <Link href="/pages/curent-event.html">Мероприятия</Link>
        </li>
        <li>
          <Link href="/pages/bangles.html">Браслеты</Link>
        </li>
        <li>
          <Link href="/pages/rules.html">Правила</Link>
        </li>
        <li className="header__vip">
          <Link href="/pages/VIP.html">VIP</Link>
        </li>
        <li>
          <Link href="/pages/contacts.html">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
