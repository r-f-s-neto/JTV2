"use client";

import { Provider } from "react-redux";
import { store } from "..";
import { StoreWrapperProps } from "./StoreWrapperProps";

const StoreWrapper: React.FC<StoreWrapperProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreWrapper;
