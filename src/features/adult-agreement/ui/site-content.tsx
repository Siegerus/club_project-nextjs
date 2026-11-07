"use client";

import { ReactNode, useEffect, useState } from "react";

import { selectAgreementState, sessionSliceActions } from "@/entities/session";
import { useAppSelector, useAppDispatch } from "@/shared/lib";
import AdultAgreement from "./adult-agreement";

type SiteContentProps = {
  children: ReactNode;
};

const SiteContent = ({ children }: SiteContentProps) => {
  const isAgree = useAppSelector(selectAgreementState);
  const dispatch = useAppDispatch();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storageAgree = localStorage.getItem("adultAgree");
    if (storageAgree)
      dispatch(
        sessionSliceActions.setAgreementState(JSON.parse(`${storageAgree}`)),
      );
    if (!storageAgree)
      localStorage.setItem("adultAgree", JSON.stringify(isAgree));

    queueMicrotask(() => setIsMounted(true)); // откладываем в микротаску для исключения потенциального каскада
  });

  if (!isMounted) return null; // исключаем первый рендер до выполнения useEffect

  if (!isAgree) return <AdultAgreement />;

  return children;
};

export default SiteContent;
