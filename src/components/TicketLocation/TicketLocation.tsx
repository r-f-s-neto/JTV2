import { TicketLocationProps } from "./ticketLocationTypes";
import Image from "next/image";
import map from "../../assets/images/ticketLocation/map.png";
import styles from "./ticketLocation.module.css";

const TicketLocation: React.FC<TicketLocationProps> = () => {
  return (
    <section className={styles.ticketLocation}>
      <h2 className={styles.ticketLocation__title}>Localização</h2>
      <div className={styles.ticketLocation__imageContainer}>
        <Image alt="mapa" src={map} />
      </div>
    </section>
  );
};

export default TicketLocation;
