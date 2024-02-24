import { PriceFilterProps } from "./priceRageButton.types";
import styles from "./priceRageButton.module.css";

const PriceRageButton: React.FC<PriceFilterProps> = ({
  initialPrice,
  finalPrice,
  isActive,
  id,
  handleClick,
}) => {
  return (
    <button
      className={`${styles.priceRageButton} ${
        isActive ? styles.priceRageButton__active : ""
      }`}
      onClick={() => handleClick(id)}
    >
      <span>{`${initialPrice?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })} - ${finalPrice?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`}</span>
    </button>
  );
};

export default PriceRageButton;
