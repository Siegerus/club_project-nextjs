"use client";

import { JoinModal } from "@/features/join-form";
import { useModal } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { promoButtonText } from "../lib";

const ModalToggle = () => {
  const { isModalOpen, handleToggleModal } = useModal();

  return (
    <>
      <Button onClick={handleToggleModal}>
        <span>{promoButtonText}</span>{" "}
      </Button>

      {isModalOpen && <JoinModal onClick={handleToggleModal} />}
    </>
  );
};

export default ModalToggle;
