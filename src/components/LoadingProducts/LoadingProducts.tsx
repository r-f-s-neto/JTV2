import { Skeleton } from "@mui/material";
import styles from "./loadingProducts.module.css";

const LoadingProducts = () => {
  return (
    <div className={styles.loadingProducts}>
      <Skeleton width={"100%"} height={"237px"} variant="rectangular" />
      <Skeleton width={"100%"} height={"237px"} variant="rectangular" />
      <Skeleton width={"100%"} height={"237px"} variant="rectangular" />
      <Skeleton width={"100%"} height={"237px"} variant="rectangular" />
      <Skeleton width={"100%"} height={"237px"} variant="rectangular" />
      <Skeleton width={"100%"} height={"237px"} variant="rectangular" />
    </div>
  );
};

export default LoadingProducts;
