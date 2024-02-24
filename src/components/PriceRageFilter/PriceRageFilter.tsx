import { useState } from "react";
import PriceRageButton from "../PriceRageButton";

import styles from "./priceRageFilter.module.css";

const PriceRageFilter = () => {
  const [buttonActive, setButtonActive] = useState("op1");
  return (
    <div className={styles.PriceRageFilter}>
      <PriceRageButton
        id="op1"
        initialPrice={10}
        finalPrice={390}
        isActive={buttonActive === "op1" ? true : false}
        handleClick={(id) => setButtonActive(id)}
      />
      <PriceRageButton
        id="op2"
        initialPrice={10}
        finalPrice={390}
        isActive={buttonActive === "op2" ? true : false}
        handleClick={(id) => setButtonActive(id)}
      />
      <PriceRageButton
        id="op3"
        initialPrice={10}
        finalPrice={390}
        isActive={buttonActive === "op3" ? true : false}
        handleClick={(id) => setButtonActive(id)}
      />
      <PriceRageButton
        id="op4"
        initialPrice={10}
        finalPrice={390}
        isActive={buttonActive === "op4" ? true : false}
        handleClick={(id) => setButtonActive(id)}
      />
    </div>
  );
};

export default PriceRageFilter;
