import Image from "next/image";
import { joinListIconPath } from "../lib";

type JoinListItemProps = {
  itemText: string;
};

const styles = {
  listItem:
    "flex justify-start md:justify-center lg:items-start mb-[16px] md:mb-[20px] lg:mb-[40px] ",
  itemText:
    "ml-[16px] text-base lg:text-lg xl:text-xl tracking-base leading-middle text-wrap md:text-nowrap text-white-70",
};

const JoinListItem = ({ itemText }: JoinListItemProps) => {
  return (
    <li className={styles.listItem}>
      <Image width={20} height={20} src={joinListIconPath} alt="check" />
      <span className={styles.itemText}>{itemText}</span>
    </li>
  );
};

export default JoinListItem;
