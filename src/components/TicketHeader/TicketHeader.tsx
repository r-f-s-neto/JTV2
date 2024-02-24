import Image from "next/image";
import { TicketHeaderProps } from "./ticketHeaderTypes";
import PinIcon from "../../assets/images/searchInput/pinIcon.svg";
import styles from "./ticketHeader.module.css";
//import { useRouter } from "next/navigation";
import arrowIcon from "../../assets/images/ticketHeader/arrowLeft.svg";
import Link from "next/link";

const TicketHeader: React.FC<TicketHeaderProps> = ({
  name,
  location,
  path = "/",
}) => {
  //const router = useRouter();
  return (
    <div className={styles.ticketHeader}>
      <Link href={path}>
        <Image alt="seta" src={arrowIcon} priority={true} />
      </Link>
      <div className={styles.ticketHeader__info}>
        <h3>{name}</h3>
        <div className={styles.ticketHeader__info__location}>
          <Image alt="pin de localização" src={PinIcon} priority={true} />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketHeader;
