import { RefObject } from "react";

import { Modal } from "@/shared/ui";
import ReserveForm from "./reserve-form";

type ReserveModalProps = {
  modalRootRef: RefObject<HTMLDivElement | null>;
  onClose?: () => void;
};

const styles = {
  close:
    "top-[15px] right-[15px] md:-right-[82px] md:top-0 w-[55px] h-[55px] md:w-[62px] md:h-[62px] before:h-[21px] before:w-[3px] after:w-[21px] after:h-[3px]",
};

const ReserveModal = ({ modalRootRef, onClose }: ReserveModalProps) => {
  return (
    <Modal
      modalRootRef={modalRootRef}
      onClose={onClose}
      closeItemClass={styles.close}
    >
      <ReserveForm />
    </Modal>
  );
};

export default ReserveModal;
