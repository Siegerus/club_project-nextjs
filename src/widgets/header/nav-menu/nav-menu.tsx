import Link from "next/link";

import { cn } from "@/shared/lib";
import { navItems } from "./constants";

type NavMenuPops = {
  tablet?: boolean;
};

const NavMenu = ({ tablet = false }: NavMenuPops) => {
  return (
    <nav className={cn(styles.nav, tablet && styles.navTablet)}>
      <ul className={styles.list}>
        {navItems.map((item) =>
          item.text === "VIP" ? (
            <NavItem
              key={item.text}
              text={item.text}
              path={item.path}
              className={styles.vipItem}
            />
          ) : (
            <NavItem
              key={item.text}
              text={item.text}
              path={item.path}
              className={styles.item}
            />
          ),
        )}
      </ul>
    </nav>
  );
};

type NavItemProps = {
  path: string;
  text: string;
  className: string;
};

const NavItem = ({ path, text, className }: NavItemProps) => {
  return (
    <li className={className}>
      <Link href={path}>{text}</Link>
    </li>
  );
};

export default NavMenu;
export { NavItem };

const styles = {
  nav: "hidden xl:block mt-4 pt-[24px] px-[30px] pb-[24px] lg:mt-5 xl:mt-0 w-full xl:w-[55.8%] lg:pt-[20px] lg:px-[30px] lg:pb-[23px] rounded-full bg-main-bg backdrop-blur-lg",
  navTablet: "md:block xl:hidden",
  list: "flex items-center justify-between list-none",
  item: "weight-medium text-base leading-[1.3] lg:text-xl xl:text-lg 3xl:text-xl text-white-70",
  vipItem:
    "font-medium bg-rainbow-text weight-medium text-base leading-[1.3] lg:text-xl xl:text-lg 3xl:text-xl text-white-70",
};
