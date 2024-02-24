import Image from "next/image";
import React from "react";
import folderIcon from "../../assets/images/noData/no-data-icon.png";
import styles from "./noData.module.css";
import { NoDataProps } from "./noData.types";

const NoData: React.FC<NoDataProps> = ({ text }) => {
  return (
    <div className={styles.noData}>
      <Image alt="pasta vazia" src={folderIcon} />
      <span className={styles.noData__text}>{text}</span>
    </div>
  );
};

export default NoData;
