import { cn } from "@/shared/lib";

type InputProps = {
  inputClass?: string;
  placeholder?: string;
  withLabel?: boolean;
  labelText?: string;
};

const styles = {
  wrapper: "",
  input:
    "block relative px-[20px] py-[22px] text-base text-white leading-middle tracking-base outline-hidden duration-300 ease-in placeholder:text-white-40 input-focus",
  label: "",
};

const Input = ({
  inputClass,
  placeholder,
  withLabel = false,
  labelText,
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
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
