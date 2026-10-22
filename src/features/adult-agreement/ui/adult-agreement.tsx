"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

import { setAgreementState, selectAgreementState } from "@/entities/session";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { AppRoute } from "@/shared/lib";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";

import {
  adultAgreementTitle,
  adultAgreementDescription,
  acceptText,
  deniedText,
} from "../lib";

const styles = {
  root: "z-50 fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[15px] adult-agreement",
  wrapper: cn(
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[545px] h-full overflow-y-auto sm:h-auto ",
    "p-[10px] sm:p-[40px] sm:rounded-middle bg-main-bg backdrop-blur-[24px] box-shadow-main",
  ),
  title:
    "mx-auto mt-[20px] sm:mt-0 text-[1.625rem] sm:text-[2em] font-semibold text-center text-white leading-main sm:leading-small tracking-base",
  description:
    "mt-[30px] sm:mt-[16px] text-xl text-center text-white-70 leading-middle",
  button:
    "max-w-[297px] sm:w-full sm:max-w-[unset] 3xl:max-w-[unset] mt-[25px] sm:mt-[16px] pt-[14px] sm:pt-[20px] 3xl:pt-[20px] px-[12px] sm:px-[50px] pb-[16px] sm:pb-[22px] 3xl:pb-[22px] text-lg sm:text-xl leading-main tracking-base",
};

const AdultAgreement = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAgree = useAppSelector(selectAgreementState);

  const handleAcceptClick = () => {
    dispatch(setAgreementState(true));
  };
  const handleDeniedClick = () => {
    router.push(AppRoute.NotFound);
  };

  const handleDeniedKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") router.push(AppRoute.NotFound);
    },
    [router],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleDeniedKeydown);
    return () => {
      document.removeEventListener("keydown", handleDeniedKeydown);
    };
  }, [isAgree, handleDeniedKeydown]);

  if (isAgree) return null;
  return (
    <div className={styles.root} role="dialog" aria-modal>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{adultAgreementTitle}</h2>
        <p className={styles.description}>{adultAgreementDescription}</p>
        <Button className={styles.button} onClick={handleAcceptClick}>
          <span>{acceptText}</span>
        </Button>
        <Button
          className={styles.button}
          onClick={handleDeniedClick}
          variant="no-bg"
        >
          <span>{deniedText}</span>
        </Button>
      </div>
    </div>
  );
};

export default AdultAgreement;
