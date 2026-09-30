"use client";

import { useState } from "react";
import { rulesButtonText, rulesSectionDescription } from "../lib";
import RulesList from "./rules-list";

const styles = {
  button: "underline text-white cursor-pointer skip-ink-none",
  description: "mt-[20px] lg:mt-[25px] 2xl:mt-[28px]",
};

const OpenRules = () => {
  const [isRulesVisible, setIsRulesVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsRulesVisible(true);
  };

  return (
    <>
      <p className={styles.description}>
        {rulesSectionDescription.main}

        {!isRulesVisible && (
          <button className={styles.button} onClick={handleButtonClick}>
            {rulesButtonText}
          </button>
        )}
      </p>

      {isRulesVisible && <RulesList />}
    </>
  );
};

export default OpenRules;
