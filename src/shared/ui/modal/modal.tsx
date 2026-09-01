import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";

type ModalProps = PropsWithChildren<{
  rootClass?: string;
  wrapperClass?: string;
}>;

const styles = {
  root: "z-100 absolute top-[50%] left-[50%]  px-[40px] py-[40px] m-auto inset-0 rounded-[40px] ",
  wrapper: "",
};

const Modal = ({ children, rootClass, wrapperClass }: ModalProps) => {
  return (
    <div className={cn(styles.root, rootClass)}>
      <div className={cn(styles.wrapper, wrapperClass)}>{children}</div>
    </div>
  );
};

export default Modal;
