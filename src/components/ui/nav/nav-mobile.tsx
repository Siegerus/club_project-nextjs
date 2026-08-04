import Image from "next/image";
import cn from "@/lib/utils/utils";

import Logo from "@/components/logo/logo";
import { navItems } from "./constants";

const itemClass =
  "weight-medium text-base lg:text-xl xl:text-lg 2xl:text-xl text-white-70";

const NavMobile = () => {
  return (
    <nav className="header__nav header__nav_m-visible">
      <div className="header__wrapper header__wrapper_m-visible">
        <div className="header__hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="header__navWrapper">
        <ul className="header__list">
          <li className=" header__list-item header__list-item_li-m">
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
          </li>
          {navItems.map((item) => (
            <NavMobileItem
              key={item.text}
              text={item.text}
              path={item.path}
              itemClass={cn(
                itemClass,
                "header__list-item header__list-item_li-m",
              )}
            />
          ))}
        </ul>
        <div className="header__phonewrap-m">
          <div>
            <div className="header__phone">
              <Image
                src="/icons/phone.svg"
                alt="Телефон"
                width={20}
                height={21}
              />
            </div>
            <a href="tel:+70000000000" className="header__number">
              +7 (000) 000-00-00
            </a>
          </div>
          <div>
            <div className="header__letter">
              <Image
                src="/icons/gmail.svg"
                alt="letter"
                width={20}
                height={21}
              />
            </div>
            <div className="header__email">
              <a href="mailto:info@gmail.com<"></a>info@gmail.com
            </div>
          </div>
        </div>
        <div className="header__social-m">
          <a href="https://instagram.ru/" className="header__links">
            <Image
              src="/icons/instagram.svg"
              alt="Инстаграм"
              width={20}
              height={20}
            />
          </a>
          <a href="https://wa.me/+79000000000" className="header__links">
            <Image
              src="/icons/watsapp-white.svg"
              alt="Ватсап"
              width={20}
              height={20}
            />
          </a>
          <a href="https://vk.com/" className="header__links">
            <Image src="/icons/vk.svg" alt="Вконтакте" width={24} height={24} />
          </a>
          <a
            href="tg://resolve?domain=имя_пользователя"
            className="header__links"
          >
            <Image
              src="/icons/telegram-white.svg"
              alt="Телеграм"
              width={20}
              height={18}
            />
          </a>
        </div>
        <div className="header__confidantial-m">
          © 2024 ООО «Притяжение». Все права защищены.
        </div>

        <a
          href="/pages/autorization.html"
          className="button button_nobg header__btn-m"
        >
          Войти или Зарегистрироваться
        </a>
      </div>
    </nav>
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
      <a href={path}>{text}</a>
      <div className="header__arrow-m">
        <span></span>
        <span></span>
      </div>
    </li>
  );
};
