import React from "react";
import { TicketRatingCompProps } from "./ticketRatingComp.types";
import styles from "./ticketRatingComp.module.css";

const TicketRatingComp: React.FC<TicketRatingCompProps> = ({
  ratingValue,
  ratingReviewsCount,
}) => {
  return (
    <div className={styles.ticketRatingComp}>
      <div className={styles.ticketRatingComp__value}>{ratingValue}</div>
      <div className={styles.ticketRatingComp__text}>
        <span className={styles.ticketRatingComp__text__avaliation}>
          Excelente
        </span>
        <span
          className={styles.ticketRatingComp__text__reviewsCount}
        >{`(${ratingReviewsCount} Reviews)`}</span>
      </div>
    </div>
  );
};

export default TicketRatingComp;
