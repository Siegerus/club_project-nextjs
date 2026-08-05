import Image from "next/image";
import Link from "next/link";

import Logo from "../logo/logo";
import NavMobile from "../ui/nav/nav-mobile";
import NavMenu from "../ui/nav/nav-menu";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center py-5">
          <Logo />
          <NavMenu />
          <Link href="/pages/autorization.html" className="header__enter">
            Регистрация/Вход
          </Link>
          <div className="header__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
