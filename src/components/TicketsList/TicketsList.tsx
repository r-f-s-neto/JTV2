import React from "react";
import { TicketsListProps } from "./ticketsListTypes";
import TicketCard from "../TicketCard";
import styles from "./ticketsList.module.css";
import { useRouter } from "next/navigation";

const TicketsList: React.FC<TicketsListProps> = ({ ticketsToRender }) => {
  const router = useRouter();

  return (
    <section className={styles.ticketList}>
      {ticketsToRender?.length
        ? ticketsToRender.map((ticket: any) => {
            return (
              <TicketCard
                key={ticket.id}
                name={ticket.name}
                id={ticket.id}
                location={ticket.location}
                image={ticket.image}
                description={ticket.description}
                priceFull={ticket.price.full}
                priceDiscount={ticket.price.discount}
                ratingReviewsCount={ticket.rating.reviewsCount}
                ratingValue={ticket.rating.value}
                handleClick={(id) => {
                  router.push(`/ticket/${id}`, { scroll: true });
                }}
              />
            );
          })
        : null}
    </section>
  );
};

export default TicketsList;
