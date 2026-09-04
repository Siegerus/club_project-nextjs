"use client";

import { useModal } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { openButtonText } from "../lib";
import JoinModal from "./join-modal";

const JoinModalOpen = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal, modalRootRef } =
    useModal();

  return (
    <>
      <Button onClick={handleOpenModal}>
        <span>{openButtonText}</span>
      </Button>

      {isModalOpen && (
        <JoinModal onClose={handleCloseModal} modalRootRef={modalRootRef} />
      )}
    </>
  );
};

export default JoinModalOpen;
