import type { InputHTMLAttributes, ChangeEvent } from "react";
import { cn } from "@/shared/lib";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  wrapperClass?: string;
  inputClass?: string;
  label?: string;
  id: string;
  isTextArea?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const styles = {
  wrapper: "w-full",
  input:
    "block relative px-[20px] py-[18px] md:py-[22px] text-base text-white leading-middle tracking-base outline-hidden duration-300 ease-in placeholder:text-white-40 input-interactive",
  textArea: "resize-none",
  label: "",
};

const Input = ({
  wrapperClass,
  inputClass,
  placeholder,
  label,
  id,
  onChange,
  type = "text",
  isTextArea = false,
}: InputProps) => {
  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      {isTextArea ? (
        <textarea
          className={cn(styles.textArea, inputClass)}
          id={id}
          name={id}
          placeholder={placeholder}
          autoComplete="on"
          onChange={onChange}
        />
      ) : (
        <input
          className={cn(styles.input, inputClass)}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          autoComplete="on"
          onChange={onChange}
        />
      )}
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
