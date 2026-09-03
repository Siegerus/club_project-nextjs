import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";
import { Overlay } from "../overlay";

type ModalProps = PropsWithChildren<{
  rootClass?: string;
  wrapperClass?: string;
  closeClass?: string;
}>;

const styles = {
  root: "z-50 relative h-dvh md:h-auto px-[20px] md:px-[40px] py-[40px] overflow-y-scroll md:overflow-y-auto",
  wrapper: "",
  close: "close-button",
};

const Modal = ({
  children,
  rootClass,
  wrapperClass,
  closeClass,
}: ModalProps) => {
  return (
    <Overlay>
      <div className={cn(styles.root, rootClass)}>
        <div className={cn(styles.wrapper, wrapperClass)}>{children}</div>
        <button className={cn(styles.close, closeClass)}></button>
      </div>
    </Overlay>
  );
};

export default Modal;
