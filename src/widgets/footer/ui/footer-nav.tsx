import { Heading } from "@/shared/ui/heading";
import { NavItem, NavItemType } from "@/shared/ui/nav-item";

type FooterNavProps = {
  navItems: NavItemType[];
  headingText: string;
};

const styles = {
  wrapper: "list-none",
  title: "text-2xl md:text-4xl lg:text-[2.125rem] text-white-70",
  item: "mt-[20px] text-sm md:text-xl lg:text-lg 2xl:text-lg 3xl:text-xl text-white-70 font-semibold leading-[130%]",
};

const FooterNav = ({ navItems, headingText }: FooterNavProps) => {
  return (
    <ul className={styles.wrapper}>
      <Heading
        className={styles.title}
        title={headingText}
        level="h3"
        gradientType="none"
      />
      {navItems.map((item) => (
        <NavItem key={item.text} {...item} className={styles.item} />
      ))}
    </ul>
  );
};

export default FooterNav;
