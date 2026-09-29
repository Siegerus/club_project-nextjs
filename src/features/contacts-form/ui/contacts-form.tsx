"use client";

import { Input } from "@/shared/ui";
import { Checkbox } from "@/shared/ui";
import { Button } from "@/shared/ui";
import { inputsConfig } from "../lib";

const styles = {
  wrapper:
    "mt-[35px] p-[10px] rounded-small bg-blur box-shadow-main bg-main-bg",
  form: "",
  input:
    "w-full mb-[10px] py-[16px] px-[30px] border-2 border-additional rounded-[16px] placeholder:text-sm",
};

const ContactsForm = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} id="contacts-form">
        {inputsConfig.map((input, i) => {
          const keyValue = `${input.id}-${i}`;
          return (
            <Input
              inputClass={styles.input}
              type={input.type}
              id={input.id}
              placeholder={input.placeholder}
              isTextArea={input.textArea}
              textAreaHeight={input.height}
              autoComplete={input.autoComplete}
              key={keyValue}
            />
          );
        })}
      </form>
    </div>
  );
};

export default ContactsForm;
