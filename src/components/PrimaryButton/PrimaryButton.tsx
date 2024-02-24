import IconArrow from "../IconArrow";

import styles from "./primaryButton.module.css";

import { PrimaryButtonProps } from "./primaryButtonTypes";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ handleClick, text }) => {
  return (
    <button className={styles.primaryButton} onClick={handleClick}>
      <div className={styles.primaryButton__text}>{text}</div>
      <div className={styles.primaryButton__arrow}>
        <IconArrow />
      </div>
    </button>
  );
};

export default PrimaryButton;
