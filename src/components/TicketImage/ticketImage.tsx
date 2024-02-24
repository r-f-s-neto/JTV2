import Image from "next/image";
import styles from "./ticketImage.module.css";
import { TicketImageProps } from "./ticketImage.types";

const ticketImage: React.FC<TicketImageProps> = ({ name, image }) => {
  return (
    <section className={styles.ticketImage}>
      <div className={styles.ticketImage__img}>
        <Image alt={name} src={image} width="2640" height="434" />
      </div>
      <button className={styles.ticketImage__button}>
        Visualizar mais fotos
      </button>
    </section>
  );
};

export default ticketImage;
