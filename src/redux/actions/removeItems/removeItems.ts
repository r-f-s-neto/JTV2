import { PayloadAction } from "@reduxjs/toolkit";
import { ShoppingCartState } from "../../reducers/shoppingCartSlice/shoppingCartTypes";

export const removeItems = (
  state: ShoppingCartState,
  action: PayloadAction<string>
) => {
  let filteredState: ShoppingCartState = [];
  if (state?.length) {
    filteredState = state.filter((ticket: any) => {
      return ticket.id !== action.payload;
    });
  }
  return filteredState;
};
