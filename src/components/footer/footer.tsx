import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__social">
            <a
              href="tg://resolve?domain=имя_пользователя"
              className="footer__links"
            >
              <Image src="/img/icons/watsapp.svg" alt="socilal" />
            </a>
            <a href="https://wa.me/+79000000000" className="footer__links">
              <Image src="/img/icons/telegram.svg" alt="socilal" />
            </a>
          </div>
          <a
            href="/pages/autorization.html"
            className="button button_footer footer__btn"
          >
            Зарегистрироваться
          </a>
        </div>
        <div className="footer__wrapper">
          <div className="footer__logwrap">
            <div className="logo footer__logo">
              <Link href="/index.html">
                <Image src="/img/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="footer__emailwrap">
              <div className="footer__letter">
                {" "}
                <Image src="/img/icons/gmail.svg" alt="letter" />
              </div>
              <div className="footer__email">
                <a href="mailto:info@gmail.com">info@gmail.com</a>
              </div>
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
            Целями проведения вышеуказанных мероприятий не являются оказание
            платных интимных услуг, совершение действий сексуального характера,
            осуществление предложения к половому сношению либо сопоставимому
            с ним действию сексуального характера и т.п. <br />{" "}
            <br className="footer__br-m-visible" />
            Мы против ЛГБТ.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
