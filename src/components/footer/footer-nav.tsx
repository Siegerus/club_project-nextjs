import Link from "next/link";

import { NavItemType } from "@/lib/types";

type FooterNavProps = {
  navItems: NavItemType[];
};

const FooterNav = ({ navItems }: FooterNavProps) => {
  return (
    <ul className="footer__list">
      <h3 className="title footer__headline">Компания</h3>
      {navItems.map((item) => (
        <FooterNavItem key={item.text} {...item} />
      ))}
    </ul>
  );
};

export default FooterNav;

type FooterNavItemProps = {
  text: string;
  path: string;
};

const FooterNavItem = ({ text, path }: FooterNavItemProps) => {
  return (
    <li>
      <Link href={path}>{text}</Link>
    </li>
  );
};
