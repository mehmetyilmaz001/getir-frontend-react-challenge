import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import LookupReducer from "./reducers/LookupReducer";
import ProductReducer from "./reducers/ProductReducer";
import BasketReducer from "./reducers/BasketReducer";

const store = configureStore({ reducer: {
    product: ProductReducer,
    lookup: LookupReducer,
    basket: BasketReducer
} });

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, Store, null, Action<string>>;
export default store;