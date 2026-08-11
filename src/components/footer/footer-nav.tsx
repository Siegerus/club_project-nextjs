import Link from "next/link";

import Heading from "../ui/heading/heading";
import { NavItemType } from "@/lib/types";

type FooterNavProps = {
  navItems: NavItemType[];
  headingText: string;
};

const FooterNav = ({ navItems, headingText }: FooterNavProps) => {
  return (
    <ul className="footer__list">
      <Heading
        className="title footer__headline"
        title={headingText}
        level="h3"
      />
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
