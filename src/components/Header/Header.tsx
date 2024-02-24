"use client";

import Image from "next/image";
import logoIcon from "../../assets/images/header/logo.svg";
import flagIcon from "../../assets/images/header/flag.svg";
import helpIcon from "../../assets/images/header/message-question-checkmark.svg";
import userIcon from "../../assets/images/header/userIcon.svg";
import { GroupedDataType } from "./header.types";
import styles from "./header.module.css";
import CartButton from "../CartButton/CartButton";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { TicketType } from "@/utils/ticketType";
import ExchangeRate from "../ExchangeRate";

export default function Header() {
  const shoppingCartData = useAppSelector((state) => state.shoppingCart);
  const [total, setTotal] = useState(0);
  const [groupedData, setGroupedData] = useState<GroupedDataType[] | []>([]);

  const calcTotal = () => {
    let total = 0;
    if (shoppingCartData?.length) {
      shoppingCartData.forEach((ticketData: TicketType) => {
        total += ticketData.price.discount;
      });
    }
    return total;
  };
  const groupSameProduct = () => {
    let groupedData: GroupedDataType[] = [];
    if (shoppingCartData?.length) {
      shoppingCartData.forEach((ticketData: TicketType) => {
        const index = groupedData?.findIndex((data) => {
          return data.id === ticketData.id;
        });
        if (index !== -1) {
          const dataToUpdateJson = JSON.stringify(groupedData[index]);
          const dataToUpdate = JSON.parse(dataToUpdateJson);
          dataToUpdate.numberOfItens += 1;
          dataToUpdate.totalPriceOfThisItem += dataToUpdate.price.discount;
          groupedData.splice(index, 1, dataToUpdate);
        } else {
          groupedData.push({
            ...ticketData,
            numberOfItens: 1,
            totalPriceOfThisItem: ticketData.price.discount,
          });
        }
      });
    }
    return groupedData;
  };

  useEffect(() => {
    const totalToUpdate = calcTotal();
    const groupedDataToUpdate = groupSameProduct();
    setTotal(totalToUpdate);
    setGroupedData(groupedDataToUpdate);
  }, [shoppingCartData]);

  return (
    <header className={styles.header}>
      <Image alt="logo" src={logoIcon} priority={true} />
      <div className={styles.header__options}>
        <div className={styles.header__options__exchangeRate}>
          <div className={styles.header__options__exchangeRate__value}>
            <span>cotação do dólar hoje:</span>
            <ExchangeRate />
          </div>
          <Image alt="bandeira do brasil" src={flagIcon} priority={true} />
          <Image alt="simbolo de interrogação" src={helpIcon} priority={true} />
        </div>
        <div className={styles.header__options__userInfo}>
          <button className={styles.userInfo__login}>
            <Image alt="avatar do usuário" src={userIcon} priority={true} />
            <div className={styles.userInfo__login__text}>Entrar</div>
          </button>
          <CartButton
            numberOfItems={shoppingCartData ? shoppingCartData.length : 0}
            cartData={groupedData}
            totalPrice={total}
          />
        </div>
      </div>
    </header>
  );
}
