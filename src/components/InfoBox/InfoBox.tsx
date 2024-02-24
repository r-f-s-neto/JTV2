import { InfoBoxProps } from "./infoBoxTypes";
import Image from "next/image";
import map from "../../assets/images/ticketLocation/map.png";
import styles from "./infoBox.module.css";
import CalendarIcon from "../CalendarIcon";
import UserIcon from "../UserIcon";
import IconArrowDown from "../IconArrowDown";

const InfoBox: React.FC<InfoBoxProps> = ({ type, title, text }) => {
  return (
    <div className={styles.infoBox}>
      <div className={styles.infoBox__icon}>
        {type === "date" ? <CalendarIcon /> : <UserIcon />}
      </div>
      <div className={styles.infoBox__content}>
        <div className={styles.infoBox__content__text}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className={styles.infoBox__content__icon}>
          <IconArrowDown />
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
