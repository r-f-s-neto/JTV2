import React from "react";
import Image from "next/image";
import cartIcon from "../../assets/images/cartButton/cart.svg";
import styles from "./cartButton.module.css";
import { CartButtonProps } from "./cartButton.types";
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import PurchaseCard from "../PurchaseCard";
import zIndex from "@mui/material/styles/zIndex";
import PriceInformation from "../PriceInformation";
import SecondaryButton from "../SecondaryButton";
import iconEmptyCart from "../../assets/images/cartButton/emptyCart.svg";
import { GroupedDataType } from "../Header/header.types";
const CartButton: React.FC<CartButtonProps> = ({
  numberOfItems,
  cartData,
  totalPrice,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={styles.cart}>
      {
        <Button
          className={styles.cartButton}
          id="cartButton"
          ref={anchorRef}
          aria-controls={open ? "cartButton-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          variant="contained"
          disableElevation
          sx={{ bgcolor: "#0045F3", borderRadius: "4px" }}
        >
          <Image alt="carrinho de compras" src={cartIcon} priority={true} />
          <div className={styles.cartButton__numberContainer}>
            <span>{numberOfItems}</span>
          </div>
        </Button>
      }
      <Popper
        className={styles.cartButtonPopper}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-end"
        transition
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 25.5],
            },
          },
        ]}
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "right top",
            }}
          >
            <Paper className={styles.cart__list}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {cartData?.length ? (
                    <div className={styles.cart__list__item}>
                      <span className={styles.cart__list__item__ticketText}>
                        Ingressos
                      </span>
                      <div className={styles.cart__list__item__container}>
                        {cartData.map((ticketInfo: GroupedDataType) => {
                          return (
                            <PurchaseCard
                              key={ticketInfo.id}
                              name={ticketInfo.name}
                              image={ticketInfo.image}
                              numberOfTickets={ticketInfo.numberOfItens}
                              pricePerTicket={ticketInfo.price.discount}
                              fullPrice={ticketInfo.totalPriceOfThisItem}
                              id={ticketInfo.id}
                            />
                          );
                        })}
                      </div>
                      <div className={styles.listItem__priceInfo}>
                        <PriceInformation
                          totalPrice={totalPrice}
                          discount={0.07}
                        />
                      </div>
                      <div className={styles.listItem__totalValue}>
                        <span className={styles.listItem__totalValue__text}>
                          Valor total
                        </span>
                        <span className={styles.listItem__totalValue__value}>
                          {totalPrice.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div>
                        {
                          <SecondaryButton
                            text="Ir para o check out"
                            handleClick={() => {}}
                            size="large"
                          />
                        }
                      </div>
                    </div>
                  ) : (
                    <div className={styles.cart__list__emptyCart}>
                      <Image alt="carrinho vazio" src={iconEmptyCart} />
                      <span className={styles.emptyCart__text}>
                        Carrinho vazio
                      </span>
                    </div>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default CartButton;
