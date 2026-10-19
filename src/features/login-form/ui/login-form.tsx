import { Input } from "@/shared/ui";
import { loginInputsConfig } from "../model";

const LoginForm = () => {
  return (
    <form>
      {loginInputsConfig.map((input, i) => {
        const keyValue = `${input.name}-${i}`;
        return <Input key={keyValue} id={input.id} label={input.label} />;
      })}
    </form>
  );
};

export default LoginForm;
