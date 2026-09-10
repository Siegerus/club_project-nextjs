import JoinListItem from "./join-list-item";

type JoinListProps = {
  itemTexts: readonly string[];
};

const styles = {
  list: "",
};

const JoinList = ({ itemTexts }: JoinListProps) => {
  return (
    <ul className={styles.list}>
      {itemTexts.map((text, i) => {
        const keyValue = `${text}-${i}`;
        return <JoinListItem key={keyValue} itemText={text} />;
      })}
    </ul>
  );
};

export default JoinList;
