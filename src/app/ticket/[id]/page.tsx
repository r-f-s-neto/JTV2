//"use client";

//import { useRouter } from "next/navigation";
//import { useEffect, useState } from "react";
import { TicketProps } from "./TicketTypes";
import TicketHeader from "@/components/TicketHeader";
import styles from "./page.module.css";
import TicketImage from "@/components/TicketImage";
import TicketDescription from "@/components/TicketDescription";
import TicketCallToAction from "@/components/TicketCallToAction";
import { GetServerSideProps } from "next";
import { getTicket } from "@/services/getTicket/getTicket";
import NoData from "@/components/NoData/NoData";

const Ticket: React.FC<TicketProps> = async ({ params }) => {
  const { id } = params;
  let data = null;

  if (id) {
    data = await getTicket(id);
  }

  return (
    <div className={styles.ticket}>
      {data ? (
        <div>
          <div className={styles.ticket__header}>
            <TicketHeader name={data.name} location={data.location} path="/" />
          </div>
          <div className={styles.ticket__image}>
            <TicketImage name={data.name} image={data.image} />
          </div>
          <main className={styles.ticket__main}>
            <section className={styles.ticket__main__description}>
              <TicketDescription
                ratingValue={data.rating.value}
                ratingReviewsCount={data.rating.reviewsCount}
                description={data.description}
              />
            </section>
            <section className={styles.ticket__main__info}>
              <TicketCallToAction ticketInfo={data} />
            </section>
          </main>
        </div>
      ) : (
        <NoData text="Não Existe Nenhum Ingresso Com Este Id" />
      )}
    </div>
  );
};

export default Ticket;
