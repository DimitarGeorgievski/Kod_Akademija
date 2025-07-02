import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products.slice";
import { selectProductsInCart } from "./selectors";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
store.subscribe(() => {
  const cartProducts = selectProductsInCart(store.getState())
  if(cartProducts.length > 1) return 
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
