import Image from "next/image";
import styles from "./purchaseCard.module.css";
import { PurchaseCardProps } from "./purchaseCardTypes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { shoppingCartActions } from "@/redux/reducers/shoppingCartSlice/shoppingCartSlice";
import Trash from "@/assets/svgs/Trash";

const PurchaseCard: React.FC<PurchaseCardProps> = ({
  name,
  image,
  numberOfTickets,
  pricePerTicket,
  fullPrice,
  id,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(shoppingCartActions.removeItems(id));
  };
  return (
    <div className={styles.purchaseCardContainer}>
      <div className={styles.purchaseCard}>
        <div className={styles.purchaseCard__image}>
          <Image alt={name} src={image} width={57} height={62} />
        </div>
        <div className={styles.purchaseCard__content}>
          <div className={styles.purchaseCard__content__info}>
            <div className={styles.contentInfo}>
              <div className={styles.contentInfoContainer}>
                <h3 className={styles.contentInfo__title}>
                  {`${name} -`}
                  <br />
                  22/12/2022
                </h3>
                <span className={styles.contentInfo__text}>
                  1 Adulto: R$500,00 2 Crianças: R$234,33
                </span>
              </div>
              <button
                className={styles.purchaseCard__content__button}
                onClick={handleClick}
              >
                <Trash />
              </button>
            </div>
            <div className={styles.purchaseCardContainer__qtd}>
              <span>{`Qtd ${numberOfTickets}`}</span>
              <span>{pricePerTicket}</span>
            </div>
            <div className={styles.purchaseCardContainer__sub}>
              <span>Subtotal</span>
              <span>{fullPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
