import React from "react";

type JoinListItemProps = {
  itemText: string;
};

const styles = {
  item: "",
};

const JoinListItem = ({ itemText }: JoinListItemProps) => {
  return <li className={styles.item}>{itemText}</li>;
};

export default JoinListItem;
