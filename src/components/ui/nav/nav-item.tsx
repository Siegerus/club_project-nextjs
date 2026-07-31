import Link from "next/link";

type NavItemProps = {
  path: string;
  text: string;
  itemClass: string;
};

const NavItem = ({ path, text, itemClass }: NavItemProps) => {
  return (
    <li className={itemClass}>
      <Link href={path}>{text}</Link>
    </li>
  );
};

export default NavItem;
