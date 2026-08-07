import Link from "next/link";

import Logo from "../logo/logo";
import NavMobile from "../nav-menu/nav-mobile";
import NavMenu from "../nav-menu/nav-menu";
import LinkButton from "../ui/button/link-button";
import { headerButtonText } from "./constants";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center py-5">
          <Logo />
          <NavMenu />
          <LinkButton
            path="/pages/autorization.html"
            className="hidden md:flex w-[197px] lg:min-w-[250px] xl:min-w-[220px] 2xl:min-w-[223px] md:pt-[18px] md:pb-[20px] md:px-[30px] bg-main-bg text-white md:text-base lg:text-[21px] xl:text-xl 2xl:text-2xl"
          >
            <span>{headerButtonText}</span>
          </LinkButton>
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
