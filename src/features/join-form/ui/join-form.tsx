import { cn } from "@/shared/lib";
import { Input } from "@/shared/ui";
import { Button } from "@/shared/ui";
import { Checkbox } from "@/shared/ui";

import {
  joinFormPlaceholders,
  joinFormButtonText,
  joinFormCheckboxInfo,
} from "../lib";

const styles = {
  form: "flex flex-col items-center w-full",
  input: cn(
    "min-w-full mt-[20px] mb-[25px] md:mb-[20px] px-[30px] mx-auto rounded-2xl bg-main-input",
    "placeholder:text-sm md:placeholder:text-base",
  ),

  button:
    "w-full max-w-auto py-[20px] md:py-[21px] text-base md:text-xl leading-main tracking-base",
  checkbox:
    "min-w-[16px] min-h-[16px] md:min-w-[21px] md:min-h-[20px] mr-[8px] bg-transparent custom-checkbox",
  checkboxWrapper: "mt-[30px] md:mt-[20px]",
  checkboxInfo: "text-sm md:text-xl leading-small text-center text-white-70 ",
};

const JoinForm = () => {
  const { email } = joinFormPlaceholders;
  return (
    <form className={styles.form} id="join-form">
      <Input
        inputClass={styles.input}
        placeholder={email}
        type="email"
        id="join-form-email"
      />
      <Button className={styles.button} variant="no-bg">
        {joinFormButtonText}
      </Button>
      <Checkbox
        checkBoxClass={styles.checkbox}
        wrapperClass={styles.checkboxWrapper}
        variant="white"
        id="rules-agreement"
      >
        <span className={styles.checkboxInfo}>{joinFormCheckboxInfo}</span>
      </Checkbox>
    </form>
  );
};

export default JoinForm;
