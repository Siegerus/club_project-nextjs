"use client";

import { JoinModal } from "@/features/join-form";
import { useModal } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { promoButtonText } from "../lib";

const ModalToggle = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal, modalRootRef } =
    useModal();

  return (
    <>
      <Button onClick={handleOpenModal}>
        <span>{promoButtonText}</span>
      </Button>

      {isModalOpen && (
        <JoinModal onClose={handleCloseModal} modalRootRef={modalRootRef} />
      )}
    </>
  );
};

export default ModalToggle;
