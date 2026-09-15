import Image from "next/image";
import { joinListIconPath } from "../lib";

type JoinListItemProps = {
  itemText: string;
};

const styles = {
  listItem:
    "flex justify-start md:justify-center lg:justify-start items-start lg:items-center mb-[16px] md:mb-[20px] lg:mb-[40px] text-left md:text-center lg:text-left",
  itemText:
    "ml-[16px] text-base lg:text-lg xl:text-xl tracking-base lg:tracking-none leading-middle text-wrap md:text-nowrap lg:text-wrap text-white-70",
  icon: "w-[20px] h-[20px]",
};

const JoinListItem = ({ itemText }: JoinListItemProps) => {
  return (
    <li className={styles.listItem}>
      <Image
        className={styles.icon}
        width={20}
        height={20}
        src={joinListIconPath}
        alt="check"
      />
      <span className={styles.itemText}>{itemText}</span>
    </li>
  );
};

export default JoinListItem;
