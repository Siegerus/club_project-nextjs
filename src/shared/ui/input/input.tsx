import type { InputHTMLAttributes } from "react";
import { cn } from "@/shared/lib";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  wrapperClass?: string;
  inputClass?: string;
  placeholder?: string;
  withLabel?: boolean;
  labelText?: string;
  type?: string;
  id: string;
};

const styles = {
  wrapper: "w-full",
  input:
    "block relative px-[20px] py-[18px] md:py-[22px] text-base text-white leading-middle tracking-base outline-hidden duration-300 ease-in placeholder:text-white-40 input-interactive",
  label: "",
};

const Input = ({
  wrapperClass,
  inputClass,
  placeholder,
  withLabel = false,
  labelText,
  type = "text",
  id,
}: InputProps) => {
  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      <input
        className={cn(styles.input, inputClass)}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        autoComplete="on"
      />
      {withLabel && <label className={styles.label}>{labelText}</label>}
    </div>
  );
};

export default Input;
