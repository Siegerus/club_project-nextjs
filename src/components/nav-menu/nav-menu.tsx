import Link from "next/link";

import cn from "@/lib/utils";
import { navItems } from "./constants";

type NavMenuPops = {
  tablet?: boolean;
};

const NavMenu = ({ tablet = false }: NavMenuPops) => {
  const navClass = cn(
    "hidden xl:block mt-4 pt-[24px] px-[30px] pb-[24px] lg:mt-5 xl:mt-0 w-full xl:w-[55.8%] lg:pt-[20px] lg:px-[30px] lg:pb-[23px] rounded-full bg-main-bg",
    tablet && "md:block xl:hidden",
  );

  const itemClass =
    "weight-medium text-base lg:text-xl xl:text-lg 2xl:text-xl text-white-70";
  return (
    <nav className={navClass}>
      <ul className="flex items-center justify-between list-none">
        {navItems.map((item) =>
          item.text === "VIP" ? (
            <NavItem
              key={item.text}
              text={item.text}
              path={item.path}
              itemClass={cn(itemClass, "font-medium bg-rainbow-text")}
            />
          ) : (
            <NavItem
              key={item.text}
              text={item.text}
              path={item.path}
              itemClass={itemClass}
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
  itemClass: string;
};

export default NavMenu;

const NavItem = ({ path, text, itemClass }: NavItemProps) => {
  return (
    <li className={itemClass}>
      <Link href={path}>{text}</Link>
    </li>
  );
};

export { NavItem };
