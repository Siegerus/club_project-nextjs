import Image from "next/image";
import Link from "next/link";
import Logo from "../logo/logo";

import OuterInfo from "../outer-info/outer-info";
import FooterSocial from "./footer-social";
import { goalsDescription, footerButtonText } from "./constants";
import cn from "@/lib/utils";

const Footer = () => {
  const footerTopClass = cn(
    "flex items-center justify-between rounded-full bg-main-bg w-full",
    "p-[10px] md:py-[23px] md:px-[30px] xl:pt-[16px] xl:pt-[16px] xl:pt-[16px] xl:pb-[22px] 2xl:pt-[20px] 2xl:px-[30px] 2xl:pb-[26px]",
  );

  return (
    <footer className="pt-[40px] px-0 pb-[30px] lg:pt-[0] lg:pb-[100px] xl:pt-[87px] xl:px-0 pb-[138px] footer">
      <div className="container">
        <div className={footerTopClass}>
          <FooterSocial />
          <a
            href="/pages/autorization.html"
            className="button button_footer footer__btn"
          >
            {footerButtonText}
          </a>
        </div>
        <div className="footer__wrapper">
          <div className="footer__logwrap">
            <Logo />
            <div className="footer__emailwrap">
              <OuterInfo isPhone={false} />
            </div>
          </div>
          <div>
            <ul className="footer__list">
              <h3 className="title footer__headline">Компания</h3>
              <li>
                <Link href="/index.html">Главная</Link>
              </li>
              <li>
                <Link href="/pages/autorization.html">Вступить в клуб</Link>
              </li>
              <li>
                <Link href="/pages/events.html">Афиша (наши мероприятия)</Link>
              </li>
              <li>
                <Link href="/pages/bangles.html">Браслеты</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footer__list footer__list_ml-">
              <h3 className="title footer__headline">Система</h3>
              <li>
                <Link href="/pages/rules.html">Правила</Link>
              </li>
              <li>
                <Link href="/pages/VIP.html">VIP</Link>
              </li>
              <li>
                <Link href="/pages/loyalty.html">Система лояльности</Link>
              </li>
              <li>
                <Link href="/pages/questions.html">FAQ</Link>
              </li>
            </ul>
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
