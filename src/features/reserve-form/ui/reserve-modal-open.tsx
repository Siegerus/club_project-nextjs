"use client";

import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import { useModal } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { openButtonText } from "../lib";
const ReserveModal = dynamic(() => import("./reserve-modal"), { ssr: false });

type ReserveModalOpenProps = {
  buttonClass?: string;
  buttonText?: string;
};

const ReserveModalOpen = ({
  buttonClass,
  buttonText = openButtonText,
}: ReserveModalOpenProps) => {
  const { isModalOpen, handleOpenModal, handleCloseModal, modalRootRef } =
    useModal();

  const handleButtonClick = () => {
    handleOpenModal();
  };

  return (
    <>
      <Button className={buttonClass} onClick={handleButtonClick}>
        <span>{buttonText}</span>
      </Button>
      <AnimatePresence>
        {isModalOpen && (
          <ReserveModal
            modalRootRef={modalRootRef}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ReserveModalOpen;
