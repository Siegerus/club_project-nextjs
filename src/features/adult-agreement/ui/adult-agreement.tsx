import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";

import {
  adultAgreementTitle,
  adultAgreementDescription,
  acceptText,
  deniedText,
} from "../lib";

const styles = {
  root: "fixed top-0 left-0 w-full h-full z-50 adult-agreement",
  wrapper: cn(
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[545px]",
    "p-[10px] md:p-[40px]",
    "",
    "rounded-small md:rounded-middle bg-main-bg box-shadow-main",
  ),
  title:
    "mt-[20px] mx-auto text-[1.625rem] font-semibold text-center text-white leading-main tracking-base",
  description: "mt-[30px] text-xl text-center text-white-70 leading-middle",
  acceptButton:
    "mt-[25px] pt-[14px] px-[12px] pb-[16px] text-lg leading-main tracking-base",
  deniedButton:
    "mt-[25px] pt-[14px] px-[12px] pb-[16px] text-lg leading-main tracking-base",
};

const AdultAgreement = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{adultAgreementTitle}</h2>
        <p className={styles.description}>{adultAgreementDescription}</p>
        <Button className={styles.acceptButton}>
          <span>{acceptText}</span>
        </Button>
        <Button className={styles.deniedButton} variant="no-bg">
          <span>{deniedText}</span>
        </Button>
      </div>
    </div>
  );
};

export default AdultAgreement;
