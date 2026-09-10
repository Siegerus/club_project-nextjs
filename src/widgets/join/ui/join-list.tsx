import JoinListItem from "./join-list-item";

const styles = {
  list: "",
};

const JoinList = () => {
  return (
    <ul className={styles.list}>
      <JoinListItem />
    </ul>
  );
};

export default JoinList;
