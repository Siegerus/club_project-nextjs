"use client";

import { ReactNode } from "react";

import { selectAgreementState } from "@/entities/session";
import { useAppSelector } from "@/shared/lib";
import AdultAgreement from "./adult-agreement";

type SiteContentProps = {
  children: ReactNode;
};

const SiteContent = ({ children }: SiteContentProps) => {
  const isAgree = useAppSelector(selectAgreementState);

  if (!isAgree) return <AdultAgreement />;

  return children;
};

export default SiteContent;
