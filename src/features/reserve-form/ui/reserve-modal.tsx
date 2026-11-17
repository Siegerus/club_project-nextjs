import type { RefObject } from "react";

import { cn } from "@/shared/lib";
import { Modal, Heading } from "@/shared/ui";
import { reserveModalTitle } from "../lib";
import ReserveTabs from "./reserve-tabs";

type ReserveModalProps = {
  modalRootRef: RefObject<HTMLDivElement | null>;
  onClose?: () => void;
};

const styles = {
  rootModal: cn(
    "w-full md:max-w-[732px]",
    "rounded-none md:rounded-middle",
    "bg-main-modal box-shadow-main overflow-y-scroll",
  ),
  wrapper: cn(
    "w-full md:max-w-[732px]",
    "min-h-[570px] md:min-h-auto",
    "px-[20px] py-[20px] md:px-[40px] md:py-[40px]",
  ),
  title: cn(
    "max-w-[265px] md:max-w-[438px] mx-auto",
    "text-lg md:text-xl text-center",
    "text-white-70 leading-main",
  ),
  close: cn(
    "top-[15px] right-[15px] md:right-[15px] 3xl:-right-[82px] 3xl:top-0",
    "w-[60px] h-[60px] md:w-[62px] md:h-[62px]",
    "before:h-[21px] before:w-[3px]",
    "after:w-[21px] after:h-[3px]",
  ),
};

const ReserveModal = ({ modalRootRef, onClose }: ReserveModalProps) => {
  return (
    <Modal
      aria-labelledby={reserveModalTitle}
      modalRootRef={modalRootRef}
      onClose={onClose}
      rootClass={styles.rootModal}
      wrapperClass={styles.wrapper}
      closeItemClass={styles.close}
    >
      <Heading level="h2" className={styles.title} title={reserveModalTitle} />
      <ReserveTabs />
    </Modal>
  );
};

export default ReserveModal;
