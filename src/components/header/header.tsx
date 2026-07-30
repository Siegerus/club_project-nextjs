import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center py-5">
          <div className="logo header__logo animation__type__logo">
            <Link href="/index.html">
              <picture>
                <source media="(max-width: 767px)" srcSet="/images/logo.svg" />
                <source media="(min-width: 768px)" srcSet="/images/logo.svg" />
                <Image
                  src="/images/logo.svg"
                  alt="Логотип"
                  width={260}
                  height={51}
                />
              </picture>
            </Link>
          </div>
          <nav className="header__nav header__nav_m-hidden">
            <ul className="header__list">
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
          <Link href="/pages/autorization.html" className="header__enter">
            Регистрация/Вход
          </Link>
          <div className="header__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className="header__nav header__nav_m-visible">
          <div className="header__wrapper header__wrapper_m-visible">
            <div className="logo header__logo animation__type__logo">
              <Link href="/index.html">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="/images/logo.svg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="/images/logo.svg"
                  />
                  <Image
                    src="/images/logo.svg"
                    alt="Логотип"
                    width={260}
                    height={51}
                  />
                </picture>
              </Link>
            </div>
            <nav className="header__nav header__nav_m-hidden">
              <ul className="header__list">
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
            <Link href="/pages/autorization.html" className="header__enter">
              Регистрация/Вход
            </Link>
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
                      alt="account"
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
              <li className="header__list-item">
                <Link href="/index.html">Главная</Link>
                <div className="header__arrow-m">
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li className="header__list-item">
                <a href="/pages/curent-event.html">Мероприятия</a>
                <div className="header__arrow-m">
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li className="header__list-item">
                <Link href="/pages/bangles.html">Браслеты</Link>
                <div className="header__arrow-m">
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li className="header__list-item">
                <Link href="/pages/rules.html">Правила</Link>
                <div className="header__arrow-m">
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li className=" header__list-item header__vip">
                <Link href="/pages/VIP.html">VIP</Link>
                <div className="header__arrow-m">
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li className="header__list-item">
                <a href="/pages/contacts.html">Контакты</a>
                <div className="header__arrow-m">
                  <span></span>
                  <span></span>
                </div>
              </li>
            </ul>
            <div className="header__phonewrap-m">
              <div>
                <div className="header__phone">
                  <Image
                    src="/icons/phone.svg"
                    alt="Телефон"
                    width={20}
                    height={82}
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
                    alt="Почта"
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
                  src="/icons/vk.svg"
                  alt="Вконтакте"
                  width={48}
                  height={48}
                />
              </a>
              <a href="https://wa.me/+79000000000" className="header__links">
                <Image
                  src="/icons/watsapp-white.svg"
                  alt="Ватсап"
                  width={48}
                  height={48}
                />
              </a>
              <a href="https://vk.com/" className="header__links">
                <Image
                  src="/icons/instagram.svg"
                  alt="Инстарам"
                  width={48}
                  height={48}
                />
              </a>
              <a
                href="tg://resolve?domain=имя_пользователя"
                className="header__links"
              >
                <Image
                  src="/icons/telegram-white.svg"
                  alt="Телеграм"
                  width={48}
                  height={48}
                />
              </a>
            </div>
            <div className="header__confidantial-m">
              © 2026 ООО «Притяжение». Все права защищены.
            </div>
            <Link
              href="/pages/autorization.html"
              className="button button_nobg header__btn-m"
            >
              Войти или Зарегистрироваться
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
