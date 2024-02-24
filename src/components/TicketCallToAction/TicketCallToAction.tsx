"use client";
import { TicketCallToActionProps } from "./ticketCallToAction.types";

import styles from "./ticketCallToAction.module.css";
import InfoBox from "../InfoBox";
import SecondaryButton from "../SecondaryButton";
import { AppDispatch, store } from "@/redux/store";
import { shoppingCartActions } from "@/redux/reducers/shoppingCartSlice/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const TicketCallToAction: React.FC<TicketCallToActionProps> = ({
  ticketInfo,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(shoppingCartActions.addItems(ticketInfo));
    toast.success("Ingresso adicionado ao carrinho", {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <section className={styles.ticketCallToAction}>
      <div className={styles.ticketCallToAction__date}>
        <InfoBox type="date" title="Data do Ingresso" text="22/12/2022" />
      </div>
      <div className={styles.ticketCallToAction__tickets}>
        <InfoBox type="tickets" title="Ingressos" text="03 Ingressos" />
      </div>
      <div className={styles.ticketCallToAction__age}>
        <div className={styles.ticketCallToAction__age__item}>
          <span>01 Ingresso infantil</span>
          <span>R$245,99</span>
        </div>
        <div className={styles.ticketCallToAction__age__item}>
          <span>02 Ingresso Adultos</span>
          <span>R$245,99</span>
        </div>
      </div>
      <div className={styles.ticketCallToAction__value}>
        <span className={styles.ticketCallToAction__value__text}>
          Valor total
        </span>
        <span className={styles.ticketCallToAction__value__price}>
          {ticketInfo?.price?.discount?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div>
        <SecondaryButton text="Comprar Ingresso" handleClick={handleClick} />
      </div>
    </section>
  );
};

export default TicketCallToAction;
