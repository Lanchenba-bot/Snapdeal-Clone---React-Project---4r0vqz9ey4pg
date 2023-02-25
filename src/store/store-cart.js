import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;