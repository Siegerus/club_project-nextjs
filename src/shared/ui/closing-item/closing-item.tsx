import { cn } from "@/shared/lib";

type ClosingItemProps = {
  buttonClass?: string;
  label?: string;
  onClick?: () => void;
};

const styles = {
  button: "",
};

const ClosingItem = ({ label, buttonClass, onClick }: ClosingItemProps) => {
  const buttonClassName = cn(styles.button, buttonClass);
  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      aria-label={label}
    ></button>
  );
};

export default ClosingItem;
