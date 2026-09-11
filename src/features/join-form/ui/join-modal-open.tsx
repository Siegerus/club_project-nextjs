"use client";

import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";

import { useModal } from "@/shared/lib";
import { Button } from "@/shared/ui";
import JoinModal from "./join-modal";

type JoinModalOpenProps = PropsWithChildren<{
  buttonClass?: string;
  buttonText?: string;
  buttonVariant?: "no-bg";
}>;

const JoinModalOpen = ({
  buttonClass,
  buttonText,
  buttonVariant,
  children,
}: JoinModalOpenProps) => {
  const { isModalOpen, handleOpenModal, handleCloseModal, modalRootRef } =
    useModal();

  return (
    <>
      {children}
      <Button
        className={buttonClass}
        onClick={handleOpenModal}
        variant={buttonVariant}
      >
        <span>{buttonText}</span>
      </Button>
      <AnimatePresence>
        {isModalOpen && (
          <JoinModal onClose={handleCloseModal} modalRootRef={modalRootRef} />
        )}
      </AnimatePresence>
    </>
  );
};

export default JoinModalOpen;
