import { createSlice } from "@reduxjs/toolkit";
import { ShoppingCartState } from "./shoppingCartTypes";
import { addItems } from "../../actions/addItems/addItems";
import { removeItems } from "@/redux/actions/removeItems/removeItems";

const initialState: ShoppingCartState = [];

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  reducers: {
    addItems,
    removeItems,
  },
});

export const { reducer: shoppingCartReducer, actions: shoppingCartActions } =
  shoppingCartSlice;
