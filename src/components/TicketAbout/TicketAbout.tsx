import { TicketAboutProps } from "./ticketAboutTypes";

import styles from "./ticketAbout.module.css";

const TicketAbout: React.FC<TicketAboutProps> = ({ description }) => {
  return (
    <section className={styles.ticketAbout}>
      <h2 className={styles.ticketAbout__title}>
        Sobre o Ingresso selecionado:
      </h2>
      <p className={styles.ticketAbout__text}>{description}</p>
    </section>
  );
};

export default TicketAbout;
