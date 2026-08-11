import Link from "next/link";
import Logo from "../logo/logo";

import OuterInfo from "../outer-info/outer-info";
import FooterSocial from "./footer-social";
import LinkButton from "../ui/button/link-button";
import FooterNav from "./footer-nav";
import {
  goalsDescription,
  footerButtonText,
  footerCompanyNavItems,
  footerSystemNavItems,
  footerCompanyTitle,
  footerSystemTitle,
} from "./constants";
import cn from "@/lib/utils";

const Footer = () => {
  const footerTopClass = cn(
    "flex items-center justify-between rounded-full bg-main-bg w-full",
    "p-[10px] md:py-[23px] md:px-[30px] xl:pt-[16px] xl:pt-[16px] xl:pt-[16px] xl:pb-[22px] 2xl:pt-[20px] 2xl:px-[30px] 2xl:pb-[26px]",
  );

  const footerWrapperClass = cn(
    "grid grid-cols-[150px_137px] md:grid-cols-[270px_196px] grid-rows-[minmax(21px,_auto)_minmax(201px,_auto)] md:grid-rows-[minmax(50px,_auto)_minmax(231px,_auto)]",
    "gap-y-[30px] gap-x-[17px] md:gap-y-[69px] md:gap-x-[22px] mt-[15px] md:mt-[30px]",
  );

  return (
    <footer className="pt-[40px] px-0 pb-[30px] lg:pt-[0] lg:pb-[100px] xl:pt-[87px] xl:px-0 pb-[138px]">
      <div className="container">
        <div className={footerTopClass}>
          <FooterSocial />
          <LinkButton path="/pages/autorization.html" variant="footer">
            <span>{footerButtonText}</span>
          </LinkButton>
        </div>
        <div className={footerWrapperClass}>
          <div className="flex justify-between items-start md:items-center col-start-1 col-end-3 footer__logwrap">
            <Logo width={113} height={22} />
            <OuterInfo
              isPhone={false}
              linkClass="text-sm md:text-xl ml-[8px] md:ml-0"
              wrapperClass="w-[138px] md:w-[185px] min-h-[24px] justify-start md:justify-between"
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
        <div className="footer__bottom">
          <div className="footer__descr">
            {goalsDescription}
            <br className="footer__br-m-visible" />
            Мы против ЛГБТ.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
