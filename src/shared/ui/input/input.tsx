import { cn } from "@/shared/lib";

type InputProps = {
  inputClass?: string;
};

const styles = {
  input: "",
};

const Input = ({ inputClass }: InputProps) => {
  return <input className={cn(styles.input, inputClass)} type="text" />;
};

export default Input;
