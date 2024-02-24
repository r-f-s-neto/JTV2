import IconHeart from "../IconHeart";
import styles from "./ticketCard.module.css";
import Image from "next/image";
import PinIcon from "../../assets/images/searchInput/pinIcon.svg";
import PrimaryButton from "../PrimaryButton";

import { TicketCardProps } from "./ticketCard.types";

const TicketCard: React.FC<TicketCardProps> = ({
  name,
  id,
  location,
  image,
  description = "ingresso",
  priceFull,
  priceDiscount,
  ratingReviewsCount,
  ratingValue,
  handleClick,
}) => {
  return (
    <div data-testid="ticket-card" className={styles.ticketCard}>
      <div className={styles.ticketCard__imageContainer}>
        <span className={styles.ticketCard__imageContainer__firstIcon}>
          {description}
        </span>
        <div className={styles.ticketCard__imageContainer__secondIcon}>
          <IconHeart />
        </div>
        <Image alt={name} src={image} width={213} height={237} />
      </div>
      <div className={styles.ticketCard__content}>
        <div className={styles.ticketCard__content__description}>
          <div className={styles.description__info}>
            <h3 data-testid="ticket-name">{name}</h3>
            <div className={styles.description__info__location}>
              <Image alt="pin de localização" src={PinIcon} />
              <span data-testid="ticket-location">{location}</span>
            </div>
          </div>
          <div className={styles.ticketCardDescription__rating}>
            <div className={styles.ticketCardDescription__rating__value}>
              {ratingValue}
            </div>
            <div className={styles.ticketCardDescription__rating__text}>
              <span className={styles.rating__text__avaliation}>Excelente</span>{" "}
              <span
                className={styles.rating__text__reviewsCount}
              >{`(${ratingReviewsCount} Reviews)`}</span>
            </div>
          </div>
        </div>
        <div className={styles.ticketCard__content__actions}>
          <span
            className={styles.ticketCardActions__fullPrice}
          >{`de ${priceFull?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} por`}</span>
          <div className={styles.ticketCardActions__discountPrice}>
            <span>R$</span>
            <em>
              {priceDiscount?.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </em>
          </div>
          <PrimaryButton
            text="Saber mais"
            handleClick={() => handleClick(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
