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
  "w-full mb-[10px] md:mb-[20px] py-[16px] md:py-[18px] px-[30px] border-2 border-additional rounded-[16px] placeholder:text-sm md:placeholder:text-base";

const styles = {
  wrapper:
    "w-full lg:max-w-[630px] xl:max-w-[730px] mx-auto mt-[35px] md:mt-[46px] lg:mt-[32px] p-[10px] md:p-[40px] rounded-small md:rounded-base bg-blur box-shadow-main bg-main-bg",
  form: "",
  input: inputCommon,
  textArea: cn(inputCommon, "pt-[20px]"),
  button:
    "md:max-w-[unset] 3xl:max-w-[unset] p-[15px] lg:py-[28px] xl:py-[28px] leading-main tracking-base text-black",
  chekboxWrapper:
    "max-w-[372px] md:max-w-[unset] mx-auto mt-[10px] md:mt-[20px] justify-end",
  chekboxInfo:
    "w-full text-sm md:text-xl leading-middle text-center text-white-70",
  chekbox:
    "min-w-[16px] min-h-[16px] md:min-w-[21px] md:min-h-[21px] -mr-[40px] md:-mr-[80px] lg:-mr-[70px] xl:-mr-[45px] max-[420px]:-mr-[25px] max-[380px]:mr-0 md:mt-[3px]",
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
          <div className={styles.chekboxInfo}>
            <a href="#">{contactsFormCheckboxText.top}</a>
            <a className="block xl:inline" href="#">
              {contactsFormCheckboxText.bottom}
            </a>
          </div>
        </Checkbox>
      </form>
    </div>
  );
};

export default ContactsForm;
