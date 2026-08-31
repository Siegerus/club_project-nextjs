import { contacts } from "@/entities/company";
import { AppRoute, cn } from "@/shared/lib";
import { LinkButton } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Logo } from "@/shared/ui/logo";
import { OuterInfo } from "@/shared/ui/outer-info";
import {
  footerButtonText,
  footerCompanyNavItems,
  footerSystemNavItems,
  footerCompanyTitle,
  footerSystemTitle,
} from "../lib";
import FooterDesciption from "./footer-desciption";
import FooterNav from "./footer-nav";
import FooterSocial from "./footer-social";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <FooterSocial />
          <LinkButton path={AppRoute.Authorization} variant="footer">
            <span>{footerButtonText}</span>
          </LinkButton>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.logoBlock}>
            <Logo width={113} height={22} />
            <OuterInfo
              linkClass={styles.outerInfo.link}
              wrapperClass={styles.outerInfo.wrapper}
              info={contacts.email.info}
              iconPath={contacts.email.iconPath}
              linkHref={contacts.email.linkHref}
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
      </Container>
    </footer>
  );
};

export default Footer;

const styles = {
  footer:
    "pt-[40px] px-0 pb-[30px] md:pt-[0] md:pb-[100px] xl:pt-[87px] xl:px-0 xl:pb-[138px]",
  top: cn(
    "flex items-center justify-between rounded-full bg-main-bg w-full backdrop-blur-lg",
    "p-[10px] md:py-[23px] md:px-[30px] xl:pt-[16px] xl:pt-[16px] xl:pt-[16px] xl:pb-[22px] 2xl:pt-[20px] 2xl:px-[30px] 2xl:pb-[26px]",
  ),
  wrapper: cn(
    "grid grid-cols-[150px_137px] md:grid-cols-[270px_196px] lg:grid-cols-[260px_267px_196px]",
    "grid-rows-[minmax(21px,_auto)_minmax(201px,_auto)] md:grid-rows-[minmax(50px,_auto)_minmax(231px,_auto)] lg:grid-rows-[231px]",
    "gap-y-[30px] gap-x-[17px] md:gap-y-[22px] md:gap-x-[69px] lg:gap-x-[110px] xl:gap-x-[170px] 2xl:gap-x-[265px] mt-[15px] md:mt-[30px] lg:mt-[35px]",
  ),
  logoBlock:
    "flex lg:block justify-between items-start md:items-center col-start-1 col-end-3 lg:col-end-1",
  outerInfo: {
    wrapper:
      "justify-start md:justify-between w-[138px] md:w-[185px] min-h-[24px] lg:mt-[35px]",
    link: "text-sm md:text-xl ml-[8px] md:ml-0",
  },
};
