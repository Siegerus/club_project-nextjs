import { RefObject } from "react";

import { Modal, Heading } from "@/shared/ui";
import { reserveModalTitle } from "../lib";
import ReserveTabs from "./reserve-tabs";

type ReserveModalProps = {
  modalRootRef: RefObject<HTMLDivElement | null>;
  onClose?: () => void;
};

const styles = {
  rootModal:
    "w-full md:max-w-[732px] rounded-0 md:rounded-middle bg-main-modal box-shadow-main overflow-y-scroll",
  wrapper:
    "w-full md:max-w-[732px] min-h-[570px] md:min-h-auto md:-top-[3%] px-[20px] py-[20px] md:px-[40px] md:py-[40px]",
  title:
    "max-w-[265px] md:max-w-[438px] mx-auto text-lg md:text-xl text-center text-white-70 leading-main",
  close:
    "top-[15px] right-[10px] md:right-[15px] 3xl:-right-[82px] 3xl:top-0 w-[60px] h-[60px] md:w-[62px] md:h-[62px] before:h-[21px] before:w-[3px] after:w-[21px] after:h-[3px]",
};

const ReserveModal = ({ modalRootRef, onClose }: ReserveModalProps) => {
  return (
    <Modal
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
