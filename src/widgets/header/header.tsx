import { AppRoute } from "@/shared/lib/routes";
import cn from "@/shared/lib/utils";
import LinkButton from "../../shared/ui/button/link-button";
import Hamburger from "../../shared/ui/hamburger/hamburger";
import Logo from "../../shared/ui/logo/logo";
import { headerButtonText } from "./constants";
import NavMenu from "./nav-menu/nav-menu";
import NavMobile from "./nav-menu/nav-mobile";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Logo />
          <NavMenu />
          <LinkButton path={AppRoute.Authorization} className={styles.button}>
            <span className={styles.buttonSpan}>{headerButtonText}</span>
          </LinkButton>
          <Hamburger />
        </div>
        <NavMenu tablet />
        {/* <NavMobile /> */}
      </div>
    </header>
  );
};

const styles = {
  header: "w-[100%] pt-[30px] pb-[10px] md:py-0",
  inner:
    "flex justify-between items-center min-h-[53.3px] p-[14px] md:p-0 md:pt-[40px] 2xl:pt-[20px] rounded-full bg-main-bg md:bg-transparent",
  button: cn(
    "hidden mx-0 md:flex w-[197px] lg:min-w-[250px] xl:min-w-[220px] 2xl:w-[16.4%] 2xl:min-w-[250px] 3xl:min-w-[223px]",
    "md:pt-[18px] md:pb-[20px] md:px-[30px] xl:pt-[21px] xl:pb-[24px] xl:px-[16px] 2xl:pt-[21px] 2xl:pb-[24px] 2xl:px-[16px]",
    "text-white md:text-base lg:text-[22px] xl:text-xl 2xl:text-[22px] 3xl:text-2xl bg-main-bg",
  ),
  buttonSpan: "tracking-tight",
};

export default Header;
