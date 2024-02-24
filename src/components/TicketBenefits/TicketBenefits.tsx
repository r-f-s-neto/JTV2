import Image from "next/image";

import ticketIcon from "../../assets/images/ticketBenefits/ticketIcon.svg";
import wifiIcon from "../../assets/images/ticketBenefits/wifiIcon.svg";
import coffeIcon from "../../assets/images/ticketBenefits/coffeIcon.svg";
import houseIcon from "../../assets/images/ticketBenefits/houseIcon.svg";

import styles from "./ticketBenefits.module.css";
import { useEffect, useState } from "react";

const TicketBenefits = () => {
  return (
    <div className={styles.ticketBenefits}>
      <div className={styles.ticketBenefits__item}>
        <Image alt="ícone de ingresso" src={ticketIcon} />
        <span className={styles.ticketBenefits__item__text}>
          Passagem Aérea
        </span>
      </div>

      <div className={styles.ticketBenefits__item}>
        <Image alt="ícone de wifi" src={wifiIcon} />
        <span className={styles.ticketBenefits__item__text}>Wi-fi</span>
      </div>

      <div className={styles.ticketBenefits__item}>
        <Image alt="ícone de uma xícara de café" src={coffeIcon} />
        <span className={styles.ticketBenefits__item__text}>Café de manhã</span>
      </div>

      <div className={styles.ticketBenefits__item}>
        <Image alt="ícone de uma casa" src={houseIcon} />
        <span className={styles.ticketBenefits__item__text}>Quarto</span>
      </div>
    </div>
  );
};

export default TicketBenefits;
