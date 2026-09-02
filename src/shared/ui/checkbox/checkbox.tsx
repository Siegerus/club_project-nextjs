import { ReactElement } from "react";

import { cn } from "@/shared/lib";

type CheckboxProps = {
  wrapperClass: string;
  checkBoxClass: string;
  children: ReactElement;
};

const styles = {
  wrapper: "",
  checkBox: "",
};

const Checkbox = ({ checkBoxClass, wrapperClass, children }: CheckboxProps) => {
  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      <input className={cn(styles.checkBox, checkBoxClass)} type="checkbox" />
      {children}
    </div>
  );
};

export default Checkbox;
