import { Skeleton } from "@mui/material";
import React from "react";
import styles from "./loadingTicketPage.module.css";
//7
//12,19
//7.629
const loading = () => {
  return (
    <div className={styles.loadingTicketPage}>
      <Skeleton variant="rectangular" width={"100%"} height={"21vh"} />
      <div className={styles.loadingTicketPage__info}>
        <Skeleton variant="rectangular" width={"100%"} height={"46vh"} />
        <Skeleton variant="rectangular" width={"100%"} height={"46vh"} />
      </div>
    </div>
  );
};

export default loading;
