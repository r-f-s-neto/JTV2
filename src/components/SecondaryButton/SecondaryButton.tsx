import IconArrow from "../IconArrow";

import styles from "./secondaryButton.module.css";

import { SecondaryButtonProps } from "./SecondaryButton.types";

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  handleClick,
  text,
  size = "regular",
}) => {
  return (
    <button
      className={`${styles.secondaryButton} ${
        size === "large" ? styles.secondaryButton__large : ""
      }`}
      onClick={handleClick}
    >
      <div className={styles.secondaryButton__text}>{text}</div>
    </button>
  );
};

export default SecondaryButton;
