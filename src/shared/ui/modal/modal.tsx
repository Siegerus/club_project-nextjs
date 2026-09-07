import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";
import { Overlay } from "../overlay";

type ModalProps = PropsWithChildren<{
  rootClass?: string;
  wrapperClass?: string;
  backgroundStyle?: React.CSSProperties;
  closeClass?: string;
  onClose?: () => void;
  modalRootRef?: React.RefObject<HTMLDivElement | null>;
}>;

const styles = {
  root: "z-50 relative h-dvh md:h-auto overflow-y-scroll md:overflow-y-visible ",
  wrapper: "h-dvh md:h-auto px-[40px] py-[40px]",
  close: "close-button",
};

const Modal = ({
  children,
  rootClass,
  wrapperClass,
  backgroundStyle,
  closeClass,
  onClose,
  modalRootRef,
}: ModalProps) => {
  return (
    <Overlay>
      <motion.div
        ref={modalRootRef}
        className={cn(styles.root, rootClass)}
        style={backgroundStyle}
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={cn(styles.wrapper, wrapperClass)}>{children}</div>
        <button
          className={cn(styles.close, closeClass)}
          onClick={onClose}
        ></button>
      </motion.div>
    </Overlay>
  );
};

export default Modal;
