import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

import type { NavItemType } from "./types";

type NavItemProps = NavItemType & {
  className?: string;
  linkClassName?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent) => void;
};

const NavItem = ({
  text,
  path,
  className,
  linkClassName,
  children,
  onClick,
}: NavItemProps) => {
  return (
    <li className={className} onClick={onClick}>
      <Link href={path} className={linkClassName}>
        {text}
      </Link>
      {children}
    </li>
  );
};

export default NavItem;
