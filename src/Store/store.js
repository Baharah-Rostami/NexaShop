import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (e) {}
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadState(),
  },
});

store.subscribe(() => {
  saveState(store.getState().cart);
});