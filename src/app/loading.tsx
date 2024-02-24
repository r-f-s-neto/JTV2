import React from "react";
import { CircularProgress } from "@mui/material";
import { Metadata } from "next";
import styles from "./loading.module.css";

export const metadata: Metadata = {
  title: "Loading... - Logoipsum",
};
const loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <CircularProgress />
    </div>
  );
};

export default loading;
