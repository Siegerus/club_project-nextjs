import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";
import { Overlay } from "../overlay";

type ModalProps = PropsWithChildren<{
  rootClass?: string;
  wrapperClass?: string;
}>;
// md:rounded-[40px]
const styles = {
  root: "z-50 relative md:-top-[10%] h-dvh md:h-auto px-[20px] md:px-[40px] py-[40px]",
  wrapper: "overflow-y-scroll md:overflow-y-auto",
};

const Modal = ({ children, rootClass, wrapperClass }: ModalProps) => {
  return (
    <Overlay>
      <div className={cn(styles.root, rootClass)}>
        <div className={cn(styles.wrapper, wrapperClass)}>{children}</div>
      </div>
    </Overlay>
  );
};

export default Modal;
