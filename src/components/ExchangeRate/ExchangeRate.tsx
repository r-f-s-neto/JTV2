import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { getExchangeRate } from "../../services/getExchangeRate/getExchangeRate";
import styles from "./exchangeRate.module.css";

const ExchangeRate = () => {
  const [isLoadingExchangeRate, setIsLoadingExchangeRate] = useState(true);
  const [errorExchangeRate, setErrorExchangeRate] = useState(false);
  const [exchangeRate, setExchangeRate] = useState("");

  const updateExchangeRate = async () => {
    setIsLoadingExchangeRate(true);
    setErrorExchangeRate(false);
    const exchangeRateToUpdate = await getExchangeRate();
    if (
      (exchangeRateToUpdate || exchangeRateToUpdate === 0) &&
      typeof exchangeRateToUpdate === "number"
    ) {
      setExchangeRate(
        exchangeRateToUpdate.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    } else {
      setErrorExchangeRate(true);
    }
    setIsLoadingExchangeRate(false);
  };

  const renderExchangeRate = () => {
    if (errorExchangeRate) {
      return (
        <button
          className={styles.exchangeRate__refetchButton}
          type="button"
          onClick={() => updateExchangeRate()}
        >
          Tente novamente
        </button>
      );
    }

    if (isLoadingExchangeRate) {
      return <Skeleton variant="text" width={38} height={24} />;
    }

    return <p className={styles.exchangeRate__value}>{exchangeRate}</p>;
  };

  useEffect(() => {
    updateExchangeRate();
  }, []);

  return <div className={styles.exchangeRate}>{renderExchangeRate()}</div>;
};

export default ExchangeRate;
