"use client";

import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import { cn, useModal } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { openButtonText, reserveAdditionalInfo } from "../lib";
const ReserveModal = dynamic(() => import("./reserve-modal"), { ssr: false });

type ReserveModalOpenProps = {
  buttonClass?: string;
  buttonText?: string;
};

const styles = {
  info: cn(
    "mt-[11px] px-[15px]",
    "text-sm md:text-base lg:text-xl text-center",
    "leading-main md:leading-middle lg:leading-main",
    "md:tracking-base lg:tracking-none",
    "text-white-70",
  ),
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
      <Button
        className={buttonClass}
        onClick={handleButtonClick}
        aria-haspopup="dialog"
      >
        <span>{buttonText}</span>
      </Button>

      <p className={styles.info}>{reserveAdditionalInfo}</p>
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
