import { cn } from "@/shared/lib";

type InputProps = {
  wrapperClass?: string;
  inputClass?: string;
  placeholder?: string;
  withLabel?: boolean;
  labelText?: string;
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
}: InputProps) => {
  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      <input
        className={cn(styles.input, inputClass)}
        type="text"
        placeholder={placeholder}
        autoComplete="on"
      />
      {withLabel && <label className={styles.label}>{labelText}</label>}
    </div>
  );
};

export default Input;
