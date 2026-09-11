import { cn } from "@/shared/lib";
import JoinListItem from "./join-list-item";

type JoinListProps = {
  itemTexts: readonly string[];
  isBottomIndent?: boolean;
};

const listCommon = "z-[10] w-full lg:w-[413px] list-none";

const styles = {
  list: listCommon,
  listIndent: cn(
    listCommon,
    "mb-[135px] mt-0 lg:mt-[15px] md:mb-[170px] lg:mb-0",
  ),
};

const JoinList = ({ itemTexts, isBottomIndent = false }: JoinListProps) => {
  const listClass = cn(styles.list, isBottomIndent && styles.listIndent);

  return (
    <ul className={listClass}>
      {itemTexts.map((text, i) => {
        const keyValue = `${text}-${i}`;
        return <JoinListItem key={keyValue} itemText={text} />;
      })}
    </ul>
  );
};

export default JoinList;
