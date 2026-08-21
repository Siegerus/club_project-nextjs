import Logo from "../../shared/ui/logo/logo";
import NavMobile from "./nav-menu/nav-mobile";
import Hamburger from "../../shared/ui/hamburger/hamburger";
import NavMenu from "./nav-menu/nav-menu";
import LinkButton from "../../shared/ui/button/link-button";
import { headerButtonText } from "./constants";
import { AppRoute } from "@/shared/lib/routes";
import cn from "@/shared/lib/utils";

const Header = () => {
  const buttonClass = cn(
    "hidden mx-0 md:flex w-[197px] lg:min-w-[250px] xl:min-w-[220px] 2xl:w-[16.4%] 2xl:min-w-[250px] 3xl:min-w-[223px]",
    "md:pt-[18px] md:pb-[20px] md:px-[30px] xl:pt-[21px] xl:pb-[24px] xl:px-[16px] 2xl:pt-[21px] 2xl:pb-[24px] 2xl:px-[16px]",
    "text-white md:text-base lg:text-[22px] xl:text-xl 2xl:text-[22px] 3xl:text-2xl bg-main-bg ",
  );

  return (
    <header className="w-[100%] pt-[30px] pb-[10px] md:py-0">
      <div className="container">
        <div className="flex justify-between items-center min-h-[53.3px] p-[14px] md:p-0 md:pt-[40px] 2xl:pt-[20px] rounded-full bg-main-bg md:bg-transparent">
          <Logo />
          <NavMenu />
          <LinkButton path={AppRoute.Authorization} className={buttonClass}>
            <span className="tracking-tight">{headerButtonText}</span>
          </LinkButton>
          <Hamburger />
        </div>
        <NavMenu tablet />
        {/* <NavMobile /> */}
      </div>
    </header>
  );
};

export default Header;
