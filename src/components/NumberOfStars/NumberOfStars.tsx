import React from "react";
import Image from "next/image";
import starIcon from "../../assets/images/numberOfStars/starIcon.svg";
import { NumberOfStarsProps } from "./numberOfStars.types";
import styles from "./numberOfStars.module.css";

const NumberOfStars: React.FC<NumberOfStarsProps> = ({
  amountOfStars,
  total,
}) => {
  const handleNumberOfStars = (amountOfStars: number, total: number) => {
    switch (amountOfStars) {
      case 1:
        return (
          <div className={styles.numberOfStars__container}>
            <div className={styles.numberOfStars__container__stars}>
              <Image alt="estrela" src={starIcon} />
            </div>
            <span
              className={styles.numberOfStars__container__total}
            >{`(${total})`}</span>
          </div>
        );
      case 2:
        return (
          <div className={styles.numberOfStars__container}>
            <div className={styles.numberOfStars__container__stars}>
              <Image alt="estrela" src={starIcon} />
              <Image alt="estrela" src={starIcon} />
            </div>
            <span
              className={styles.numberOfStars__container__total}
            >{`(${total})`}</span>
          </div>
        );
      case 3:
        return (
          <div className={styles.numberOfStars__container}>
            <div className={styles.numberOfStars__container__stars}>
              <Image alt="estrela" src={starIcon} />
              <Image alt="estrela" src={starIcon} />
              <Image alt="estrela" src={starIcon} />
            </div>
            <span
              className={styles.numberOfStars__container__total}
            >{`(${total})`}</span>
          </div>
        );
      case 4:
        return (
          <div className={styles.numberOfStars__container}>
            <div className={styles.numberOfStars__container__stars}>
              <Image alt="estrela" src={starIcon} />
              <Image alt="estrela" src={starIcon} />
              <Image alt="estrela" src={starIcon} />
              <Image alt="estrela" src={starIcon} />
            </div>
            <span
              className={styles.numberOfStars__container__total}
            >{`(${total})`}</span>
          </div>
        );
      case 5:
        return (
          <div className={styles.numberOfStars__container}>
            <div className={styles.numberOfStars__container__stars}>
              <Image alt="estrela" src={starIcon} />
              <Image alt="estrela" src={starIcon} />
              <Image alt="estrela" src={starIcon} />
              <Image alt="estrela" src={starIcon} />
              <Image alt="estrela" src={starIcon} />
            </div>
            <span
              className={styles.numberOfStars__container__total}
            >{`(${total})`}</span>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className={styles.numberOfStars}>
      {handleNumberOfStars(amountOfStars, total)}
    </div>
  );
};

export default NumberOfStars;
