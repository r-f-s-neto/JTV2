import {
  Button,
  ClickAwayListener,
  FormControl,
  Grow,
  InputLabel,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Select,
  styled,
} from "@mui/material";
import { SelectPagesProps } from "./selectPagesTypes";
import { useEffect, useRef, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { createArray } from "@/utils/createArray";
import ArrowDown from "@/assets/svgs/ArrowDown/ArrowDown";
import styles from "./selectPages.module.css";

const SelectPages: React.FC<SelectPagesProps> = ({
  totalOfItems,
  page,
  setPage,
  itemsPerPage,
}) => {
  const [arrOfPages, setArrOfPages] = useState([1]);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const handleClickOutside = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    const target = event.target as HTMLElement;
    if (target) {
      const pageToUpdate = Number(target.innerText ? target.innerText : page)
        ? Number(target.innerText)
        : page;
      setPage(pageToUpdate);
    }

    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const getArrOfPages = () => {
    let arrOfPagesToUpdate = [1];
    const totalOfPages = itemsPerPage
      ? Math.ceil(totalOfItems / itemsPerPage)
      : 1;

    if (totalOfPages) {
      arrOfPagesToUpdate = createArray(totalOfPages);
    }

    setArrOfPages(arrOfPagesToUpdate);
    return arrOfPagesToUpdate;
  };

  useEffect(() => {
    getArrOfPages();
  }, [totalOfItems, itemsPerPage]);

  return (
    <div className={styles.selectPages}>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={styles.selectPages__button}
      >
        <span className={styles.selectPages__button__text}>{page}</span>
        <div className={styles.selectPages__button__icon}>
          <ArrowDown />
        </div>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClickOutside}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {arrOfPages?.length
                    ? arrOfPages.map((page) => {
                        return (
                          <MenuItem
                            key={page}
                            value={page}
                            onClick={handleClose}
                          >
                            <div
                              style={{
                                fontSize: 12,
                                lineHeight: "12px",
                                color: "blue",
                              }}
                            >
                              {page}
                            </div>
                          </MenuItem>
                        );
                      })
                    : null}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default SelectPages;
