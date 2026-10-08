"use client";

import type { Radio } from "./types";

type SelectProps = {
  radios: Radio[];
};

const styles = {
  wrapper: "",
  control: "",
  body: "",
  radio: "",
};

const Select = ({ radios }: SelectProps) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.control} type="button"></button>
      <div className={styles.body}>
        {radios.map((radio, i) => {
          return <input className={styles.radio} key={radio.id} />;
        })}
      </div>
    </div>
  );
};

export default Select;
