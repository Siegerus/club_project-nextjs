import { Input } from "@/shared/ui";
import { Button } from "@/shared/ui";
import { Checkbox } from "@/shared/ui";

import {
  joinFormPlaceholders,
  joinFormButtonText,
  joinFormCheckboxInfo,
} from "../lib";

/* type JoinFormProps = {}; */

const styles = {
  input:
    "w-[calc(100%-12px)] mt-[20px] mb-[20px] mx-auto rounded-2xl bg-main-input",
  button: "w-full max-w-auto text-xl leading-main tracking-base",
  checkbox: "",
};

const JoinForm = (/* {}: JoinFormProps */) => {
  const { email } = joinFormPlaceholders;
  return (
    <form>
      <Input inputClass={styles.input} placeholder={email} />
      <Button className={styles.button} variant="no-bg">
        {joinFormButtonText}
      </Button>
      <Checkbox checkBoxClass={styles.checkbox}>
        <span>{joinFormCheckboxInfo}</span>
      </Checkbox>
    </form>
  );
};

export default JoinForm;
