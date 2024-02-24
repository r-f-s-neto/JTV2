import React from "react";
import { PriceInformationProps } from "./priceInformationTypes";
import styles from "./priceInformation.module.css";

const PriceInformation: React.FC<PriceInformationProps> = ({
  totalPrice,
  discount,
}) => {
  return (
    <div className={styles.priceInformation}>
      <div className={styles.priceInformation__tickets}>
        <span>Ingressos</span>
        <span>
          {totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className={styles.priceInformation__subtotal}>
        <span className={styles.priceInformation__subtotal__text}>
          Subtotal
        </span>
        <span className={styles.priceInformation__subtotal__price}>
          {totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className={styles.priceInformation__discount}>
        <span className={styles.priceInformation__discount__text}>
          {`1X de ${(totalPrice * (1 - discount)).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} com desconto de `}
          <span className={styles.priceInformation__discount__textBlue}>{`${(
            discount * 100
          ).toFixed(0)}%`}</span>
        </span>
        <span className={styles.priceInformation__discount__price}>{`-${(
          totalPrice * discount
        ).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`}</span>
      </div>
      <div className={styles.priceInformation__noDiscount}>
        <span>{`10X Sem juros de ${(totalPrice / 10).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`}</span>
        <span>
          {totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
};

export default PriceInformation;
