import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./products.js";
import cartReducer from "../CartRelated/cart.js";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cartItems: cartReducer
    }
});

