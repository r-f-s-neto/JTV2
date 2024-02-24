import React from "react";
import styles from "./ticketDescription.module.css";
import { TicketDescriptionProps } from "./ticketDescription.types";
import TicketRatingComp from "../TicketRatingComp";
import TicketBenefits from "../TicketBenefits";
import TicketAbout from "../TicketAbout";
import TicketLocation from "../TicketLocation";

const TicketDescription: React.FC<TicketDescriptionProps> = ({
  ratingValue,
  ratingReviewsCount,
  description,
}) => {
  return (
    <section className={styles.ticketDescription}>
      <div className={styles.ticketDescription__ratingComp}>
        <TicketRatingComp
          ratingValue={ratingValue}
          ratingReviewsCount={ratingReviewsCount}
        />
      </div>
      <div className={styles.ticketDescription__benefits}>
        <TicketBenefits />
      </div>
      <div className={styles.ticketDescription__about}>
        <TicketAbout description={description} />
      </div>
      <div className={styles.ticketDescription__Location}>
        <TicketLocation />
      </div>
    </section>
  );
};

export default TicketDescription;
