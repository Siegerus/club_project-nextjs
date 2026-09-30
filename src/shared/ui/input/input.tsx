import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ChangeEvent,
} from "react";
import { cn } from "@/shared/lib";

type InputProps = (
  | (InputHTMLAttributes<HTMLInputElement> & { isTextArea?: false })
  | (TextareaHTMLAttributes<HTMLTextAreaElement> & { isTextArea: true })
) & {
  wrapperClass?: string;
  inputClass?: string;
  label?: string;
  id: string;
  isTextArea?: boolean;
  textAreaHeight?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const inputCommon =
  "block relative px-[20px] py-[18px] md:py-[22px] text-base text-white leading-middle tracking-base outline-hidden placeholder:text-white-40 input-interactive";

const styles = {
  wrapper: "w-full",
  input: inputCommon,
  textArea: cn(inputCommon, "resize-none"),
  label: "",
};

const Input = ({
  wrapperClass,
  inputClass,
  placeholder,
  label,
  id,
  onChange,
  autoComplete = "on",
  isTextArea = false,
  textAreaHeight,
  value,
  ...rest
}: InputProps) => {
  const areaHeight = {
    minHeight: textAreaHeight ? `${textAreaHeight}px` : undefined,
  };

  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      {isTextArea ? (
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={cn(styles.textArea, inputClass)}
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={onChange}
          style={areaHeight}
          autoComplete={autoComplete}
          value={value}
        />
      ) : (
        <input
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          className={cn(styles.input, inputClass)}
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
          value={value}
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
