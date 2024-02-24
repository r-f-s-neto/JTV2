import Image from "next/image";

import hotelIcon from "../../assets/images/typesOfProperties/hotelIcon.svg";

import { TypesOfPropertiesProps } from "./typesOfProperties.types";

import styles from "./typesOfProperties.module.css";
import { useState } from "react";
import IconHouse from "../IconHouse";
import ApartmentIcon from "../ApartmentIcon";
import HotelIcon from "../HotelIcon";

const TypesOfProperties: React.FC<TypesOfPropertiesProps> = ({
  numberOfHouses,
  numberOfApartments,
  numberOfHotels,
}) => {
  const [buttonActive, setButtonActive] = useState("house");
  return (
    <div className={styles.typesOfProperties}>
      <button
        className={`${styles.typesOfProperties__buton} ${
          buttonActive === "house"
            ? styles.typesOfProperties__buton__active
            : ""
        }`}
        onClick={() => setButtonActive("house")}
      >
        <IconHouse />
        <span>{`casa (${numberOfHouses})`}</span>
      </button>
      <button
        className={`${styles.typesOfProperties__buton} ${
          buttonActive === "apartment"
            ? styles.typesOfProperties__buton__active
            : ""
        }`}
        onClick={() => setButtonActive("apartment")}
      >
        <ApartmentIcon />
        <span>{`casa (${numberOfApartments})`}</span>
      </button>
      <button
        className={`${styles.typesOfProperties__buton} ${
          buttonActive === "hotel"
            ? styles.typesOfProperties__buton__active
            : ""
        }`}
        onClick={() => setButtonActive("hotel")}
      >
        <HotelIcon />
        <span>{`casa (${numberOfHotels})`}</span>
      </button>
    </div>
  );
};

export default TypesOfProperties;
