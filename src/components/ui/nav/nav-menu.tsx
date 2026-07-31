import { navItems } from "./constants";
import cn from "@/lib/utils/utils";
import NavItem from "./nav-item";

const NavMenu = () => {
  const itemClass =
    "weight-medium text-base lg:text-xl xl:text-lg 2xl:text-xl text-white-70";
  return (
    <nav className="hidden md:block mt-4 pt-[24px] px-[30px] pb-[24px] lg:mt-5 w-full 2xl:w-[55.8%] pt-[20px] pb-[23px] rounded-full bg-main-bg">
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

export default NavMenu;
