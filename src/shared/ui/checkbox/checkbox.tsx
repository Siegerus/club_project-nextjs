import { ReactElement } from "react";

import { cn } from "@/shared/lib";

type CheckboxProps = {
  wrapperClass?: string;
  checkBoxClass?: string;
  variant: "black" | "white";
  id: string;
  children?: ReactElement;
};

const styles = {
  wrapper: "flex items-start",
  label: "custom-checkbox",
};

const Checkbox = ({
  checkBoxClass,
  wrapperClass,
  variant,
  id,
  children,
}: CheckboxProps) => {
  const checkBoxVariant = cn(
    variant === "white" && "checkbox-white",
    variant === "black" && "checkbox-black",
  );

  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      <input
        className={cn("hidden", checkBoxVariant)}
        id={id}
        name={id}
        type="checkbox"
      />
      <label className={cn(styles.label, checkBoxClass)} htmlFor={id}></label>
      {children}
    </div>
  );
};

export default Checkbox;
