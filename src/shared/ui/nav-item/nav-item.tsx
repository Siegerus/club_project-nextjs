import Link from "next/link";
import type { ReactNode } from "react";

import type { NavItemType } from "./types";

type NavItemProps = NavItemType & {
  className?: string;
  linkClassName?: string;
  children?: ReactNode;
};

const NavItem = ({
  text,
  path,
  className,
  linkClassName,
  children,
}: NavItemProps) => {
  return (
    <li className={className}>
      <Link href={path} className={linkClassName}>
        {text}
      </Link>
      {children}
    </li>
  );
};

export default NavItem;
