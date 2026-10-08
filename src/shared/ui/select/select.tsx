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
      <button
        className={styles.control}
        type="button"
        aria-controls="select-body"
      ></button>
      <div className={styles.body} role="radiogroup" id="select-body">
        {radios.map((radio, i) => {
          return (
            <input
              className={styles.radio}
              key={radio.id}
              type="radio"
              name={radio.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Select;
