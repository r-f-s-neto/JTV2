import { Pagination, ThemeProvider, createTheme } from "@mui/material";
import { ChangeEvent } from "react";
import { PaginationHomeProps } from "./PaginationHome.types";
import styles from "./paginationHome.module.css";
import SelectPages from "../SelectPages";

const PaginationHome: React.FC<PaginationHomeProps> = ({
  page,
  setPage,
  totalOfItems,
  itemsPerPage,
}) => {
  const theme = createTheme({
    components: {
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            color: "#455CC7",
          },
        },
      },
    },
  });
  const handleChangePages = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div className={styles.paginationHome}>
      <div className={styles.paginationHome__textContainer}>
        <div
          className={styles.paginationHome__total}
        >{`${totalOfItems} Resultados`}</div>
        <div className={styles.paginationHome__textContainer__selectPage}>
          <span
            className={styles.paginationHome__textContainer__selectPage__text}
          >
            Página:
          </span>
          <SelectPages
            totalOfItems={totalOfItems}
            itemsPerPage={itemsPerPage}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <Pagination
          page={page}
          count={itemsPerPage ? Math.ceil(totalOfItems / itemsPerPage) : 1}
          onChange={handleChangePages}
        />
      </ThemeProvider>
    </div>
  );
};

export default PaginationHome;
