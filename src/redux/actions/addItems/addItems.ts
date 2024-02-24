import { PayloadAction } from "@reduxjs/toolkit";
import { ShoppingCartState } from "../../reducers/shoppingCartSlice/shoppingCartTypes";
import { TicketType } from "@/utils/ticketType";

export const addItems = (
  state: ShoppingCartState,
  action: PayloadAction<TicketType>
) => {
  const editedState = [...state, action.payload];
  return editedState;
};
