import { ReactElement } from "react";

import { cn } from "@/shared/lib";

type CheckboxProps = {
  wrapperClass?: string;
  checkBoxClass?: string;
  variant: "black" | "white";
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
        id="rules-agreement"
        name="rules-agreement"
        type="checkbox"
      />
      <label
        className={cn(styles.label, checkBoxClass)}
        htmlFor="rules-agreement"
      ></label>
      {children}
    </div>
  );
};

export default Checkbox;
