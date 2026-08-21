import Logo from "../../shared/ui/logo/logo";
import OuterInfo from "../outer-info/outer-info";
import FooterSocial from "./footer-social";
import FooterDesciption from "./footer-desciption";
import LinkButton from "../../shared/ui/button/link-button";
import FooterNav from "./footer-nav";
import {
  footerButtonText,
  footerCompanyNavItems,
  footerSystemNavItems,
  footerCompanyTitle,
  footerSystemTitle,
} from "./constants";
import { AppRoute } from "@/shared/lib/routes";
import cn from "@/shared/lib/utils";

const Footer = () => {
  const footerTopClass = cn(
    "flex items-center justify-between rounded-full bg-main-bg w-full backdrop-blur-lg",
    "p-[10px] md:py-[23px] md:px-[30px] xl:pt-[16px] xl:pt-[16px] xl:pt-[16px] xl:pb-[22px] 2xl:pt-[20px] 2xl:px-[30px] 2xl:pb-[26px]",
  );

  const footerWrapperClass = cn(
    "grid grid-cols-[150px_137px] md:grid-cols-[270px_196px] lg:grid-cols-[260px_267px_196px]",
    "grid-rows-[minmax(21px,_auto)_minmax(201px,_auto)] md:grid-rows-[minmax(50px,_auto)_minmax(231px,_auto)] lg:grid-rows-[231px]",
    "gap-y-[30px] gap-x-[17px] md:gap-y-[22px] md:gap-x-[69px] lg:gap-x-[110px] xl:gap-x-[170px] 2xl:gap-x-[265px] mt-[15px] md:mt-[30px] lg:mt-[35px]",
  );

  return (
    <footer className="pt-[40px] px-0 pb-[30px] md:pt-[0] md:pb-[100px] xl:pt-[87px] xl:px-0 xl:pb-[138px]">
      <div className="container">
        <div className={footerTopClass}>
          <FooterSocial />
          <LinkButton path={AppRoute.Authorization} variant="footer">
            <span>{footerButtonText}</span>
          </LinkButton>
        </div>
        <div className={footerWrapperClass}>
          <div className="flex lg:block justify-between items-start md:items-center col-start-1 col-end-3 lg:col-end-1">
            <Logo width={113} height={22} />
            <OuterInfo
              isPhone={false}
              linkClass="text-sm md:text-xl ml-[8px] md:ml-0"
              wrapperClass="justify-start md:justify-between w-[138px] md:w-[185px] min-h-[24px] lg:mt-[35px]"
              width={14}
              height={14}
            />
          </div>
          <div>
            <FooterNav
              navItems={footerCompanyNavItems}
              headingText={footerCompanyTitle}
            />
          </div>
          <div>
            <FooterNav
              navItems={footerSystemNavItems}
              headingText={footerSystemTitle}
            />
          </div>
        </div>
        <FooterDesciption />
      </div>
    </footer>
  );
};

export default Footer;
