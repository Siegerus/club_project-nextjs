"use client";

import { useModal } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { openButtonText } from "../lib";
import JoinModal from "./join-modal";

type JoinModalOpenProps = {
  buttonClass?: string;
};

const JoinModalOpen = ({ buttonClass }: JoinModalOpenProps) => {
  const { isModalOpen, handleOpenModal, handleCloseModal, modalRootRef } =
    useModal();

  return (
    <>
      <Button className={buttonClass} onClick={handleOpenModal}>
        <span>{openButtonText}</span>
      </Button>

      {isModalOpen && (
        <JoinModal onClose={handleCloseModal} modalRootRef={modalRootRef} />
      )}
    </>
  );
};

export default JoinModalOpen;
