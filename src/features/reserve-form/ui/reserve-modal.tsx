import { RefObject } from "react";

import { Modal, Heading } from "@/shared/ui";
import { reserveModalTitle } from "../lib";
import ReserveTabs from "./reserve-tabs";

type ReserveModalProps = {
  modalRootRef: RefObject<HTMLDivElement | null>;
  onClose?: () => void;
};

const styles = {
  /* min-h-[590px] */
  rootModal:
    "w-full md:max-w-[732px] rounded-0 md:rounded-middle backdrop-blur-[100px] bg-main-bg box-shadow-main",
  wrapper:
    "w-full md:max-w-[732px] md:min-h-auto md:-top-[3%] px-[20px] py-[20px] md:px-[40px] md:py-[40px] ",
  title:
    "max-w-[265px] md:max-w-[438px] mx-auto text-lg md:text-xl text-center text-white-70 leading-main",
  close:
    "top-[15px] right-[25px] md:right-[15px] md:top-[15px] w-[60px] h-[60px] md:w-[62px] md:h-[62px] before:h-[21px] before:w-[3px] after:w-[21px] after:h-[3px]",
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
