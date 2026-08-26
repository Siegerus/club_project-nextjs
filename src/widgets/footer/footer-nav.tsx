import Link from "next/link";

import { NavItemType } from "@/shared/lib/types";
import Heading from "../../shared/ui/heading/heading";

type FooterNavProps = {
  navItems: NavItemType[];
  headingText: string;
};

const FooterNav = ({ navItems, headingText }: FooterNavProps) => {
  return (
    <ul className={styles.wrapper}>
      <Heading className={styles.heading} title={headingText} level="h3" />
      {navItems.map((item) => (
        <FooterNavItem key={item.text} {...item} />
      ))}
    </ul>
  );
};

type FooterNavItemProps = {
  text: string;
  path: string;
};

const FooterNavItem = ({ text, path }: FooterNavItemProps) => {
  return (
    <li className={styles.item}>
      <Link href={path}>{text}</Link>
    </li>
  );
};

export default FooterNav;

const styles = {
  wrapper: "list-none footer__list",
  heading: "text-2xl md:text-4xl lg:text-[2.125rem] text-white-70",
  item: "mt-[20px] text-sm md:text-xl lg:text-lg 2xl:text-lg 3xl:text-xl text-white-70 font-semibold leading-[130%]",
};
