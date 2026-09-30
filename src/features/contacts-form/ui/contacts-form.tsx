"use client";

import { cn } from "@/shared/lib";
import { Input } from "@/shared/ui";
import { Checkbox } from "@/shared/ui";
import { Button } from "@/shared/ui";
import {
  inputsConfig,
  contactsFormButtonText,
  contactsFormCheckboxText,
} from "../lib";

const inputCommon =
  "w-full mb-[10px] py-[16px] px-[30px] border-2 border-additional rounded-[16px] placeholder:text-sm";

const styles = {
  wrapper:
    "mt-[35px] p-[10px] rounded-small bg-blur box-shadow-main bg-main-bg",
  form: "",
  input: inputCommon,
  textArea: cn(inputCommon, "pt-[20px]"),
  button: "p-[15px] leading-main tracking-base text-black",
  chekboxWrapper: "mt-[10px] justify-end",
  chekboxInfo: "w-full text-sm leading-middle text-center text-white-70",
  chekbox: "min-w-[16px] min-h-[16px] -mr-[40px]",
};

const ContactsForm = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} id="contacts-form">
        {inputsConfig.map((input, i) => {
          const keyValue = `${input.id}-${i}`;
          const inputClass = input.textArea ? styles.textArea : styles.input;
          return (
            <Input
              inputClass={inputClass}
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
        <Button className={styles.button} type="submit">
          <span>{contactsFormButtonText}</span>
        </Button>
        <Checkbox
          wrapperClass={styles.chekboxWrapper}
          checkBoxClass={styles.chekbox}
          id="contacts-agreement"
          variant="white"
        >
          <a href="#" className={styles.chekboxInfo}>
            {contactsFormCheckboxText.top}
            <span className="block">{contactsFormCheckboxText.bottom}</span>
          </a>
        </Checkbox>
      </form>
    </div>
  );
};

export default ContactsForm;
