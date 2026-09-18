import Image from "next/image";

import { Modal } from "@/shared/ui";
import { Heading } from "@/shared/ui";
import {
  joinModalTitle,
  joinModalBGPath,
  joinModalIconPath,
  joinModalSubTitle,
} from "../lib";
import JoinForm from "./join-form";

const styles = {
  rootModal: "w-full md:max-w-[603px] rounded-0 md:rounded-middle",
  wrapper: "w-full md:max-w-[603px] min-h-[700px] md:min-h-auto md:-top-[3%]",
  title: "mt-[20px] text-4xl text-center leading-middle",
  subtitle: "mt-[10px] text-xl text-center text-white-40",
  icon: "relative z-10 w-[141px] h-[140px] mx-auto ",
  close:
    "top-[15px] right-[15px] md:-right-[82px] md:top-0 w w-[55px] h-[55px] md:w-[62px] md:h-[62px]",
};

const bgStyle = {
  backgroundImage: `url(${joinModalBGPath})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

type JoinModalProps = {
  onClose?: () => void;
  modalRootRef?: React.RefObject<HTMLDivElement | null>;
};

const JoinModal = ({ onClose, modalRootRef }: JoinModalProps) => {
  return (
    <Modal
      rootClass={styles.rootModal}
      wrapperClass={styles.wrapper}
      backgroundStyle={bgStyle}
      closeClass={styles.close}
      onClose={onClose}
      modalRootRef={modalRootRef}
    >
      <Image
        className={styles.icon}
        width={141}
        height={140}
        alt=""
        src={joinModalIconPath}
      />
      <Heading
        className={styles.title}
        level="h2"
        gradientType="white"
        title={joinModalTitle}
      />
      <h3 className={styles.subtitle}>{joinModalSubTitle}</h3>
      <JoinForm />
    </Modal>
  );
};

export default JoinModal;
