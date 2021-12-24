import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";

const store = configureStore({ reducer: {
    product: ProductReducer,
} });

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, Store, null, Action<string>>;
export default store;