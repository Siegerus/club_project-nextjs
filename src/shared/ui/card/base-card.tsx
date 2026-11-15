import { ReactNode } from "react";

import { cn } from "@/shared/lib";

type BaseCardProps = {
  children: ReactNode;
  wrapperClass?: string;
};

const styles = {
  wrapper: "bg-main-bg box-shadow-main rounded-base",
};

const BaseCard = ({ children, wrapperClass }: BaseCardProps) => {
  return <div className={cn(styles.wrapper, wrapperClass)}>{children}</div>;
};

export default BaseCard;
