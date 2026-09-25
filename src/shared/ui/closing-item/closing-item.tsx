import { cn } from "@/shared/lib";

type ClosingItemProps = {
  buttonClass?: string;
  label?: string;
  onClick?: () => void;
  variant?: "button" | "div";
};

const styles = {
  button: "",
};

const ClosingItem = ({
  label,
  buttonClass,
  onClick,
  variant = "button",
}: ClosingItemProps) => {
  const closeElement = {
    CloseTag: variant,
    className: cn(styles.button, buttonClass),
    extraProps:
      variant === "button"
        ? // В изменяемом объекте-литерале литералы «расширяются» до базовых типов:
          { "aria-label": label, type: "button" as const } // без as const будет { type: string }
        : { "aria-hidden": true },
  };

  return (
    <closeElement.CloseTag
      {...closeElement.extraProps}
      className={closeElement.className}
      onClick={onClick}
    ></closeElement.CloseTag>
  );
};

export default ClosingItem;
