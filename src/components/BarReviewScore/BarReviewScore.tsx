import { BarReviewScoreProps } from "./barReviewScoreTypes";

import styles from "./barReviewScore.module.css";
import { useEffect, useState } from "react";

const BarReviewScore: React.FC<BarReviewScoreProps> = ({
  typeOfReview,
  numberOfReviews,
}) => {
  const [yellowSize, setYellowSize] = useState(9);
  const [graySize, setGraySize] = useState(1);
  const [label, setLabel] = useState("Excelente (543)");
  const [grade, setGrade] = useState("9+");
  useEffect(() => {
    switch (typeOfReview) {
      case "excellent":
        setYellowSize(9);
        setGraySize(1);
        setLabel(`Excelente (${numberOfReviews})`);
        setGrade("9+");
        break;
      case "veryGood":
        setYellowSize(8);
        setGraySize(2);
        setLabel(`Muito bom (${numberOfReviews})`);
        setGrade("8+");
        break;
      case "good":
        setYellowSize(7);
        setGraySize(3);
        setLabel(`Bom (${numberOfReviews})`);
        setGrade("7+");
        break;
      case "bad":
        setYellowSize(6);
        setGraySize(4);
        setLabel(`Ruim (${numberOfReviews})`);
        setGrade("6+");
        break;
      case "veryBad":
        setYellowSize(1);
        setGraySize(9);
        setLabel(`Péssimo (${numberOfReviews})`);
        setGrade("");
        break;
    }
  }, [typeOfReview, numberOfReviews]);

  return (
    <div className={styles.barReviews}>
      <div className={styles.barReviews__bar}>
        <span className={styles.barReviews__bar__grade}>{grade}</span>
        <div
          className={styles.barReviews__bar__yellow}
          style={{ flex: yellowSize }}
        ></div>
        <div
          className={styles.barReviews__bar__gray}
          style={{ flex: graySize }}
        ></div>
      </div>
      <span className={styles.barReviews__label}>{label}</span>
    </div>
  );
};

export default BarReviewScore;
