import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";
import { Overlay } from "../overlay";

type ModalProps = PropsWithChildren<{
  rootClass?: string;
  wrapperClass?: string;
  backgroundStyle?: React.CSSProperties;
  closeClass?: string;
  onClick: () => void;
}>;

const styles = {
  root: "relative h-dvh md:h-auto overflow-y-scroll md:overflow-y-visible ",
  wrapper: "z-50 h-dvh md:h-auto px-[40px] py-[40px]",
  close: "close-button",
};

const Modal = ({
  children,
  rootClass,
  wrapperClass,
  backgroundStyle,
  closeClass,
  onClick,
}: ModalProps) => {
  const handleCloseButton = () => {
    onClick();
  };

  return (
    <Overlay>
      <div className={cn(styles.root, rootClass)} style={backgroundStyle}>
        <div className={cn(styles.wrapper, wrapperClass)}>{children}</div>
        <button
          onClick={handleCloseButton}
          className={cn(styles.close, closeClass)}
        ></button>
      </div>
    </Overlay>
  );
};

export default Modal;
