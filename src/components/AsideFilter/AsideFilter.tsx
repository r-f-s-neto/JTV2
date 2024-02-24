import BarReviewScore from "../BarReviewScore";
import NumberOfStars from "../NumberOfStars";
import styles from "./AsideFilter.module.css";
import TypesOfProperties from "../TypesOfProperties";
import PriceRageFilter from "../PriceRageFilter";
import { Checkbox } from "@mui/material";

const AsideFilter = () => {
  return (
    <aside className={styles.asideFilter}>
      <div className={styles.asideFilter__header}>
        <h2>Filtro</h2>
        <span>Limpar todos os filtros</span>
      </div>
      <div className={styles.asideFilter__item}>
        <h3>Preço</h3>
        <PriceRageFilter />
      </div>
      <div className={styles.asideFilter__item}>
        <h3>Tipo de propriedade</h3>
        <div className={styles.asideFilter__item__numberOfStarsContainer}>
          <div className={styles.numberOfStarsContainer__row}>
            <NumberOfStars amountOfStars={5} total={134} />
            <NumberOfStars amountOfStars={4} total={134} />
          </div>
          <div className={styles.numberOfStarsContainer__row}>
            <NumberOfStars amountOfStars={3} total={72} />
            <NumberOfStars amountOfStars={2} total={75} />
            <NumberOfStars amountOfStars={1} total={10} />
          </div>
        </div>
      </div>
      <div className={styles.asideFilter__item}>
        <h3>Comodidades</h3>
        <ul className={styles.amenities__list}>
          <li>
            <Checkbox
              id="wifi"
              sx={{
                padding: 0,
                "& .MuiSvgIcon-root": { fontSize: 20, color: "#9EA5B8" },
              }}
            />
            <label htmlFor="wifi">WI-FI</label>
          </li>
          <li>
            <Checkbox
              id="kitchen"
              sx={{
                padding: 0,
                "& .MuiSvgIcon-root": { fontSize: 20, color: "#9EA5B8" },
              }}
            />
            <label htmlFor="kitchen">Cozinha</label>
          </li>
          <li>
            <Checkbox
              id="washingMachine"
              sx={{
                padding: 0,
                "& .MuiSvgIcon-root": { fontSize: 20, color: "#9EA5B8" },
              }}
            />
            <label htmlFor="washingMachine">Máquina de Lavar</label>
          </li>
          <li>
            <Checkbox
              id="airConditioning"
              sx={{
                padding: 0,
                "& .MuiSvgIcon-root": { fontSize: 20, color: "#9EA5B8" },
              }}
            />
            <label htmlFor="airConditioning">Ar-condicionado</label>
          </li>
          <li>
            <Checkbox
              id="dryer"
              sx={{
                padding: 0,
                "& .MuiSvgIcon-root": { fontSize: 20, color: "#9EA5B8" },
              }}
            />
            <label htmlFor="dryer">Secadora</label>
          </li>
        </ul>
      </div>
      <div className={styles.asideFilter__item}>
        <h3>Tipo de propriedade</h3>

        <TypesOfProperties
          numberOfApartments={234}
          numberOfHouses={346}
          numberOfHotels={23}
        />
      </div>
      <div className={styles.asideFilter__item}>
        <h3>Review Score</h3>
        <ul className={styles.reviewScore__list}>
          <li className={styles.reviewScore__list__item}>
            <BarReviewScore typeOfReview="excellent" numberOfReviews={543} />
          </li>
          <li className={styles.reviewScore__list__item}>
            <BarReviewScore typeOfReview="veryGood" numberOfReviews={543} />
          </li>
          <li className={styles.reviewScore__list__item}>
            <BarReviewScore typeOfReview="good" numberOfReviews={543} />
          </li>
          <li className={styles.reviewScore__list__item}>
            <BarReviewScore typeOfReview="bad" numberOfReviews={543} />
          </li>
          <li className={styles.reviewScore__list__item}>
            <BarReviewScore typeOfReview="veryBad" numberOfReviews={543} />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideFilter;
