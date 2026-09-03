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
  modal: "w-full md:max-w-[603px] md:-top-[3%]",
  title: "mt-[20px] text-4xl text-center leading-middle",
  subtitle: "mt-[10px] text-xl text-center text-white-40",
  icon: "mx-auto relative z-10",
  button: "",
};

const bgStyle = {
  backgroundImage: `url(${joinModalBGPath})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const JoinModal = () => {
  return (
    <Modal rootClass={styles.modal} backgroundStyle={bgStyle}>
      <Image
        className={styles.icon}
        width={140}
        height={140}
        alt=""
        src={joinModalIconPath}
      />
      <Heading className={styles.title} level="h2" title={joinModalTitle} />
      <h3 className={styles.subtitle}>{joinModalSubTitle}</h3>
      <JoinForm />
    </Modal>
  );
};

export default JoinModal;
