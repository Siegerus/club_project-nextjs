import Link from "next/link";

import Heading from "../ui/heading/heading";
import { NavItemType } from "@/lib/types";

type FooterNavProps = {
  navItems: NavItemType[];
  headingText: string;
};

const FooterNav = ({ navItems, headingText }: FooterNavProps) => {
  return (
    <ul className="list-none footer__list">
      <Heading
        className="text-2xl md:text-4xl lg:text-[2.125rem] text-white-70"
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
    <li className="mt-[20px] text-sm md:text-xl lg:text-lg 2xl:text-lg 3xl:text-xl text-white-70 font-semibold leading-[130%]">
      <Link href={path}>{text}</Link>
    </li>
  );
};
